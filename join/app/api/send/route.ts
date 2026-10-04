import { sendToBitrix24 } from "@togotravel/shared/lib/sendToBitrix24";
import { NextRequest, NextResponse } from "next/server";

function publicOrigin(request: NextRequest) {
  const forwardedHost = request.headers
    .get("x-forwarded-host")
    ?.split(",")[0]
    ?.trim();
  const host =
    forwardedHost || request.headers.get("host") || request.nextUrl.host;
  const proto =
    request.headers.get("x-forwarded-proto")?.split(",")[0]?.trim() ||
    request.nextUrl.protocol.replace(":", "") ||
    "https";
  return `${proto}://${host}`;
}

function wantsJson(request: NextRequest) {
  const accept = request.headers.get("accept") ?? "";
  return (
    accept.includes("application/json") ||
    request.headers.get("x-requested-with") === "XMLHttpRequest"
  );
}

export async function POST(request: NextRequest) {
  const formData = await request.formData();

  const name = String(formData.get("NAME") ?? "").trim();
  const destination = String(formData.get("LAST_NAME") ?? "").trim();
  const phone = String(formData.get("PHONE") ?? "").trim();

  const json = wantsJson(request);
  const origin = publicOrigin(request);

  if (!name || !phone) {
    if (json) {
      return NextResponse.json(
        { success: false, error: "missing_fields" },
        { status: 400 }
      );
    }
    return NextResponse.redirect(new URL("/?error=true#form", origin), 303);
  }

  const result = await sendToBitrix24({
    name,
    phone,
    destination: destination || undefined,
    title: "Новий лід з сайта Join-Up.com.ua",
  });

  if (!result.success) {
    if (json) {
      return NextResponse.json(
        { success: false, error: result.error },
        { status: 502 }
      );
    }
    return NextResponse.redirect(new URL("/?error=true#form", origin), 303);
  }

  if (json) {
    return NextResponse.json({ success: true, data: result.data });
  }

  return NextResponse.redirect(new URL("/?success=true#form", origin), 303);
}
