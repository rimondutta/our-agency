// Ensure Node env is loaded BEFORE any other imports
import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

import dbConnect from "./src/lib/mongodb";
import User from "./src/models/User";
import Service from "./src/models/Service";
import Portfolio from "./src/models/Portfolio";
import Post from "./src/models/Post";
import bcrypt from "bcryptjs";

const seedDatabase = async () => {
  try {
    console.log("Connecting to database...");
    await dbConnect();
    console.log("Connected.");

    // 1. Clear existing collections
    console.log("Clearing existing data...");
    await User.deleteMany({});
    await Service.deleteMany({});
    await Portfolio.deleteMany({});
    await Post.deleteMany({});

    // 2. Create Superadmin
    console.log("Creating Superadmin...");
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash("admin123", salt);

    const superadmin = await User.create({
      name: "Super Admin",
      email: "admin@example.com",
      password: hashedPassword,
      role: "superadmin",
      jobTitle: "CEO / Founder",
      isActive: true,
    });

    // 3. Create Admin
    const admin = await User.create({
      name: "Editor Admin",
      email: "editor@example.com",
      password: hashedPassword,
      role: "admin",
      jobTitle: "Content Manager",
      isActive: true,
    });

    // 4. Create Services
    console.log("Seeding Services...");
    const services = await Service.insertMany([
      {
        title: "Digital Marketing",
        slug: "digital-marketing",
        description: "Comprehensive digital marketing strategies to grow your online presence.",
        icon: "fas fa-bullhorn",
        order: 1,
      },
      {
        title: "Web Development",
        slug: "web-development",
        description: "Custom web applications built with modern frameworks and best practices.",
        icon: "fas fa-laptop-code",
        order: 2,
      },
      {
        title: "SEO Optimization",
        slug: "seo-optimization",
        description: "Improve your search rankings and drive organic traffic to your website.",
        icon: "fas fa-search-dollar",
        order: 3,
      }
    ]);

    // 5. Create Portfolio
    console.log("Seeding Portfolio...");
    await Portfolio.insertMany([
      {
        title: "E-Commerce Redesign",
        slug: "e-commerce-redesign",
        clientName: "TechStore Inc.",
        category: "Web Development",
        content: "<p>A complete overhaul of an aging e-commerce platform.</p>",
        technologies: ["Next.js", "React", "Node.js", "MongoDB"],
        isPublished: true,
      },
      {
        title: "Local SEO Campaign",
        slug: "local-seo-campaign",
        clientName: "City Bakery",
        category: "Digital Marketing",
        content: "<p>Increased foot traffic by 40% through targeted local SEO.</p>",
        technologies: ["Google Analytics", "Ahrefs", "Local SEO"],
        isPublished: true,
      }
    ]);

    // 6. Create Blog Posts
    console.log("Seeding Blog Posts...");
    await Post.insertMany([
      {
        title: "The Future of Next.js",
        slug: "future-of-nextjs",
        excerpt: "Exploring the newest features in Next.js 14 and beyond.",
        content: "<p>Next.js continues to lead the React framework ecosystem...</p>",
        author: superadmin._id,
        authorName: superadmin.name,
        category: "Technology",
        tags: ["Next.js", "React", "Frontend"],
        isPublished: true,
        readTime: 3,
        seo: {
          metaTitle: "Future of Next.js",
          metaDescription: "Learn about Next.js features.",
          keywords: ["nextjs", "react"]
        }
      },
      {
        title: "Marketing in 2024",
        slug: "marketing-2024",
        excerpt: "Key trends to watch in the digital marketing landscape.",
        content: "<p>As we move further into 2024, AI is taking over...</p>",
        author: admin._id,
        authorName: admin.name,
        category: "Marketing",
        tags: ["Marketing", "Trends", "AI"],
        isPublished: true,
        readTime: 4,
        seo: {
          metaTitle: "Marketing Trends 2024",
          metaDescription: "Digital marketing trends for 2024.",
          keywords: ["marketing", "trends"]
        }
      }
    ]);

    console.log("Database seeded successfully!");
    process.exit(0);
  } catch (error) {
    console.error("Error seeding database:", error);
    process.exit(1);
  }
};

seedDatabase();
