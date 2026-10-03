const router = require("express").Router();
const NSSActivity = require("../models/NSSActivity");
const protect = require("../middleware/auth");
const { dateOnly, serialize } = require("./contentHelpers");

const serializeActivity = (activity) => serialize(activity, (value) => ({
	activity_date: dateOnly(value.activity_date),
}));

router.get("/admin", protect, async (_req, res) => {
	const activities = await NSSActivity.find().sort({ activity_date: -1 });
	res.json({ success: true, activities: activities.map(serializeActivity) });
});

router.get("/", async (_req, res) => {
	const activities = await NSSActivity.find({ published: true }).sort({ activity_date: -1 });
	res.json({ success: true, activities: activities.map(serializeActivity) });
});

router.post("/", protect, async (req, res) => {
	const activity = await NSSActivity.create(req.body);
	res.status(201).json({ success: true, activity: serializeActivity(activity) });
});

router.put("/:id", protect, async (req, res) => {
	const activity = await NSSActivity.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
	if (!activity) return res.status(404).json({ success: false, message: "NSS activity not found." });
	res.json({ success: true, activity: serializeActivity(activity) });
});

router.delete("/:id", protect, async (req, res) => {
	const activity = await NSSActivity.findByIdAndDelete(req.params.id);
	if (!activity) return res.status(404).json({ success: false, message: "NSS activity not found." });
	res.json({ success: true });
});

module.exports = router;