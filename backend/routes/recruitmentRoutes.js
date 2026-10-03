const express = require("express");
const upload = require("../middleware/upload");
const protect = require("../middleware/auth");
const {
  createRecruitment,
  getRecruitments,
  getRecruitmentById,
  deleteRecruitment,
} = require("../controllers/recruitmentController");

const router = express.Router();

router.post(
  "/",
  upload.fields([
    { name: "resume", maxCount: 1 },
    { name: "documents", maxCount: 10 },
  ]),
  createRecruitment
);

router.get("/", protect, getRecruitments);
router.get("/:id", protect, getRecruitmentById);
router.delete("/:id", protect, deleteRecruitment);

module.exports = router;
