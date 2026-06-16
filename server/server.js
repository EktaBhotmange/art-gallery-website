const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const contactRoutes = require("./routes/contactRoutes");

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/contacts", contactRoutes);

const artworkRoutes = require("./routes/artworkRoutes");
app.use("/api/artworks", artworkRoutes);

app.get("/", (req, res) => {
  res.send("Rukvant Art API Running");
});

app.get("/api/test", (req, res) => {
  res.json({
    success: true,
    message: "Backend Connected Successfully",
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});