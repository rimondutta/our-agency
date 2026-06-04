import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import User from "@/models/User";

export async function GET() {
  try {
    await dbConnect();
    // Fetch all active team members and admins, exclude superadmin if desired, or just everyone active.
    const activeTeamMembers = await User.find({
      isActive: true,
      role: "team_member"
    })
      .select("-password") // Exclude sensitive information (keep email/phone/bio/skills visible)
      .sort({ createdAt: 1 }); // Sort by creation date

    return NextResponse.json({
      success: true,
      data: activeTeamMembers,
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}
