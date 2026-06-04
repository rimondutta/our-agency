import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Portfolio from "@/models/Portfolio";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const limit = parseInt(searchParams.get("limit") || "0");
    const featured = searchParams.get("featured");

    let query: any = { status: "published" };

    if (featured === "true") {
      query.featured = true;
    }

    await dbConnect();

    let projectsQuery = Portfolio.find(query)
      .populate("category", "name slug")
      .populate("techStack", "name slug color")
      .sort({ order: 1, createdAt: -1 });

    if (limit > 0) {
      projectsQuery = projectsQuery.limit(limit);
    }

    const projects = await projectsQuery;
    return NextResponse.json({ success: true, data: projects });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
