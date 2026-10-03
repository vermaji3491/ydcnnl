const router = require("express").Router();
const { deleteRow, insertRow, selectRows, updateRow } = require("../lib/database");
const protect = require("../middleware/auth");
const { serialize } = require("./contentHelpers");

router.get("/", async (_req, res) => {
	const fees = await selectRows("fees", { order: "course" });
	res.json({ success: true, fees: fees.map((fee) => serialize(fee)) });
});

router.post("/", protect, async (req, res) => {
	const fee = await insertRow("fees", req.body);
	res.status(201).json({ success: true, fee: serialize(fee) });
});

router.put("/:id", protect, async (req, res) => {
	const fee = await updateRow("fees", req.params.id, req.body);
	if (!fee) return res.status(404).json({ success: false, message: "Fee record not found." });
	res.json({ success: true, fee: serialize(fee) });
});

router.delete("/:id", protect, async (req, res) => {
	const deleted = await deleteRow("fees", req.params.id);
	if (!deleted) return res.status(404).json({ success: false, message: "Fee record not found." });
	res.json({ success: true });
});

module.exports = router;