import dbConnect from "./src/lib/mongodb";
import User from "./src/models/User";
import fs from "fs";
import path from "path";

async function seedTeam() {
  try {
    console.log("Connecting to database...");
    await dbConnect();
    
    // Read the legacy JSON data
    const dataPath = path.join(process.cwd(), "src", "assets", "jsonData", "team", "TeamV1Data.json");
    const fileContents = fs.readFileSync(dataPath, "utf-8");
    const teamData = JSON.parse(fileContents);
    
    console.log(`Found ${teamData.length} team members to migrate...`);

    let addedCount = 0;

    for (const member of teamData) {
      // Check if user already exists by email
      const existingUser = await User.findOne({ email: member.email });
      if (existingUser) {
        console.log(`User ${member.email} already exists, skipping...`);
        continue;
      }

      // Map the legacy fields to our User schema
      await User.create({
        name: member.name,
        email: member.email || `${member.name.toLowerCase().replace(" ", ".")}@example.com`,
        password: "password123", // Default password since it's required by the schema (must be hashed by pre-save hook)
        role: "team_member",
        jobTitle: member.designation,
        bio: member.text,
        profilePhoto: `/assets/img/team/${member.thumb}`,
        isActive: true
      });
      
      console.log(`Migrated: ${member.name}`);
      addedCount++;
    }

    console.log(`Migration complete! Added ${addedCount} new team members to the database.`);
    process.exit(0);
  } catch (error) {
    console.error("Migration failed:", error);
    process.exit(1);
  }
}

seedTeam();
