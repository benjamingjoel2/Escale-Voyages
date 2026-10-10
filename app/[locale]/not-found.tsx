import { Link } from "@/i18n/navigation";

export default function NotFound() {
  return (
    <main className="container-wide py-32 flex-1">
      <span className="eyebrow">404</span>
      <h1 className="t-h2 mt-3">This page is not on the map.</h1>
      <p className="t-body mt-4">
        The address may have changed or never existed. Start again from the
        kingdom&apos;s gate.
      </p>
      <Link href="/" className="btn btn-inline mt-8 w-max">
        Back to Danxomè
      </Link>
    </main>
  );
}
