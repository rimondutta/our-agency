import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Service from "@/models/Service";
import { getAuthSession } from "@/lib/api-auth";
import { serviceSchema } from "@/lib/validations";
import { sanitizeHtml } from "@/lib/sanitize";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { response } = await getAuthSession(["superadmin", "admin"]);
    if (response) return response;

    const { id } = await params;
    await dbConnect();
    const service = await Service.findById(id);

    if (!service) {
      return NextResponse.json(
        { success: false, message: "Service not found" },
        { status: 404 }
      );
    }
    return NextResponse.json({ success: true, data: service });
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
    const validatedData = serviceSchema.parse(body);

    if (validatedData.fullDescription) {
      validatedData.fullDescription = sanitizeHtml(validatedData.fullDescription);
    }

    await dbConnect();
    const service = await Service.findByIdAndUpdate(id, validatedData, {
      new: true,
      runValidators: true,
    });

    if (!service) {
      return NextResponse.json(
        { success: false, message: "Service not found" },
        { status: 404 }
      );
    }
    return NextResponse.json({
      success: true,
      data: service,
      message: "Service updated successfully",
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
    const service = await Service.findByIdAndDelete(id);

    if (!service) {
      return NextResponse.json(
        { success: false, message: "Service not found" },
        { status: 404 }
      );
    }
    return NextResponse.json({ success: true, message: "Service deleted successfully" });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}
