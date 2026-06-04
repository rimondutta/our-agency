import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Category from "@/models/Category";
import { getAuthSession } from "@/lib/api-auth";
import { categorySchema } from "@/lib/validations";
import slugify from "slugify";

export async function GET() {
  try {
    const { response } = await getAuthSession(["superadmin", "admin"]);
    if (response) return response;

    await dbConnect();
    const categories = await Category.find({}).sort({ name: 1 });
    return NextResponse.json({ success: true, data: categories });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const { response } = await getAuthSession(["superadmin", "admin"]);
    if (response) return response;

    const body = await request.json();
    const validatedData = categorySchema.parse(body);

    if (!validatedData.slug && validatedData.name) {
      validatedData.slug = slugify(validatedData.name, { lower: true, strict: true });
    }

    await dbConnect();
    const category = await Category.create(validatedData);

    return NextResponse.json(
      { success: true, data: category, message: "Category created successfully" },
      { status: 201 }
    );
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
