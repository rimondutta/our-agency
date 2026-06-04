import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import PageContent from "@/models/PageContent";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = searchParams.get("page");
    
    let query = {};
    if (page) {
      query = { page };
    }

    await dbConnect();
    const contents = await PageContent.find(query);
    
    // Convert to a dictionary for easier consumption by frontend
    // { "hero": { "title": "Welcome", "subtitle": "..." } }
    const dictionary: any = {};
    
    contents.forEach(item => {
      if (!dictionary[item.section]) {
        dictionary[item.section] = {};
      }
      dictionary[item.section][item.key] = item.value;
    });

    return NextResponse.json({ success: true, data: dictionary });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
