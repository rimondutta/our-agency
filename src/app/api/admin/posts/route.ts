import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Post from "@/models/Post";
import { getAuthSession } from "@/lib/api-auth";
import { blogSchema } from "@/lib/validations";
import { sanitizeHtml } from "@/lib/sanitize";
import slugify from "slugify";

const calculateReadTime = (text: string): number => {
  const wordsPerMinute = 200;
  const noHtml = text.replace(/<[^>]*>?/gm, "");
  const noOfWords = noHtml.split(/\s+/).length;
  return Math.ceil(noOfWords / wordsPerMinute);
};

export async function GET() {
  try {
    const { response } = await getAuthSession(["superadmin", "admin"]);
    if (response) return response;

    await dbConnect();
    const posts = await Post.find({})
      .populate("author", "name profilePhoto")
      .populate("category", "name slug")
      .populate("tags", "name slug color")
      .sort({ createdAt: -1 });

    return NextResponse.json({ success: true, data: posts });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const { session, response } = await getAuthSession(["superadmin", "admin"]);
    if (response) return response;

    const body = await request.json();
    const validatedData = blogSchema.parse(body);

    if (!validatedData.slug && validatedData.title) {
      validatedData.slug = slugify(validatedData.title, { lower: true, strict: true });
    }

    if (validatedData.content) {
      validatedData.content = sanitizeHtml(validatedData.content);
    }

    if (validatedData.content && !validatedData.readTime) {
      validatedData.readTime = calculateReadTime(validatedData.content);
    }

    await dbConnect();

    const postData = {
      ...validatedData,
      author: session?.user?.id,
      authorName: session?.user?.name,
    };

    const post = await Post.create(postData);

    return NextResponse.json(
      { success: true, data: post, message: "Blog post created successfully" },
      { status: 201 }
    );
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
