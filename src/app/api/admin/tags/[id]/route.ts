import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Tag from "@/models/Tag";
import { getAuthSession } from "@/lib/api-auth";
import { tagSchema } from "@/lib/validations";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { response } = await getAuthSession(["superadmin", "admin"]);
    if (response) return response;

    const { id } = await params;
    await dbConnect();
    const tag = await Tag.findById(id);

    if (!tag) {
      return NextResponse.json(
        { success: false, error: "Tag not found" },
        { status: 404 }
      );
    }
    return NextResponse.json({ success: true, data: tag });
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
    const validatedData = tagSchema.parse(body);

    await dbConnect();
    const tag = await Tag.findByIdAndUpdate(id, validatedData, {
      new: true,
      runValidators: true,
    });

    if (!tag) {
      return NextResponse.json(
        { success: false, error: "Tag not found" },
        { status: 404 }
      );
    }
    return NextResponse.json({
      success: true,
      data: tag,
      message: "Tag updated successfully",
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
    const tag = await Tag.findByIdAndDelete(id);

    if (!tag) {
      return NextResponse.json(
        { success: false, error: "Tag not found" },
        { status: 404 }
      );
    }
    return NextResponse.json({ success: true, message: "Tag deleted successfully" });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
