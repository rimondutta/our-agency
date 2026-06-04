import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import PageContent from "@/models/PageContent";
import { getAuthSession } from "@/lib/api-auth";
import { pageContentSchema } from "@/lib/validations";

export async function GET(request: Request) {
  try {
    const { response } = await getAuthSession(["superadmin", "admin"]);
    if (response) return response;

    const { searchParams } = new URL(request.url);
    const page = searchParams.get("page");
    
    let query = {};
    if (page) {
      query = { page };
    }

    await dbConnect();
    const contents = await PageContent.find(query).sort({ page: 1, section: 1, key: 1 });
    return NextResponse.json({ success: true, data: contents });
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
    const validatedData = pageContentSchema.parse(body);

    await dbConnect();
    // Use upsert to update if exists, otherwise create
    const content = await PageContent.findOneAndUpdate(
      { page: validatedData.page, section: validatedData.section, key: validatedData.key },
      validatedData,
      { new: true, upsert: true, runValidators: true }
    );

    return NextResponse.json(
      { success: true, data: content, message: "Page content saved successfully" },
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
