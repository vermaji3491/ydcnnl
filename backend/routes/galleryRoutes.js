const router = require("express").Router();
const { deleteRow, insertRow, selectRows, updateRow } = require("../lib/database");
const upload = require("../middleware/upload");
const protect = require("../middleware/auth");
const { serialize } = require("./contentHelpers");

const serializeItem = (item) => serialize(item, (value) => ({
	image_url: value.imageUrl || value.mediaUrl || "",
}));

router.get("/", async (_req, res) => {
	const gallery = await selectRows("gallery_items", { filters: { published: true }, order: "created_at", ascending: false });
	res.json({ success: true, gallery: gallery.map(serializeItem) });
});

router.get("/admin", protect, async (_req, res) => {
	const gallery = await selectRows("gallery_items", { order: "created_at", ascending: false });
	res.json({ success: true, gallery: gallery.map(serializeItem) });
});

router.post("/", protect, upload.single("image"), async (req, res) => {
	const imageUrl = req.file ? `/uploads/${req.file.filename}` : req.body.image_url || req.body.imageUrl;
	if (!imageUrl) {
		return res.status(400).json({ success: false, message: "Image is required." });
	}

	const item = await insertRow("gallery_items", { ...req.body, imageUrl, mediaUrl: imageUrl });
	res.status(201).json({ success: true, item: serializeItem(item) });
});

router.put("/:id", protect, async (req, res) => {
	const item = await updateRow("gallery_items", req.params.id, {
		...req.body,
		imageUrl: req.body.image_url || req.body.imageUrl,
		mediaUrl: req.body.image_url || req.body.imageUrl,
	});
	if (!item) return res.status(404).json({ success: false, message: "Gallery item not found." });
	res.json({ success: true, item: serializeItem(item) });
});

router.delete("/:id", protect, async (req, res) => {
	const deleted = await deleteRow("gallery_items", req.params.id);
	if (!deleted) return res.status(404).json({ success: false, message: "Gallery item not found." });
	res.json({ success: true });
});

module.exports = router;
