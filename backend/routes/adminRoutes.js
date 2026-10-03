const router = require("express").Router();
const { countRows } = require("../lib/database");
const { getSupabase, getSupabaseAuth } = require("../config/db");
const protect = require("../middleware/auth");

router.post("/login", async (req, res) => {
	try {
		const email = req.body.email?.trim().toLowerCase();
		const password = req.body.password || "";
		if (!email || !password) {
			return res.status(400).json({ success: false, message: "Email and password are required." });
		}

		const { data, error } = await getSupabaseAuth().auth.signInWithPassword({ email, password });
		if (error || !data.session || !data.user) {
			return res.status(401).json({ success: false, message: "Invalid email or password." });
		}

		const { data: admin, error: adminError } = await getSupabase()
			.from("admin_users")
			.select("id, display_name")
			.eq("id", data.user.id)
			.maybeSingle();
		if (adminError) throw adminError;
		if (!admin) {
			return res.status(403).json({ success: false, message: "This account is not an administrator." });
		}

		return res.json({
			success: true,
			token: data.session.access_token,
			admin: {
				id: data.user.id,
				name: admin.display_name || data.user.user_metadata?.name || email,
				email: data.user.email,
				role: "admin",
			},
		});
	} catch (error) {
		console.error("Admin login error:", error.message);
		return res.status(500).json({ success: false, message: "Login failed." });
	}
});

router.get("/me", protect, async (req, res) => {
	res.json({ success: true, admin: req.admin });
});

router.get("/dashboard", protect, async (_req, res) => {
	const tables = {
		Admission: "admissions",
		Contact: "contacts",
		Notice: "notices",
		Gallery: "gallery_items",
		Achievement: "achievements",
		Fee: "fees",
		IndustrialVisit: "industrial_visits",
		NSSActivity: "nss_activities",
		Course: "courses",
		Event: "events",
		Recruitment: "recruitments",
	};
	const entries = await Promise.all(
		Object.entries(tables).map(async ([name, table]) => [name, await countRows(table)])
	);

	res.json({ success: true, stats: Object.fromEntries(entries) });
});

module.exports = router;
