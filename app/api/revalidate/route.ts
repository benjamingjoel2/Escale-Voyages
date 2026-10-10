import { revalidateTag } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";
import { parseBody } from "next-sanity/webhook";

type Payload = { _type?: string; slug?: { current?: string } };

/**
 * Sanity webhook target. Configure in sanity.io/manage → API → Webhooks:
 *   URL: https://<site>/api/revalidate, trigger on create/update/delete,
 *   projection: {_type, slug}, secret: SANITY_REVALIDATE_SECRET.
 */
export async function POST(req: NextRequest) {
  const secret = process.env.SANITY_REVALIDATE_SECRET;
  if (!secret) {
    return NextResponse.json({ message: "SANITY_REVALIDATE_SECRET is not set" }, { status: 500 });
  }

  const { isValidSignature, body } = await parseBody<Payload>(req, secret);
  if (!isValidSignature) {
    return NextResponse.json({ message: "Invalid signature" }, { status: 401 });
  }

  const type = body?._type;
  const tags: string[] = [];
  switch (type) {
    case "journey":
      tags.push("journeys");
      if (body?.slug?.current) tags.push(`journey:${body.slug.current}`);
      break;
    case "destination":
      tags.push("destinations", "journeys");
      break;
    case "siteSettings":
      tags.push("settings");
      break;
    default:
      tags.push("content");
  }
  for (const tag of tags) revalidateTag(tag, "max");

  return NextResponse.json({ revalidated: tags, type });
}
