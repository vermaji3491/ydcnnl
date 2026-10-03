const express = require("express");
const fs = require("fs");
const path = require("path");
const { deleteRow, getRow, insertRow, selectRows } = require("../lib/database");
const { validateAdmission } = require("../lib/validation");
const upload = require("../middleware/upload");
const protect = require("../middleware/auth");

const router = express.Router();

// Submit a new online admission registration.
router.post("/", upload.single("document"), async (req, res) => {
  try {
    const {
      studentName,
      fatherName,
      motherName,
      dob,
      gender,
      category,
      mobile,
      email,
      state,
      city,
      address,
      course,
      academicYear,
      lastQualification,
      passingYear,
      declaration,
    } = req.body;

    const payload = {
      studentName,
      fatherName: fatherName?.trim(),
      motherName: motherName?.trim(),
      dob,
      gender,
      category,
      mobile: mobile?.trim(),
      email: email?.trim().toLowerCase(),
      state: state?.trim(),
      city: city?.trim(),
      address: address?.trim(),
      course: course?.trim(),
      academicYear: academicYear?.trim(),
      lastQualification: lastQualification?.trim(),
      passingYear: Number(passingYear),
      declaration: declaration === true || declaration === "true",
      document: req.file
        ? {
            originalName: req.file.originalname,
            fileName: req.file.filename,
            filePath: `/uploads/${req.file.filename}`,
            mimeType: req.file.mimetype,
            size: req.file.size,
          }
        : undefined,
    };
    payload.studentName = studentName?.trim();

    const validationErrors = validateAdmission(payload);
    if (validationErrors.length) {
      if (req.file) {
        const uploadedPath = path.join(__dirname, "..", "uploads", req.file.filename);
        if (fs.existsSync(uploadedPath)) fs.unlinkSync(uploadedPath);
      }
      return res.status(400).json({
        success: false,
        message: "Please check the admission form fields.",
        errors: validationErrors,
      });
    }

    const admission = await insertRow("admissions", payload);

    res.status(201).json({
      success: true,
      message: "Admission form submitted successfully!",
      admission,
    });
  } catch (error) {
    // If database insertion fails after the file was uploaded,
    // remove the unused uploaded file.
    if (req.file) {
      const uploadedPath = path.join(__dirname, "..", "uploads", req.file.filename);
      if (fs.existsSync(uploadedPath)) {
        fs.unlinkSync(uploadedPath);
      }
    }

    console.error("Admission submission error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to submit admission form.",
      error: error.message,
    });
  }
});

// Get all admission registrations for the admin dashboard.
router.get("/", protect, async (req, res) => {
  try {
    const admissions = await selectRows("admissions", { order: "created_at", ascending: false });

    res.json({
      success: true,
      count: admissions.length,
      admissions,
    });
  } catch (error) {
    console.error("Get admissions error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to get admissions.",
    });
  }
});

// Get one admission by its UUID.
router.get("/:id", protect, async (req, res) => {
  try {
    const admission = await getRow("admissions", req.params.id);

    if (!admission) {
      return res.status(404).json({
        success: false,
        message: "Admission registration not found.",
      });
    }

    res.json({
      success: true,
      admission,
    });
  } catch (error) {
    console.error("Get admission error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to get admission registration.",
    });
  }
});

// Delete an admission and its uploaded document.
router.delete("/:id", protect, async (req, res) => {
  try {
    const admission = await getRow("admissions", req.params.id);

    if (!admission) {
      return res.status(404).json({
        success: false,
        message: "Admission registration not found.",
      });
    }

    if (admission.document?.fileName) {
      const filePath = path.join(__dirname, "..", "uploads", admission.document.fileName);
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }
    }

    await deleteRow("admissions", req.params.id);

    res.json({
      success: true,
      message: "Admission registration deleted successfully.",
    });
  } catch (error) {
    console.error("Delete admission error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to delete admission registration.",
    });
  }
});

module.exports = router;
