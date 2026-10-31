// Cloudflare Workers only (imported first by cloudflare/worker.mjs). Vercel never loads this file.
//
// Why: with Cache Components, Next.js renders a page at request time in a few
// sequential timer tasks (static shell, prefetch, ..., abort). It expects the
// React work started in one task, which React schedules with `setImmediate`,
// to finish before the next task's timer fires. On Node it gets that from its
// "fast setImmediate" patch, which runs captured immediates from a
// `process.nextTick` queued inside a microtask. Node runs that tick only after
// the whole microtask queue has drained.
//
// workerd runs `process.nextTick` as a plain FIFO microtask, so Next's patch
// stops capturing before React's promise chains have run. React's later
// immediates then fall through to workerd's `setImmediate`, which fires after
// the stage timers that are already queued. The final render gets aborted half
// done, the segment-prefetch step waits on a promise that never settles, and
// workerd cancels the request ("Worker's code had hung"). That breaks every
// cache miss, ISR regeneration and the dynamic parts of partially prerendered
// pages.
//
// Fix: Next keeps the functions it wraps on a global symbol and reuses them
// when they are already set. We set them first, with a `setImmediate` that runs
// in a microtask, ahead of any timer. That is the ordering Next's patch
// produces on Node. A safety valve falls back to the native immediate after a
// long chain of back-to-back immediates, so code that polls with `setImmediate`
// cannot starve the event loop.

const ORIGINALS = Symbol.for("next.fast-set-immediate.originals");
const PROMISIFY = Symbol.for("nodejs.util.promisify.custom");
const MAX_CHAINED = 10_000;

if (!globalThis[ORIGINALS] && typeof globalThis.setImmediate === "function") {
  const nativeSetImmediate = globalThis.setImmediate;
  const nativeClearImmediate = globalThis.clearImmediate;
  let chained = 0;
  let resetPending = false;

  class FastImmediate {
    constructor() {
      this.cleared = false;
      this.refed = true;
      this.native = null;
    }
    ref() {
      this.refed = true;
      this.native?.ref?.();
      return this;
    }
    unref() {
      this.refed = false;
      this.native?.unref?.();
      return this;
    }
    hasRef() {
      return this.refed;
    }
    [Symbol.dispose]() {
      clearFastImmediate(this);
    }
  }

  function setFastImmediate(callback, ...args) {
    const immediate = new FastImmediate();
    const run = () => {
      if (!immediate.cleared) callback(...args);
    };
    if (++chained > MAX_CHAINED) {
      immediate.native = nativeSetImmediate(run);
      return immediate;
    }
    if (!resetPending) {
      resetPending = true;
      // Timers can't be set at global scope; then there is nothing to reset yet.
      try {
        setTimeout(() => {
          chained = 0;
          resetPending = false;
        }, 0);
      } catch {
        resetPending = false;
      }
    }
    queueMicrotask(run);
    return immediate;
  }

  function clearFastImmediate(immediate) {
    if (immediate instanceof FastImmediate) {
      immediate.cleared = true;
      if (immediate.native) nativeClearImmediate(immediate.native);
    } else if (immediate != null) {
      nativeClearImmediate(immediate);
    }
  }

  setFastImmediate[PROMISIFY] = (value, options) =>
    new Promise((resolve, reject) => {
      if (options?.signal?.aborted) return reject(options.signal.reason);
      const immediate = setFastImmediate(resolve, value);
      options?.signal?.addEventListener("abort", () => {
        clearFastImmediate(immediate);
        reject(options.signal.reason);
      }, { once: true });
    });

  globalThis[ORIGINALS] = {
    setImmediate: setFastImmediate,
    clearImmediate: clearFastImmediate,
    nextTick: process.nextTick,
  };
}
