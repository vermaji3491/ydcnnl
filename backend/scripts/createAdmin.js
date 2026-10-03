require("dotenv").config();

const { getSupabase } = require("../config/db");

async function createAdmin() {
	const email = process.env.ADMIN_EMAIL?.trim().toLowerCase();
	const password = process.env.ADMIN_PASSWORD;
	if (!email || !password) {
		throw new Error("Set ADMIN_EMAIL and ADMIN_PASSWORD in .env.");
	}

	const supabase = getSupabase();
	const { data: users, error: listError } = await supabase.auth.admin.listUsers({ page: 1, perPage: 1000 });
	if (listError) throw listError;

	let user = users.users.find((candidate) => candidate.email?.toLowerCase() === email);
	if (!user) {
		const { data, error } = await supabase.auth.admin.createUser({
			email,
			password,
			email_confirm: true,
			user_metadata: { name: "Yaduvanshi Administrator" },
		});
		if (error) throw error;
		user = data.user;
	}

	const { error: adminError } = await supabase.from("admin_users").upsert({
		id: user.id,
		display_name: "Yaduvanshi Administrator",
	});
	if (adminError) throw adminError;

	console.log(`Supabase admin ready: ${email}`);
}

createAdmin().catch((error) => {
	console.error("Failed to create admin:", error.message);
	process.exitCode = 1;
});
