import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import PageContent from "@/models/PageContent";
import { getAuthSession } from "@/lib/api-auth";
import { pageContentSchema } from "@/lib/validations";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { response } = await getAuthSession(["superadmin", "admin"]);
    if (response) return response;

    const { id } = await params;
    await dbConnect();
    const content = await PageContent.findById(id);

    if (!content) {
      return NextResponse.json(
        { success: false, error: "Content not found" },
        { status: 404 }
      );
    }
    return NextResponse.json({ success: true, data: content });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
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
    const validatedData = pageContentSchema.parse(body);

    await dbConnect();
    const content = await PageContent.findByIdAndUpdate(id, validatedData, {
      new: true,
      runValidators: true,
    });

    if (!content) {
      return NextResponse.json(
        { success: false, error: "Content not found" },
        { status: 404 }
      );
    }
    return NextResponse.json({
      success: true,
      data: content,
      message: "Content updated successfully",
    });
  } catch (error: any) {
    if (error.name === "ZodError") {
      return NextResponse.json(
        { success: false, error: error.errors[0].message },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { success: false, error: error.message },
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
    const content = await PageContent.findByIdAndDelete(id);

    if (!content) {
      return NextResponse.json(
        { success: false, error: "Content not found" },
        { status: 404 }
      );
    }
    return NextResponse.json({ success: true, message: "Content deleted successfully" });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
