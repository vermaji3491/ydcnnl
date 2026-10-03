const mongoose = require("mongoose");

const admissionSchema = new mongoose.Schema(
  {
    studentName: {
      type: String,
      required: [true, "Student name is required"],
      trim: true,
    },
    fatherName: {
      type: String,
      required: [true, "Father's name is required"],
      trim: true,
    },
    motherName: {
      type: String,
      required: [true, "Mother's name is required"],
      trim: true,
    },
    dob: {
      type: String,
      required: [true, "Date of birth is required"],
    },
    gender: {
      type: String,
      required: [true, "Gender is required"],
      enum: ["Male", "Female", "Other"],
    },
    category: {
      type: String,
      required: [true, "Category is required"],
      enum: ["General", "SC", "ST", "OBC", "Other"],
    },
    mobile: {
      type: String,
      required: [true, "Mobile number is required"],
      trim: true,
      match: [/^[0-9]{10}$/, "Mobile number must contain exactly 10 digits"],
    },
    email: {
      type: String,
      required: [true, "Email address is required"],
      trim: true,
      lowercase: true,
      match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Please enter a valid email address"],
    },
    state: {
      type: String,
      required: [true, "State is required"],
      trim: true,
    },
    city: {
      type: String,
      required: [true, "City is required"],
      trim: true,
    },
    address: {
      type: String,
      required: [true, "Address is required"],
      trim: true,
    },
    course: {
      type: String,
      required: [true, "Course is required"],
      trim: true,
    },
    academicYear: {
      type: String,
      required: [true, "Academic year is required"],
      trim: true,
    },
    lastQualification: {
      type: String,
      required: [true, "Last qualification is required"],
      trim: true,
    },
    passingYear: {
      type: Number,
      required: [true, "Passing year is required"],
      min: [2000, "Passing year must be 2000 or later"],
      max: [2100, "Invalid passing year"],
    },
    document: {
      originalName: { type: String, default: "" },
      fileName: { type: String, default: "" },
      filePath: { type: String, default: "" },
      mimeType: { type: String, default: "" },
      size: { type: Number, default: 0 },
    },
    declaration: {
      type: Boolean,
      required: [true, "Declaration is required"],
      validate: {
        validator: (value) => value === true,
        message: "Declaration must be accepted",
      },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Admission", admissionSchema);
