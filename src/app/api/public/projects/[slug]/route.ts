import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Portfolio from "@/models/Portfolio";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    await dbConnect();
    
    const project = await Portfolio.findOne({ slug, status: "published" })
      .populate("category", "name slug")
      .populate("techStack", "name slug color");

    if (!project) {
      return NextResponse.json(
        { success: false, error: "Project not found" },
        { status: 404 }
      );
    }
    return NextResponse.json({ success: true, data: project });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
