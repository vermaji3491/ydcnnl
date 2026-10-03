const router = require("express").Router();
const Gallery = require("../models/Gallery");
const upload = require("../middleware/upload");
const protect = require("../middleware/auth");
const { serialize } = require("./contentHelpers");

const serializeItem = (item) => serialize(item, (value) => ({
	image_url: value.imageUrl || "",
}));

router.get("/", async (_req, res) => {
	const gallery = await Gallery.find({ published: true }).sort({ createdAt: -1 });
	res.json({ success: true, gallery: gallery.map(serializeItem) });
});

router.get("/admin", protect, async (_req, res) => {
	const gallery = await Gallery.find().sort({ createdAt: -1 });
	res.json({ success: true, gallery: gallery.map(serializeItem) });
});

router.post("/", protect, upload.single("image"), async (req, res) => {
	const imageUrl = req.file ? `/uploads/${req.file.filename}` : req.body.image_url || req.body.imageUrl;
	if (!imageUrl) {
		return res.status(400).json({ success: false, message: "Image is required." });
	}

	const item = await Gallery.create({ ...req.body, imageUrl });
	res.status(201).json({ success: true, item: serializeItem(item) });
});

router.put("/:id", protect, async (req, res) => {
	const item = await Gallery.findByIdAndUpdate(req.params.id, {
		...req.body,
		imageUrl: req.body.image_url || req.body.imageUrl,
	}, {
		new: true,
		runValidators: true,
	});
	if (!item) return res.status(404).json({ success: false, message: "Gallery item not found." });
	res.json({ success: true, item: serializeItem(item) });
});

router.delete("/:id", protect, async (req, res) => {
	const item = await Gallery.findByIdAndDelete(req.params.id);
	if (!item) return res.status(404).json({ success: false, message: "Gallery item not found." });
	res.json({ success: true });
});

module.exports = router;
