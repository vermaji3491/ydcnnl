const Admission = require("../models/Admission");

const createAdmission = async (req, res) => {
  try {
    const admission = await Admission.create(req.body);

    res.status(201).json({
      success: true,
      message: "Admission form submitted successfully",
      admission,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to submit admission form",
      error: error.message,
    });
  }
};

const getAdmissions = async (req, res) => {
  try {
    const admissions = await Admission.find().sort({
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      count: admissions.length,
      admissions,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch admissions",
      error: error.message,
    });
  }
};

module.exports = {
  createAdmission,
  getAdmissions,
};