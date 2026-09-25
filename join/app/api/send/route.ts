import { sendToBitrix24 } from "@togotravel/shared/lib/sendToBitrix24";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const formData = await request.formData();

  const firstName = String(formData.get("NAME") ?? "").trim();
  const lastName = String(formData.get("LAST_NAME") ?? "").trim();
  const phone = String(formData.get("PHONE") ?? "").trim();
  const name = [firstName, lastName].filter(Boolean).join(" ").trim();

  const origin = request.nextUrl.origin;

  if (!name || !phone) {
    return NextResponse.redirect(new URL("/?error=true", origin), 303);
  }

  const result = await sendToBitrix24({
    name,
    phone,
    title: "Новий лід з сайта Join-Up.com.ua",
  });

  if (!result.success) {
    return NextResponse.redirect(new URL("/?error=true", origin), 303);
  }

  return NextResponse.redirect(new URL("/?success=true", origin), 303);
}
