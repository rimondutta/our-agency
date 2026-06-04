import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Post from "@/models/Post";
import Service from "@/models/Service";
import Portfolio from "@/models/Portfolio";
import User from "@/models/User";
import ContactSubmission from "@/models/ContactSubmission";

export async function GET() {
  try {
    await dbConnect();

    const [totalPosts, totalServices, totalPortfolio, totalTeam, totalMessages, viewAggregation] =
      await Promise.all([
        Post.countDocuments({}),
        Service.countDocuments({}),
        Portfolio.countDocuments({}),
        User.countDocuments({}),
        ContactSubmission.countDocuments({}),
        Post.aggregate([{ $group: { _id: null, totalViews: { $sum: "$views" } } }])
      ]);

    const totalViews = viewAggregation.length > 0 ? viewAggregation[0].totalViews : 0;

    const [recentPosts, recentServices, recentPortfolio, recentMessages] = await Promise.all([
      Post.find({}).sort({ createdAt: -1 }).limit(5).lean(),
      Service.find({}).sort({ createdAt: -1 }).limit(5).lean(),
      Portfolio.find({}).sort({ createdAt: -1 }).limit(5).lean(),
      ContactSubmission.find({}).sort({ createdAt: -1 }).limit(5).lean(),
    ]);

    return NextResponse.json({
      success: true,
      data: {
        services: totalServices,
        portfolio: totalPortfolio,
        blogs: totalPosts,
        team: totalTeam,
        messages: totalMessages,
        views: totalViews,
        recentPosts,
        recentServices,
        recentPortfolio,
        recentMessages,
      },
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
