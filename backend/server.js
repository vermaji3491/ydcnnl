const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config();

const { connectDB } = require("./config/db");

const app = express();

// Middleware.
app.use(
  cors({
    origin: (process.env.CLIENT_URL || "http://localhost:5173")
      .split(",")
      .map((origin) => origin.trim()),
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Make uploaded admission documents accessible to the admin/frontend.
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Health check.
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Yaduvanshi College Backend is running",
  });
});

// API routes.
app.use("/api/admissions", require("./routes/admissionRoutes"));
app.use("/api/recruitments", require("./routes/recruitmentRoutes"));
app.use("/api/contact", require("./routes/contactRoutes"));
app.use("/api/admin", require("./routes/adminRoutes"));
app.use("/api/achievements", require("./routes/achievementRoutes"));
app.use("/api/notices", require("./routes/noticeRoutes"));
app.use("/api/gallery", require("./routes/galleryRoutes"));
app.use("/api/fees", require("./routes/feeRoutes"));
app.use("/api/industrial-visits", require("./routes/industrialVisitRoutes"));
app.use("/api/nss-activities", require("./routes/nssActivityRoutes"));
app.use("/api/courses", require("./routes/courseRoutes"));
app.use("/api/events", require("./routes/eventRoutes"));

// Central error handler.
app.use((err, req, res, next) => {
  console.error("Server error:", err);

  if (err.code === "LIMIT_FILE_SIZE") {
    return res.status(400).json({
      success: false,
      message: "Uploaded document must be 5 MB or smaller.",
    });
  }

  const statusCode = Number.isInteger(err.status) && err.status >= 400 ? err.status : 500;
  return res.status(statusCode).json({
    success: false,
    message: err.message || "Something went wrong.",
  });
});

const PORT = process.env.PORT || 5000;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error(error.message);
    process.exit(1);
  });
