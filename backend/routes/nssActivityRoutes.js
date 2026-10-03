const router = require("express").Router();
const { deleteRow, insertRow, selectRows, updateRow } = require("../lib/database");
const protect = require("../middleware/auth");
const { dateOnly, serialize } = require("./contentHelpers");

const serializeActivity = (activity) => serialize(activity, (value) => ({
	activity_date: dateOnly(value.activity_date),
}));

router.get("/admin", protect, async (_req, res) => {
	const activities = await selectRows("nss_activities", { order: "activity_date", ascending: false });
	res.json({ success: true, activities: activities.map(serializeActivity) });
});

router.get("/", async (_req, res) => {
	const activities = await selectRows("nss_activities", {
		filters: { published: true },
		order: "activity_date",
		ascending: false,
	});
	res.json({ success: true, activities: activities.map(serializeActivity) });
});

router.post("/", protect, async (req, res) => {
	const activity = await insertRow("nss_activities", req.body);
	res.status(201).json({ success: true, activity: serializeActivity(activity) });
});

router.put("/:id", protect, async (req, res) => {
	const activity = await updateRow("nss_activities", req.params.id, req.body);
	if (!activity) return res.status(404).json({ success: false, message: "NSS activity not found." });
	res.json({ success: true, activity: serializeActivity(activity) });
});

router.delete("/:id", protect, async (req, res) => {
	const deleted = await deleteRow("nss_activities", req.params.id);
	if (!deleted) return res.status(404).json({ success: false, message: "NSS activity not found." });
	res.json({ success: true });
});

module.exports = router;