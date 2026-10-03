const router = require("express").Router();
const { deleteRow, insertRow, selectRows, updateRow } = require("../lib/database");
const protect = require("../middleware/auth");

router.get("/", async (_req, res) => {
	const events = await selectRows("events", { filters: { published: true }, order: "date" });
	res.json({ success: true, events });
});

router.post("/", protect, async (req, res) => {
	const event = await insertRow("events", req.body);
	res.status(201).json({ success: true, event });
});

router.put("/:id", protect, async (req, res) => {
	const event = await updateRow("events", req.params.id, req.body);
	res.json({ success: true, event });
});

router.delete("/:id", protect, async (req, res) => {
	await deleteRow("events", req.params.id);
	res.json({ success: true });
});

module.exports = router;
