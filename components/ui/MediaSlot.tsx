import Image from "next/image";
import { useTranslations } from "next-intl";
import { mediaSrc } from "@/lib/media";

type Tone =
  | "accent"
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
  /** Media filename. If it exists in public/media it is rendered with next/image. */
  file?: string;
  /** Explicit image URL (CMS asset). Takes precedence over `file`. */
  src?: string;
  alt?: string;
  /** Load eagerly with high priority (hero only). */
  priority?: boolean;
  sizes?: string;
  tone?: Tone;
  className?: string;
  /** Where to pin the label. */
  labelPosition?: "center" | "bottom-left" | "top-right";
  children?: React.ReactNode;
};

const toneClass: Record<Tone, string> = {
  accent: "tone-accent",
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
 * Media frame. Renders the real photograph when one exists in public/media,
 * otherwise a toned gradient with the exact filename and aspect ratio the
 * photographer needs. Children render above the image.
 */
export function MediaSlot({
  label,
  file,
  src: srcProp,
  alt = "",
  priority = false,
  sizes = "100vw",
  tone = "accent",
  className = "",
  labelPosition = "center",
  children,
}: Props) {
  const t = useTranslations("Media");
  const src = srcProp ?? (file ? mediaSrc(file) : undefined);

  return (
    <div
      className={`relative overflow-hidden ${toneClass[tone]} ${className}`}
      role={src ? undefined : "img"}
      aria-label={src ? undefined : `${t("placeholder")}: ${label}`}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
        />
      ) : (
        <span
          className={`absolute z-10 max-w-[80%] rounded-[3px] border border-dashed border-white/50 bg-black/25 px-2.5 py-1.5 text-[10.5px] leading-snug text-white ${positionClass[labelPosition]}`}
        >
          {label}
        </span>
      )}
      {children}
    </div>
  );
}
