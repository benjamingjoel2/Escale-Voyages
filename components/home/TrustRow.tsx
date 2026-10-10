import { useTranslations } from "next-intl";

const items = ["licence", "press", "reviews", "founded"] as const;

export function TrustRow() {
  const t = useTranslations("Trust");

  return (
    <section className="container-wide py-10 md:py-14">
      <ul className="flex flex-wrap items-center gap-4 opacity-75 md:gap-7">
        {items.map((k) => (
          <li
            key={k}
            className="rounded-[3px] border border-dashed border-line px-4 py-3.5 text-[11px] uppercase tracking-[0.1em] text-ink"
          >
            {t(k)}
          </li>
        ))}
      </ul>
    </section>
  );
}
