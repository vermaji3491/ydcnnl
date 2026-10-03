const router = require("express").Router();
const { deleteRow, insertRow, selectRows, updateRow } = require("../lib/database");
const protect = require("../middleware/auth");
const { dateOnly, serialize } = require("./contentHelpers");

const serializeVisit = (visit) => serialize(visit, (value) => ({
	visit_date: dateOnly(value.visit_date),
}));

router.get("/admin", protect, async (_req, res) => {
	const visits = await selectRows("industrial_visits", { order: "visit_date", ascending: false });
	res.json({ success: true, visits: visits.map(serializeVisit) });
});

router.get("/", async (_req, res) => {
	const visits = await selectRows("industrial_visits", {
		filters: { published: true },
		order: "visit_date",
		ascending: false,
	});
	res.json({ success: true, visits: visits.map(serializeVisit) });
});

router.post("/", protect, async (req, res) => {
	const visit = await insertRow("industrial_visits", req.body);
	res.status(201).json({ success: true, visit: serializeVisit(visit) });
});

router.put("/:id", protect, async (req, res) => {
	const visit = await updateRow("industrial_visits", req.params.id, req.body);
	if (!visit) return res.status(404).json({ success: false, message: "Industrial visit not found." });
	res.json({ success: true, visit: serializeVisit(visit) });
});

router.delete("/:id", protect, async (req, res) => {
	const deleted = await deleteRow("industrial_visits", req.params.id);
	if (!deleted) return res.status(404).json({ success: false, message: "Industrial visit not found." });
	res.json({ success: true });
});

module.exports = router;