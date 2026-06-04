import { config } from "dotenv";
config({ path: ".env.local" });

const { default: dbConnect } = await import("../src/lib/mongodb");
const { default: User } = await import("../src/models/User");
const { default: Service } = await import("../src/models/Service");
const { default: Portfolio } = await import("../src/models/Portfolio");
const { default: Post } = await import("../src/models/Post");
const { default: bcrypt } = await import("bcryptjs");

const seedDatabase = async () => {
  try {
    console.log("Connecting to database...");
    await dbConnect();
    console.log("Connected.");

    console.log("Clearing existing data...");
    await Promise.all([
      User.deleteMany({}),
      Service.deleteMany({}),
      Portfolio.deleteMany({}),
      Post.deleteMany({}),
    ]);
    console.log("Cleared.");

    const salt = await bcrypt.genSalt(10);
    const hashedAdminPassword = await bcrypt.hash("Admin@1234", salt);

    const users = await User.insertMany([
      {
        name: "Super Admin",
        email: "superadmin@agency.com",
        password: hashedAdminPassword,
        role: "superadmin",
        active: true,
      },
      {
        name: "John Admin",
        email: "john@agency.com",
        password: hashedAdminPassword,
        role: "admin",
        active: true,
      },
      {
        name: "Jane Admin",
        email: "jane@agency.com",
        password: hashedAdminPassword,
        role: "admin",
        active: true,
      },
      {
        name: "Alice Johnson",
        email: "alice@agency.com",
        password: hashedAdminPassword,
        role: "team_member",
        active: true,
      },
      {
        name: "Bob Smith",
        email: "bob@agency.com",
        password: hashedAdminPassword,
        role: "team_member",
        active: true,
      },
      {
        name: "Charlie Brown",
        email: "charlie@agency.com",
        password: hashedAdminPassword,
        role: "team_member",
        active: true,
      },
    ]);
    console.log(`Seeded ${users.length} users`);

    const services = await Service.insertMany([
      {
        title: "Web Development",
        slug: "web-development",
        shortDescription:
          "Custom websites and web applications built with modern technologies.",
        fullDescription:
          "<p>We build fast, scalable, and beautiful web applications using cutting-edge technologies. Our team specializes in React, Next.js, Node.js, and modern CSS frameworks.</p><p>From simple landing pages to complex enterprise applications, we deliver solutions that drive business growth.</p>",
        icon: "/assets/img/icon/web-dev.svg",
        coverImage: "/assets/img/services/web-dev.jpg",
        features: [
          "Responsive Design",
          "Performance Optimized",
          "SEO Friendly",
          "CMS Integration",
        ],
        isPublished: true,
        order: 1,
      },
      {
        title: "Mobile App Development",
        slug: "mobile-app-development",
        shortDescription:
          "Native and cross-platform mobile applications for iOS and Android.",
        fullDescription:
          "<p>Create engaging mobile experiences with our expert development team. We build both native and cross-platform applications using React Native and Flutter.</p><p>Our apps are designed with user experience at the core, ensuring high engagement and retention rates.</p>",
        icon: "/assets/img/icon/mobile-dev.svg",
        coverImage: "/assets/img/services/mobile-dev.jpg",
        features: [
          "iOS & Android",
          "Push Notifications",
          "Offline Support",
          "App Store Publishing",
        ],
        isPublished: true,
        order: 2,
      },
    ]);
    console.log(`Seeded ${services.length} services`);

    const portfolios = await Portfolio.insertMany([
      {
        title: "E-Commerce Platform",
        slug: "e-commerce-platform",
        description:
          "A full-featured e-commerce platform built with Next.js, featuring real-time inventory management, payment processing, and an intuitive admin dashboard.",
        coverImage: "/assets/img/portfolio/ecommerce.jpg",
        images: [
          "/assets/img/portfolio/ecommerce-1.jpg",
          "/assets/img/portfolio/ecommerce-2.jpg",
        ],
        clientName: "TechRetail Inc.",
        projectUrl: "https://example.com/ecommerce",
        githubUrl: "https://github.com/example/ecommerce",
        technologies: [
          "Next.js",
          "TypeScript",
          "Stripe",
          "PostgreSQL",
          "Redis",
        ],
        tags: ["e-commerce", "web", "full-stack"],
        featured: true,
        isPublished: true,
      },
      {
        title: "Healthcare Dashboard",
        slug: "healthcare-dashboard",
        description:
          "An analytics dashboard for healthcare providers, visualizing patient data, appointment scheduling, and real-time monitoring metrics.",
        coverImage: "/assets/img/portfolio/healthcare.jpg",
        images: ["/assets/img/portfolio/healthcare-1.jpg"],
        clientName: "MediView Health",
        projectUrl: "https://example.com/healthcare",
        technologies: ["React", "D3.js", "Node.js", "MongoDB", "Docker"],
        tags: ["healthcare", "dashboard", "data-visualization"],
        featured: true,
        isPublished: true,
      },
      {
        title: "Social Media App",
        slug: "social-media-app",
        description:
          "A real-time social media platform with messaging, content sharing, and AI-powered recommendations.",
        coverImage: "/assets/img/portfolio/social.jpg",
        images: [
          "/assets/img/portfolio/social-1.jpg",
          "/assets/img/portfolio/social-2.jpg",
          "/assets/img/portfolio/social-3.jpg",
        ],
        clientName: "ConnectWave",
        projectUrl: "https://example.com/social",
        githubUrl: "https://github.com/example/social",
        technologies: [
          "React Native",
          "GraphQL",
          "AWS",
          "Elasticsearch",
          "Firebase",
        ],
        tags: ["mobile", "social", "real-time"],
        featured: false,
        isPublished: true,
      },
    ]);
    console.log(`Seeded ${portfolios.length} portfolio items`);

    const adminUser = await User.findOne({ email: "superadmin@agency.com" });
    const posts = await Post.insertMany([
      {
        title: "Getting Started with Next.js 14",
        slug: "getting-started-with-nextjs-14",
        content:
          "<p>Next.js 14 introduces several exciting features that make building web applications easier and more performant than ever.</p><h2>Server Components</h2><p>With React Server Components, you can render components on the server, reducing the amount of JavaScript sent to the client.</p><h2>App Router</h2><p>The new App Router provides a more intuitive way to structure your application with nested layouts and loading states.</p>",
        excerpt:
          "Discover the key features of Next.js 14 and how to get started with your first project.",
        coverImage: "/assets/img/blog/nextjs.jpg",
        tags: ["Next.js", "React", "Web Development"],
        isPublished: true,
        author: adminUser?._id,
        authorName: "Super Admin",
        readTime: 5,
      },
      {
        title: "The Future of AI in Web Development",
        slug: "future-of-ai-in-web-development",
        content:
          "<p>Artificial Intelligence is reshaping how we build and interact with web applications. From code generation to personalized user experiences, AI is becoming an integral part of modern web development.</p><h2>AI-Powered Development Tools</h2><p>Tools like GitHub Copilot and various AI assistants are helping developers write code faster and with fewer errors.</p><h2>Personalized User Experiences</h2><p>Machine learning algorithms can analyze user behavior and deliver tailored content, recommendations, and interfaces.</p>",
        excerpt:
          "Explore how AI is transforming web development and what it means for developers and businesses.",
        coverImage: "/assets/img/blog/ai-web.jpg",
        tags: ["AI", "Web Development", "Technology"],
        isPublished: true,
        author: adminUser?._id,
        authorName: "Super Admin",
        readTime: 7,
      },
    ]);
    console.log(`Seeded ${posts.length} blog posts`);

    console.log("\n✓ Database seeded successfully!");
    console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
    console.log("Super Admin: superadmin@agency.com / Admin@1234");
    console.log("Admin:       john@agency.com / Admin@1234");
    console.log("Team Member: alice@agency.com / Admin@1234");
    console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
    process.exit(0);
  } catch (error) {
    console.error("Error seeding database:", error);
    process.exit(1);
  }
};

seedDatabase();
