import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Media from "@/models/Media";
import { getAuthSession } from "@/lib/api-auth";

export async function GET() {
  try {
    const { response } = await getAuthSession(["superadmin", "admin", "team_member"]);
    if (response) return response;

    await dbConnect();
    const media = await Media.find({}).sort({ createdAt: -1 }).populate("uploadedBy", "name email");
    return NextResponse.json({ success: true, data: media });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
