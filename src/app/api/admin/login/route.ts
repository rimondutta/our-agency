import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json(
    { success: false, message: "Deprecated endpoint. Please use NextAuth credentials instead." },
    { status: 410 }
  );
}
