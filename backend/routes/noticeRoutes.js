const router = require("express").Router();
const { deleteRow, insertRow, selectRows, updateRow } = require("../lib/database");
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
	const notices = await selectRows("notices", { order: "date", ascending: false });
	res.json({ success: true, notices: notices.map(serializeNotice) });
});

router.get("/", async (_req, res) => {
	const notices = await selectRows("notices", { filters: { published: true }, order: "date", ascending: false });
	res.json({ success: true, notices: notices.map(serializeNotice) });
});

router.post("/", protect, async (req, res) => {
	const notice = await insertRow("notices", noticePayload(req.body));
	res.status(201).json({ success: true, notice: serializeNotice(notice) });
});

router.put("/:id", protect, async (req, res) => {
	const notice = await updateRow("notices", req.params.id, noticePayload(req.body));
	if (!notice) return res.status(404).json({ success: false, message: "Notice not found." });
	res.json({ success: true, notice: serializeNotice(notice) });
});

router.delete("/:id", protect, async (req, res) => {
	const deleted = await deleteRow("notices", req.params.id);
	if (!deleted) return res.status(404).json({ success: false, message: "Notice not found." });
	res.json({ success: true });
});

module.exports = router;
