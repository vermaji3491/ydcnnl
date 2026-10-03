const fs = require("fs");
const path = require("path");
const { deleteRow, getRow, insertRow, selectRows } = require("../lib/database");
const { validateRecruitment } = require("../lib/validation");
const { normalizeRecruitmentPayload } = require("../routes/contentHelpers");

const cleanupUploadedFiles = (files = []) => {
  files.forEach((file) => {
    if (!file || !file.filename) return;

    const filePath = path.join(__dirname, "..", "uploads", file.filename);

    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }
  });
};

const createRecruitment = async (req, res) => {
  try {
    const files = [
      ...(req.files?.resume || []),
      ...(req.files?.documents || []),
    ];

    const payload = normalizeRecruitmentPayload(req.body, files);
    const validationErrors = validateRecruitment(payload);
    if (validationErrors.length) {
      cleanupUploadedFiles(files);
      return res.status(400).json({
        success: false,
        message: "Please check the recruitment form fields.",
        errors: validationErrors,
      });
    }

    const recruitment = await insertRow("recruitments", payload);

    res.status(201).json({
      success: true,
      message: "Recruitment application submitted successfully.",
      recruitment,
    });
  } catch (error) {
    cleanupUploadedFiles([
      ...(req.files?.resume || []),
      ...(req.files?.documents || []),
    ]);

    console.error("Recruitment submission error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to submit recruitment application.",
      error: error.message,
    });
  }
};

const getRecruitments = async (req, res) => {
  try {
    const applications = await selectRows("recruitments", { order: "created_at", ascending: false });

    res.json({
      success: true,
      count: applications.length,
      applications,
    });
  } catch (error) {
    console.error("Get recruitments error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch recruitment applications.",
    });
  }
};

const getRecruitmentById = async (req, res) => {
  try {
    const application = await getRow("recruitments", req.params.id);

    if (!application) {
      return res.status(404).json({
        success: false,
        message: "Recruitment application not found.",
      });
    }

    return res.json({ success: true, application });
  } catch (error) {
    console.error("Get recruitment error:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to fetch recruitment application.",
    });
  }
};

const deleteRecruitment = async (req, res) => {
  try {
    const application = await getRow("recruitments", req.params.id);

    if (!application) {
      return res.status(404).json({
        success: false,
        message: "Recruitment application not found.",
      });
    }

    const fileNames = [application.resume?.fileName, ...(application.documents || []).map((item) => item.fileName)];

    fileNames.filter(Boolean).forEach((fileName) => {
      const filePath = path.join(__dirname, "..", "uploads", fileName);
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }
    });

    await deleteRow("recruitments", req.params.id);

    return res.json({
      success: true,
      message: "Recruitment application deleted successfully.",
    });
  } catch (error) {
    console.error("Delete recruitment error:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to delete recruitment application.",
    });
  }
};

module.exports = {
  createRecruitment,
  getRecruitments,
  getRecruitmentById,
  deleteRecruitment,
};
