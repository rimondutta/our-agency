import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Service from "@/models/Service";
import { getAuthSession } from "@/lib/api-auth";
import { serviceSchema } from "@/lib/validations";
import { sanitizeHtml } from "@/lib/sanitize";
import slugify from "slugify";

export async function GET() {
  try {
    const { response } = await getAuthSession(["superadmin", "admin"]);
    if (response) return response;

    await dbConnect();
    const services = await Service.find({}).sort({ order: 1, createdAt: -1 });
    return NextResponse.json({ success: true, data: services });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const { response } = await getAuthSession(["superadmin", "admin"]);
    if (response) return response;

    const body = await request.json();
    const validatedData = serviceSchema.parse(body);

    if (!validatedData.slug && validatedData.title) {
      validatedData.slug = slugify(validatedData.title, { lower: true, strict: true });
    }

    if (validatedData.fullDescription) {
      validatedData.fullDescription = sanitizeHtml(validatedData.fullDescription);
    }

    await dbConnect();
    const service = await Service.create(validatedData);

    return NextResponse.json(
      { success: true, data: service, message: "Service created successfully" },
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
