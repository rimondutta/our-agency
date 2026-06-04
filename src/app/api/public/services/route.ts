import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Service from "@/models/Service";

export async function GET() {
  try {
    await dbConnect();
    const services = await Service.find({ isPublished: true })
      .sort({ order: 1, createdAt: 1 });

    return NextResponse.json({
      success: true,
      data: services,
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}
