import { Studio } from "@/components/studio/Studio";
import { sanityEnabled } from "@/sanity/env";

/**
 * Embedded Sanity Studio at /studio. Sanity handles authentication; the
 * owner signs in with the account that owns the project.
 */
export default function StudioPage() {
  if (!sanityEnabled) {
    return (
      <main style={{ fontFamily: "system-ui", padding: "48px 24px", maxWidth: 640 }}>
        <h1 style={{ fontSize: 24, marginBottom: 12 }}>Studio is not configured</h1>
        <p style={{ lineHeight: 1.5 }}>
          Set <code>NEXT_PUBLIC_SANITY_PROJECT_ID</code> and{" "}
          <code>NEXT_PUBLIC_SANITY_DATASET</code> in the environment (see{" "}
          <code>.env.example</code>), then reload. Until then the site runs on
          the placeholder content in <code>lib/data</code>.
        </p>
      </main>
    );
  }
  return <Studio />;
}
