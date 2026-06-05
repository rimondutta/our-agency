import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import User from "@/models/User";
import { getAuthSession } from "@/lib/api-auth";
import bcrypt from "bcryptjs";
import { createUserSchema } from "@/lib/validations";

export async function GET() {
  try {
    const { response } = await getAuthSession(["superadmin"]);
    if (response) return response;

    await dbConnect();
    
    const teamMembers = await User.find({})
      .select("-password")
      .sort({ createdAt: -1 });

    return NextResponse.json({ success: true, data: teamMembers });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const { response } = await getAuthSession(["superadmin"]);
    if (response) return response;

    const body = await request.json();
    
    // Validate input
    const validatedData = createUserSchema.parse(body);

    await dbConnect();

    // Check if email exists
    const existingUser = await User.findOne({ email: validatedData.email.toLowerCase() });
    if (existingUser) {
      return NextResponse.json(
        { success: false, message: "User with this email already exists" },
        { status: 400 }
      );
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(validatedData.password, salt);

    // Create user
    const newUser = await User.create({
      ...validatedData,
      email: validatedData.email.toLowerCase(),
      password: hashedPassword,
    });

    const userResponse = newUser.toObject();
    delete userResponse.password;

    return NextResponse.json(
      { success: true, data: userResponse, message: "Team member created successfully" },
      { status: 201 }
    );
  } catch (error: any) {
    if (error.name === "ZodError") {
      return NextResponse.json(
        { success: false, message: error.errors[0].message },
        { status: 400 }
      );
    }
    console.error("Team creation error:", error);
    return NextResponse.json(
      { success: false, message: error.message || "Something went wrong" },
      { status: 500 }
    );
  }
}
