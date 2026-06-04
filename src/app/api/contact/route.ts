import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import ContactSubmission from "@/models/ContactSubmission";
import { contactSchema } from "@/lib/validations";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validate with Zod
    const validatedData = contactSchema.parse(body);

    await dbConnect();
    const newSubmission = await ContactSubmission.create(validatedData);

    return NextResponse.json(
      { success: true, data: newSubmission },
      { status: 201 }
    );
  } catch (error: any) {
    if (error.name === "ZodError") {
      return NextResponse.json(
        { success: false, error: error.errors[0].message },
        { status: 400 }
      );
    }
    console.error("Error saving contact submission:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
