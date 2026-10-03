const router = require("express").Router();
const { deleteRow, insertRow, selectRows, updateRow } = require("../lib/database");
const upload = require("../middleware/upload");
const protect = require("../middleware/auth");
const { serialize } = require("./contentHelpers");

const serializeAchievement = (achievement) => serialize(achievement, (value) => ({
	student_name: value.studentName || "",
	rank: value.position || "",
	image_url: value.imageUrl || "",
	year: value.year || "",
		sport: value.sport || "",
		event: value.event || "",
		exam: value.exam || "",
		subject: value.subject || "",
		score: value.score || "",
}));

const achievementPayload = (body, imageUrl) => ({
	title: body.title,
	year: body.year || body.period,
	category: body.category,
	studentName: body.student_name,
	course: body.course,
	position: body.rank,
	sport: body.sport,
	event: body.event,
	exam: body.exam,
	subject: body.subject,
	score: body.score,
	description: body.description,
	imageUrl: imageUrl || body.image_url || body.imageUrl,
	published: body.published,
});

router.get("/", async (_req, res) => {
	const achievements = await selectRows("achievements", {
		filters: { published: true },
		order: "year",
		ascending: false,
	});
	res.json({ success: true, achievements: achievements.map(serializeAchievement) });
});

router.get("/admin", protect, async (_req, res) => {
	const achievements = await selectRows("achievements", { order: "year", ascending: false });
	res.json({ success: true, achievements: achievements.map(serializeAchievement) });
});

router.post("/", protect, upload.single("image"), async (req, res) => {
	const imageUrl = req.file ? `/uploads/${req.file.filename}` : undefined;
	const payload = achievementPayload(req.body, imageUrl);
	const achievement = await insertRow("achievements", {
		...payload,
		period: payload.year,
	});
	res.status(201).json({ success: true, achievement: serializeAchievement(achievement) });
});

router.put("/:id", protect, upload.single("image"), async (req, res) => {
	const imageUrl = req.file ? `/uploads/${req.file.filename}` : undefined;
	const payload = achievementPayload(req.body, imageUrl);
	const achievement = await updateRow("achievements", req.params.id, {
		...payload,
		period: payload.year,
	});
	if (!achievement) return res.status(404).json({ success: false, message: "Achievement not found." });
	res.json({ success: true, achievement: serializeAchievement(achievement) });
});

router.delete("/:id", protect, async (req, res) => {
	const deleted = await deleteRow("achievements", req.params.id);
	if (!deleted) return res.status(404).json({ success: false, message: "Achievement not found." });
	res.json({ success: true });
});

module.exports = router;
