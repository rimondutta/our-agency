import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Tag from "@/models/Tag";

export async function GET() {
  try {
    await dbConnect();
    const tags = await Tag.find({}).sort({ name: 1 });
    return NextResponse.json({ success: true, data: tags });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
