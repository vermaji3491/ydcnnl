const mongoose = require("mongoose");

const recruitmentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Full name is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email address is required"],
      trim: true,
      lowercase: true,
      match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Please enter a valid email address"],
    },
    phone: {
      type: String,
      required: [true, "Phone number is required"],
      trim: true,
      match: [/^[0-9]{10}$/, "Phone number must contain exactly 10 digits"],
    },
    dob: {
      type: String,
      default: "",
    },
    gender: {
      type: String,
      default: "",
    },
    position: {
      type: String,
      required: [true, "Position is required"],
      trim: true,
    },
    department: {
      type: String,
      default: "",
      trim: true,
    },
    qualification: {
      type: String,
      required: [true, "Qualification is required"],
      trim: true,
    },
    specialization: {
      type: String,
      default: "",
      trim: true,
    },
    experience: {
      type: String,
      default: "",
      trim: true,
    },
    organization: {
      type: String,
      default: "",
      trim: true,
    },
    address: {
      type: String,
      default: "",
      trim: true,
    },
    coverLetter: {
      type: String,
      default: "",
      trim: true,
    },
    declaration: {
      type: Boolean,
      required: [true, "Declaration is required"],
      validate: {
        validator: (value) => value === true,
        message: "Declaration must be accepted",
      },
    },
    resume: {
      originalName: { type: String, required: [true, "Resume is required"] },
      fileName: { type: String, required: [true, "Resume file name is required"] },
      filePath: { type: String, required: [true, "Resume file path is required"] },
      mimeType: { type: String, default: "" },
      size: { type: Number, default: 0 },
    },
    documents: [
      {
        originalName: { type: String, required: true },
        fileName: { type: String, required: true },
        filePath: { type: String, required: true },
        mimeType: { type: String, default: "" },
        size: { type: Number, default: 0 },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Recruitment", recruitmentSchema);
