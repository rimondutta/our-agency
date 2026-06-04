import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import SiteSettings from "@/models/SiteSettings";

export async function GET() {
  try {
    await dbConnect();
    // SiteSettings is typically a singleton, so we'll just get the first document
    let settings = await SiteSettings.findOne({});

    if (!settings) {
      settings = {};
    }

    return NextResponse.json({ success: true, data: settings });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
