import { sendToBitrix24 } from "@togotravel/shared/lib/sendToBitrix24";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  let body: {
    name?: string;
    phone?: string;
    email?: string;
    destination?: string;
    wishes?: string;
    title?: string;
  };

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ success: false, error: "invalid_json" }, { status: 400 });
  }

  const name = String(body.name ?? "").trim();
  const phone = String(body.phone ?? "").trim();

  if (!name || !phone) {
    return NextResponse.json(
      { success: false, error: "missing_fields" },
      { status: 400 }
    );
  }

  const result = await sendToBitrix24({
    name,
    phone,
    email: body.email,
    destination: body.destination,
    wishes: body.wishes,
    title: body.title ?? "Новий лід з сайта JoinUp Market",
  });

  if (!result.success) {
    return NextResponse.json(
      { success: false, error: result.error },
      { status: 502 }
    );
  }

  return NextResponse.json({ success: true, data: result.data });
}
