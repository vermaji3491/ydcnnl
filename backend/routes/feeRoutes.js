const router = require("express").Router();
const Fee = require("../models/Fee");
const protect = require("../middleware/auth");
const { serialize } = require("./contentHelpers");

router.get("/", async (_req, res) => {
	const fees = await Fee.find().sort({ course: 1 });
	res.json({ success: true, fees: fees.map((fee) => serialize(fee)) });
});

router.post("/", protect, async (req, res) => {
	const fee = await Fee.create(req.body);
	res.status(201).json({ success: true, fee: serialize(fee) });
});

router.put("/:id", protect, async (req, res) => {
	const fee = await Fee.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
	if (!fee) return res.status(404).json({ success: false, message: "Fee record not found." });
	res.json({ success: true, fee: serialize(fee) });
});

router.delete("/:id", protect, async (req, res) => {
	const fee = await Fee.findByIdAndDelete(req.params.id);
	if (!fee) return res.status(404).json({ success: false, message: "Fee record not found." });
	res.json({ success: true });
});

module.exports = router;