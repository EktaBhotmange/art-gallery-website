const Admin = require("../models/Admin");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    console.log("========== LOGIN ATTEMPT ==========");
    console.log("Email entered:", email);

    const admin = await Admin.findOne({ email });

    console.log("Admin found:", admin);

    if (!admin) {
      console.log("No admin found in database");
      return res.status(401).json({
        message: "Invalid credentials",
      });
    }

    const isMatch = await bcrypt.compare(
      password,
      admin.password
    );

    console.log("Password match:", isMatch);

    if (!isMatch) {
      console.log("Password incorrect");
      return res.status(401).json({
        message: "Invalid credentials",
      });
    }

    const token = jwt.sign(
      {
        id: admin._id,
      },
      "rukvant-secret-key",
      {
        expiresIn: "7d",
      }
    );

    console.log("Login successful");

    res.status(200).json({
      token,
      email: admin.email,
    });

  } catch (error) {
    console.log("LOGIN ERROR:", error);

    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  loginAdmin,
};