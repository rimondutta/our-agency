import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import SiteSettings from "@/models/SiteSettings";
import { getAuthSession } from "@/lib/api-auth";
import { siteSettingsSchema } from "@/lib/validations";

export async function GET() {
  try {
    const { response } = await getAuthSession(["superadmin", "admin"]);
    if (response) return response;

    await dbConnect();
    // SiteSettings is typically a singleton, so we'll just get the first document
    let settings = await SiteSettings.findOne({});

    if (!settings) {
      // If it doesn't exist, create a default one
      settings = await SiteSettings.create({});
    }

    return NextResponse.json({ success: true, data: settings });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

export async function PUT(request: Request) {
  try {
    const { response } = await getAuthSession(["superadmin", "admin"]);
    if (response) return response;

    const body = await request.json();
    const validatedData = siteSettingsSchema.parse(body);

    await dbConnect();
    // Update the first document found (the singleton)
    let settings = await SiteSettings.findOne({});

    if (!settings) {
      settings = await SiteSettings.create(validatedData);
    } else {
      settings = await SiteSettings.findByIdAndUpdate(settings._id, validatedData, {
        new: true,
        runValidators: true,
      });
    }

    return NextResponse.json({
      success: true,
      data: settings,
      message: "Site settings updated successfully",
    });
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
