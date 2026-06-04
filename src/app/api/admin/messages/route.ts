import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import ContactSubmission from "@/models/ContactSubmission";
import { getAuthSession } from "@/lib/api-auth";

export async function GET() {
  try {
    const { response } = await getAuthSession(["superadmin", "admin"]);
    if (response) return response;

    await dbConnect();
    const messages = await ContactSubmission.find({}).sort({ createdAt: -1 });
    return NextResponse.json({ success: true, data: messages });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
