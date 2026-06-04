import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Post from "@/models/Post";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const limit = parseInt(searchParams.get("limit") || "0");
    const category = searchParams.get("category");
    const tag = searchParams.get("tag");

    let query: any = { status: "published" };

    if (category) query.category = category;
    if (tag) query.tags = tag;

    await dbConnect();

    let postsQuery = Post.find(query)
      .populate("author", "name profilePhoto")
      .populate("category", "name slug")
      .populate("tags", "name slug color")
      .sort({ publishedAt: -1, createdAt: -1 });

    if (limit > 0) {
      postsQuery = postsQuery.limit(limit);
    }

    const posts = await postsQuery;
    return NextResponse.json({ success: true, data: posts });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
