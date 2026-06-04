import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import ContactSubmission from "@/models/ContactSubmission";
import { getAuthSession } from "@/lib/api-auth";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { response } = await getAuthSession(["superadmin", "admin"]);
    if (response) return response;

    const { id } = await params;
    await dbConnect();
    const message = await ContactSubmission.findById(id);

    if (!message) {
      return NextResponse.json(
        { success: false, error: "Message not found" },
        { status: 404 }
      );
    }
    return NextResponse.json({ success: true, data: message });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { response } = await getAuthSession(["superadmin", "admin"]);
    if (response) return response;

    const { id } = await params;
    const body = await request.json();

    // Only allow updating the 'read' status
    if (typeof body.read !== 'boolean') {
      return NextResponse.json(
        { success: false, error: "Invalid payload" },
        { status: 400 }
      );
    }

    await dbConnect();
    const message = await ContactSubmission.findByIdAndUpdate(
      id,
      { read: body.read },
      { new: true }
    );

    if (!message) {
      return NextResponse.json(
        { success: false, error: "Message not found" },
        { status: 404 }
      );
    }
    return NextResponse.json({
      success: true,
      data: message,
      message: "Message updated successfully",
    });
  } catch (error: any) {
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
    const message = await ContactSubmission.findByIdAndDelete(id);

    if (!message) {
      return NextResponse.json(
        { success: false, error: "Message not found" },
        { status: 404 }
      );
    }
    return NextResponse.json({ success: true, message: "Message deleted successfully" });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
