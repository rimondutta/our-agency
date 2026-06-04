import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import User from "@/models/User";
import { getAuthSession } from "@/lib/api-auth";
import bcrypt from "bcryptjs";
import { updateUserSchema } from "@/lib/validations";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const { session, response } = await getAuthSession();
    if (response) return response;

    // team_member can only access their own profile
    if (session?.user?.role === "team_member" && session.user.id !== id) {
      return NextResponse.json(
        { success: false, message: "Forbidden: You can only access your own profile" },
        { status: 403 }
      );
    }

    await dbConnect();
    const user = await User.findById(id).select("-password");

    if (!user) {
      return NextResponse.json(
        { success: false, message: "User not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, data: user });
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
    const { id } = await params;
    const { session, response } = await getAuthSession();
    if (response) return response;

    const body = await request.json();
    const validatedData = updateUserSchema.parse(body);

    // team_member can only access their own profile, and cannot update role/isActive/email
    if (session?.user?.role === "team_member") {
      if (session.user.id !== id) {
        return NextResponse.json(
          { success: false, message: "Forbidden: You can only update your own profile" },
          { status: 403 }
        );
      }
      // Remove restricted fields for team_member
      delete validatedData.role;
      delete validatedData.isActive;
      delete validatedData.email;
    }

    // Only superadmin can edit other users
    if (session?.user?.role === "admin" && session.user.id !== id) {
       return NextResponse.json(
        { success: false, message: "Forbidden: Admins cannot edit other profiles" },
        { status: 403 }
      );
    }

    await dbConnect();

    // If updating password, hash it
    if (validatedData.password) {
      const salt = await bcrypt.genSalt(10);
      validatedData.password = await bcrypt.hash(validatedData.password, salt);
    } else {
      delete validatedData.password; // Don't override with empty string
    }

    const updatedUser = await User.findByIdAndUpdate(
      id,
      { $set: validatedData },
      { new: true, runValidators: true }
    ).select("-password");

    if (!updatedUser) {
      return NextResponse.json(
        { success: false, message: "User not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: updatedUser,
      message: "Profile updated successfully",
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
    const { id } = await params;
    const { session, response } = await getAuthSession(["superadmin"]);
    if (response) return response;

    if (session?.user?.id === id) {
       return NextResponse.json(
        { success: false, message: "Cannot delete your own account" },
        { status: 400 }
      );
    }

    await dbConnect();
    const deletedUser = await User.findByIdAndDelete(id);

    if (!deletedUser) {
      return NextResponse.json(
        { success: false, message: "User not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "User deleted successfully",
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}
