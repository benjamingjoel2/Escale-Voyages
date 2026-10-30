import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function NotFound() {
  const t = useTranslations("NotFound");
  return (
    <main className="container-wide py-32 flex-1">
      <span className="eyebrow">404</span>
      <h1 className="t-h2 mt-3">{t("title")}</h1>
      <p className="t-body mt-4">{t("body")}</p>
      <Link href="/" className="btn btn-inline mt-8 w-max">
        {t("back")}
      </Link>
    </main>
  );
}
