import { type NextRequest, NextResponse } from "next/server";
import { providerByName, type ProviderName } from "@/lib/payments";
import { writeClient } from "@/lib/sanity/write";

/**
 * Payment webhooks. One URL per provider:
 *   POST /api/webhooks/payments?provider=fedapay|kkiapay|stripe|mock
 * The adapter authenticates the call; we then update the booking's payment
 * status in Sanity by the provider reference.
 */
export async function POST(req: NextRequest) {
  const name = (req.nextUrl.searchParams.get("provider") ?? "mock") as ProviderName;
  if (!["mock", "fedapay", "kkiapay", "stripe"].includes(name)) {
    return NextResponse.json({ message: "Unknown provider" }, { status: 400 });
  }
  if (name === "mock" && process.env.NODE_ENV === "production" && !process.env.ALLOW_MOCK_WEBHOOK) {
    return NextResponse.json({ message: "Mock webhook disabled in production" }, { status: 403 });
  }
  const event = await providerByName(name).parseWebhook(req);
  if (!event) return NextResponse.json({ message: "Invalid webhook" }, { status: 401 });

  if (writeClient) {
    const docId = await writeClient.fetch<string | null>(
      `*[_type == "bookingRequest" && (payment.reference == $pref || _id == $byRef)][0]._id`,
      { pref: event.providerReference, byRef: event.reference ? `booking-${event.reference}` : "" },
    );
    if (docId) {
      await writeClient
        .patch(docId)
        .set({
          "payment.status": event.status,
          "payment.provider": event.provider,
          "payment.reference": event.providerReference,
          ...(event.status === "paid" ? { "payment.paidAt": new Date().toISOString(), status: "confirmed" } : {}),
        })
        .commit();
    }
  } else {
    console.info("[payments webhook] (Sanity write not configured)", event);
  }
  return NextResponse.json({ ok: true, provider: event.provider, status: event.status });
}
