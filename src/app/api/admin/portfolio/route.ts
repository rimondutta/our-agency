import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Portfolio from "@/models/Portfolio";
import { getAuthSession } from "@/lib/api-auth";
import { portfolioSchema } from "@/lib/validations";
import slugify from "slugify";

export async function GET() {
  try {
    const { response } = await getAuthSession(["superadmin", "admin"]);
    if (response) return response;

    await dbConnect();
    const portfolios = await Portfolio.find({})
      .populate("category", "name slug")
      .populate("techStack", "name slug color")
      .sort({ createdAt: -1 });
    return NextResponse.json({ success: true, data: portfolios });
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
    const validatedData = portfolioSchema.parse(body);

    if (!validatedData.slug && validatedData.title) {
      validatedData.slug = slugify(validatedData.title, { lower: true, strict: true });
    }

    await dbConnect();
    const portfolio = await Portfolio.create(validatedData);
    
    return NextResponse.json(
      { success: true, data: portfolio, message: "Portfolio project created successfully" },
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
