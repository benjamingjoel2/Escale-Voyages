import Image from "next/image";
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

/**
 * Media frame. Renders the real photograph when one exists in public/media
 * (or a CMS URL). Without one it renders a plain neutral block: no gradient,
 * no drawing and no filename, so placeholder art can never reach the page.
 * `label`, `tone` and `labelPosition` are kept for call-site compatibility.
 */
export function MediaSlot({
  file,
  src: srcProp,
  alt = "",
  priority = false,
  sizes = "100vw",
  className = "",
  children,
}: Props) {
  const src = srcProp ?? (file ? mediaSrc(file) : undefined);

  return (
    <div className={`relative overflow-hidden ${src ? "" : "bg-grey"} ${className}`}>
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          fetchPriority={priority ? "high" : undefined}
          quality={priority ? 70 : 75}
          sizes={sizes}
          priority={priority}
          className="object-cover"
        />
      ) : null}
      {children}
    </div>
  );
}
