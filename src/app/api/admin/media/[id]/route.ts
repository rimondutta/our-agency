import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Media from "@/models/Media";
import { getAuthSession } from "@/lib/api-auth";
import { deleteImage } from "@/lib/cloudinary";

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { response } = await getAuthSession(["superadmin", "admin"]);
    if (response) return response;

    const { id } = await params;
    await dbConnect();
    const media = await Media.findById(id);

    if (!media) {
      return NextResponse.json(
        { success: false, error: "Media not found" },
        { status: 404 }
      );
    }

    // Delete from Cloudinary
    await deleteImage(media.publicId);

    // Delete from database
    await Media.findByIdAndDelete(id);

    return NextResponse.json({ success: true, message: "Media deleted successfully" });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
