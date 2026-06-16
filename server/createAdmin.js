const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
require("dotenv").config();

const Admin = require("./models/Admin");

async function createAdmin() {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGO_URI);

    // Hash password
    const hashedPassword = await bcrypt.hash(
      "Rukvant@2026",
      10
    );

    // Check if admin already exists
    const existingAdmin = await Admin.findOne({
      email: "b.ektaa20@gmail.com",
    });

    if (existingAdmin) {
      console.log("Admin already exists");
      process.exit();
    }

    // Create admin
    const admin = new Admin({
      email: "b.ektaa20@gmail.com",
      password: "Rukvant@2026",
    });

    await admin.save();

    console.log("✅ Admin created successfully!");
    console.log("Email: b.ektaa20@gmail.com");
    console.log("Password: Rukvant@2026");

    process.exit();
  } catch (error) {
    console.error("❌ Error creating admin:", error);
    process.exit(1);
  }
}

createAdmin();