import { useTranslations } from "next-intl";

type Tone =
  | "laterite"
  | "lagoon"
  | "savannah"
  | "coast"
  | "night"
  | "indigo"
  | "season"
  | "hero";

type Props = {
  /** Filename and dimensions to commission, e.g. "dest-ouidah.jpg · 1600×2000". */
  label: string;
  tone?: Tone;
  className?: string;
  /** Where to pin the label. */
  labelPosition?: "center" | "bottom-left" | "top-right";
  children?: React.ReactNode;
};

const toneClass: Record<Tone, string> = {
  laterite: "tone-laterite",
  lagoon: "tone-lagoon",
  savannah: "tone-savannah",
  coast: "tone-coast",
  night: "tone-night",
  indigo: "tone-indigo",
  season: "tone-season",
  hero: "tone-hero",
};

const positionClass = {
  center: "left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center",
  "bottom-left": "left-4 bottom-4 text-left",
  "top-right": "right-4 top-4 text-right",
};

/**
 * Placeholder for media that has not been commissioned yet. Renders a toned
 * gradient with the exact filename and aspect ratio the photographer needs.
 * Swap for next/image or a <video> once the asset exists.
 */
export function MediaSlot({
  label,
  tone = "laterite",
  className = "",
  labelPosition = "center",
  children,
}: Props) {
  const t = useTranslations("Media");
  return (
    <div
      className={`relative overflow-hidden ${toneClass[tone]} ${className}`}
      role="img"
      aria-label={`${t("placeholder")}: ${label}`}
    >
      <span
        className={`absolute z-10 max-w-[80%] rounded-[3px] border border-dashed border-white/50 bg-black/25 px-2.5 py-1.5 text-[10.5px] leading-snug text-white ${positionClass[labelPosition]}`}
      >
        {label}
      </span>
      {children}
    </div>
  );
}
