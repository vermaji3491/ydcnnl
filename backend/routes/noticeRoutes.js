const router = require("express").Router();
const Notice = require("../models/Notice");
const protect = require("../middleware/auth");
const { dateOnly, serialize } = require("./contentHelpers");

const serializeNotice = (notice) => serialize(notice, (value) => ({
	date: dateOnly(value.date),
	is_active: value.published,
}));

const noticePayload = ({ is_active, published, ...body }) => ({
	...body,
	published: is_active ?? published,
});

router.get("/admin", protect, async (_req, res) => {
	const notices = await Notice.find().sort({ date: -1 });
	res.json({ success: true, notices: notices.map(serializeNotice) });
});

router.get("/", async (_req, res) => {
	const notices = await Notice.find({ published: true }).sort({ date: -1 });
	res.json({ success: true, notices: notices.map(serializeNotice) });
});

router.post("/", protect, async (req, res) => {
	const notice = await Notice.create(noticePayload(req.body));
	res.status(201).json({ success: true, notice: serializeNotice(notice) });
});

router.put("/:id", protect, async (req, res) => {
	const notice = await Notice.findByIdAndUpdate(req.params.id, noticePayload(req.body), {
		new: true,
		runValidators: true,
	});
	if (!notice) return res.status(404).json({ success: false, message: "Notice not found." });
	res.json({ success: true, notice: serializeNotice(notice) });
});

router.delete("/:id", protect, async (req, res) => {
	const notice = await Notice.findByIdAndDelete(req.params.id);
	if (!notice) return res.status(404).json({ success: false, message: "Notice not found." });
	res.json({ success: true });
});

module.exports = router;
