import { MediaSlot } from "@/components/ui/MediaSlot";

type Props = {
  eyebrow: string;
  title: string;
  intro?: string;
  file?: string;
  src?: string;
  alt?: string;
  label: string;
  tone?: "accent" | "lagoon" | "savannah" | "coast" | "night" | "indigo" | "season" | "hero";
  children?: React.ReactNode;
};

/** Full-bleed hero for secondary pages, under the overlay nav. */
export function PageHero({ eyebrow, title, intro, file, src, alt = "", label, tone = "indigo", children }: Props) {
  return (
    <>
      <section className="relative">
        <MediaSlot
          label={label}
          file={file}
          src={src}
          alt={alt}
          priority
          tone={tone}
          labelPosition="top-right"
          className="grid min-h-[70svh] content-end text-white"
        >
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/65" />
          <div className="container-wide relative grid gap-4 pb-10 pt-40 md:pb-14">
            <span className="eyebrow !text-white !opacity-80">{eyebrow}</span>
            <h1 className="max-w-[16ch] text-[clamp(40px,6.5vw,88px)] font-medium leading-[0.95] tracking-[-0.02em]">
              {title}
            </h1>
            {intro ? (
              <p className="t-italic max-w-[40ch] text-[20px] text-white/90 md:text-[26px]">{intro}</p>
            ) : null}
            {children}
          </div>
        </MediaSlot>
      </section>
      <div className="haze" aria-hidden="true" />
    </>
  );
}

/** Plain page header for text-led pages, under the solid nav. */
export function PageHeader({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return (
    <section className="container-wide pt-12 md:pt-20">
      <span className="eyebrow">{eyebrow}</span>
      <h1 className="t-h2 mt-3 text-[clamp(36px,5vw,64px)]">{title}</h1>
      {intro ? <p className="t-body mt-5 !max-w-[64ch]">{intro}</p> : null}
    </section>
  );
}
