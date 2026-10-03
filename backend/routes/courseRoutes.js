const router = require("express").Router();
const { deleteRow, insertRow, selectRows, updateRow } = require("../lib/database");
const protect = require("../middleware/auth");

router.get("/", async (_req, res) => {
	const courses = await selectRows("courses", { filters: { active: true }, order: "name" });
	res.json({ success: true, courses });
});

router.post("/", protect, async (req, res) => {
	const course = await insertRow("courses", req.body);
	res.status(201).json({ success: true, course });
});

router.put("/:id", protect, async (req, res) => {
	const course = await updateRow("courses", req.params.id, req.body);
	res.json({ success: true, course });
});

router.delete("/:id", protect, async (req, res) => {
	await deleteRow("courses", req.params.id);
	res.json({ success: true });
});

module.exports = router;
