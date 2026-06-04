import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Post from "@/models/Post";
import { getAuthSession } from "@/lib/api-auth";
import { blogSchema } from "@/lib/validations";
import { sanitizeHtml } from "@/lib/sanitize";

const calculateReadTime = (text: string): number => {
  const wordsPerMinute = 200;
  const noHtml = text.replace(/<[^>]*>?/gm, "");
  const noOfWords = noHtml.split(/\s+/).length;
  return Math.ceil(noOfWords / wordsPerMinute);
};

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { response } = await getAuthSession(["superadmin", "admin"]);
    if (response) return response;

    const { id } = await params;
    await dbConnect();
    const post = await Post.findById(id)
      .populate("author", "name profilePhoto")
      .populate("category", "name slug")
      .populate("tags", "name slug color");

    if (!post) {
      return NextResponse.json(
        { success: false, message: "Blog post not found" },
        { status: 404 }
      );
    }
    return NextResponse.json({ success: true, data: post });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { response } = await getAuthSession(["superadmin", "admin"]);
    if (response) return response;

    const { id } = await params;
    const body = await request.json();
    const validatedData = blogSchema.parse(body);

    if (validatedData.content) {
      validatedData.content = sanitizeHtml(validatedData.content);
    }

    if (validatedData.content && !validatedData.readTime) {
      validatedData.readTime = calculateReadTime(validatedData.content);
    }

    await dbConnect();
    const post = await Post.findByIdAndUpdate(id, validatedData, {
      new: true,
      runValidators: true,
    });

    if (!post) {
      return NextResponse.json(
        { success: false, message: "Blog post not found" },
        { status: 404 }
      );
    }
    return NextResponse.json({
      success: true,
      data: post,
      message: "Blog post updated successfully",
    });
  } catch (error: any) {
    if (error.name === "ZodError") {
      return NextResponse.json(
        { success: false, message: error.errors[0].message },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { response } = await getAuthSession(["superadmin", "admin"]);
    if (response) return response;

    const { id } = await params;
    await dbConnect();
    const post = await Post.findByIdAndDelete(id);

    if (!post) {
      return NextResponse.json(
        { success: false, message: "Blog post not found" },
        { status: 404 }
      );
    }
    return NextResponse.json({ success: true, message: "Blog post deleted successfully" });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}
