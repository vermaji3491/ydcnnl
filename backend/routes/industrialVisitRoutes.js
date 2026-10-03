const router = require("express").Router();
const IndustrialVisit = require("../models/IndustrialVisit");
const protect = require("../middleware/auth");
const { dateOnly, serialize } = require("./contentHelpers");

const serializeVisit = (visit) => serialize(visit, (value) => ({
	visit_date: dateOnly(value.visit_date),
}));

router.get("/admin", protect, async (_req, res) => {
	const visits = await IndustrialVisit.find().sort({ visit_date: -1 });
	res.json({ success: true, visits: visits.map(serializeVisit) });
});

router.get("/", async (_req, res) => {
	const visits = await IndustrialVisit.find({ published: true }).sort({ visit_date: -1 });
	res.json({ success: true, visits: visits.map(serializeVisit) });
});

router.post("/", protect, async (req, res) => {
	const visit = await IndustrialVisit.create(req.body);
	res.status(201).json({ success: true, visit: serializeVisit(visit) });
});

router.put("/:id", protect, async (req, res) => {
	const visit = await IndustrialVisit.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
	if (!visit) return res.status(404).json({ success: false, message: "Industrial visit not found." });
	res.json({ success: true, visit: serializeVisit(visit) });
});

router.delete("/:id", protect, async (req, res) => {
	const visit = await IndustrialVisit.findByIdAndDelete(req.params.id);
	if (!visit) return res.status(404).json({ success: false, message: "Industrial visit not found." });
	res.json({ success: true });
});

module.exports = router;