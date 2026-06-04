import { NextResponse } from "next/server";
import { getAuthSession } from "@/lib/api-auth";
import { uploadImage } from "@/lib/cloudinary";
import dbConnect from "@/lib/mongodb";
import Media from "@/models/Media";

export async function POST(request: Request) {
  try {
    // Only superadmin and admin can upload images (unless it's a profile photo, which team_member can also do)
    const { response, session } = await getAuthSession();
    if (response) return response;

    const formData = await request.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json(
        { success: false, message: "No file provided" },
        { status: 400 }
      );
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const result = await uploadImage(buffer);

    await dbConnect();
    const media = await Media.create({
      url: result.url,
      publicId: result.publicId,
      filename: file.name,
      mimeType: file.type,
      size: file.size,
      uploadedBy: session?.user?.id || null,
    });

    return NextResponse.json(
      { 
        success: true, 
        data: media
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Upload Error:", error);
    return NextResponse.json(
      { success: false, message: error.message || "Failed to upload image" },
      { status: 500 }
    );
  }
}
