import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Portfolio from "@/models/Portfolio";
import { getAuthSession } from "@/lib/api-auth";
import { portfolioSchema } from "@/lib/validations";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { response } = await getAuthSession(["superadmin", "admin"]);
    if (response) return response;

    const { id } = await params;
    await dbConnect();
    const portfolio = await Portfolio.findById(id)
      .populate("category", "name slug")
      .populate("techStack", "name slug color");
    
    if (!portfolio) {
      return NextResponse.json(
        { success: false, message: "Portfolio project not found" },
        { status: 404 }
      );
    }
    return NextResponse.json({ success: true, data: portfolio });
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
    const validatedData = portfolioSchema.parse(body);

    await dbConnect();
    const portfolio = await Portfolio.findByIdAndUpdate(id, validatedData, {
      new: true,
      runValidators: true,
    });
    
    if (!portfolio) {
      return NextResponse.json(
        { success: false, message: "Portfolio project not found" },
        { status: 404 }
      );
    }
    return NextResponse.json({ 
      success: true, 
      data: portfolio,
      message: "Portfolio project updated successfully"
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
    const portfolio = await Portfolio.findByIdAndDelete(id);
    
    if (!portfolio) {
      return NextResponse.json(
        { success: false, message: "Portfolio project not found" },
        { status: 404 }
      );
    }
    return NextResponse.json({ success: true, message: "Portfolio project deleted successfully" });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}
