import dbConnect from "./src/lib/mongodb";
import Service from "./src/models/Service";
import fs from "fs";
import path from "path";
import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

async function seedServices() {
  try {
    console.log("Connecting to database...");
    await dbConnect();

    // Read the legacy JSON data (ServicesV2Data has the most detail)
    const dataPath = path.join(process.cwd(), "src", "assets", "jsonData", "services", "ServicesV2Data.json");
    const fileContents = fs.readFileSync(dataPath, "utf-8");
    const servicesData = JSON.parse(fileContents);

    console.log(`Found ${servicesData.length} services to migrate...`);

    // Clear existing services first
    await Service.deleteMany({});
    console.log("Cleared existing services.");

    let addedCount = 0;

    for (const svc of servicesData) {
      await Service.create({
        title: svc.title,
        slug: svc.serviceid || svc.title.toLowerCase().replace(/\s+/g, "-"),
        icon: svc.icon || "",
        shortDescription: svc.text || "",
        fullDescription: svc.text || "",
        coverImage: svc.illustration ? `/assets/img/illustration/${svc.illustration}` : "",
        features: svc.listData || [],
        isPublished: true,
        order: svc.id || addedCount + 1,
      });

      console.log(`Migrated service: ${svc.title}`);
      addedCount++;
    }

    console.log(`Migration complete! Added ${addedCount} services to the database.`);
    process.exit(0);
  } catch (error) {
    console.error("Migration failed:", error);
    process.exit(1);
  }
}

seedServices();
