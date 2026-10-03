const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Admin = require("../models/Admin");
const protect = require("../middleware/auth");

router.post("/login", async (req, res) => {
	try {
		const email = req.body.email?.trim().toLowerCase();
		const password = req.body.password || "";
		const admin = await Admin.findOne({ email });

		if (!admin || !admin.active || !(await bcrypt.compare(password, admin.password))) {
			return res.status(401).json({ success: false, message: "Invalid email or password." });
		}

		const token = jwt.sign(
			{ id: admin._id, role: admin.role },
			process.env.JWT_SECRET,
			{ expiresIn: "8h" }
		);

		return res.json({
			success: true,
			token,
			admin: { id: admin._id, name: admin.name, email: admin.email, role: admin.role },
		});
	} catch (error) {
		return res.status(500).json({ success: false, message: "Login failed." });
	}
});

router.get("/me", protect, async (req, res) => {
	res.json({ success: true, admin: req.admin });
});

router.get("/dashboard", protect, async (_req, res) => {
	const models = {
		Admission: require("../models/Admission"),
		Contact: require("../models/contact"),
		Notice: require("../models/Notice"),
		Gallery: require("../models/Gallery"),
		Achievement: require("../models/Achievement"),
		Fee: require("../models/Fee"),
		IndustrialVisit: require("../models/IndustrialVisit"),
		NSSActivity: require("../models/NSSActivity"),
		Course: require("../models/Course"),
		Event: require("../models/Event"),
	};
	const entries = await Promise.all(
		Object.entries(models).map(async ([name, Model]) => [name, await Model.countDocuments()])
	);

	res.json({ success: true, stats: Object.fromEntries(entries) });
});

module.exports = router;
