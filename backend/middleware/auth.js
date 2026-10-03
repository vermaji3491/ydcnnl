const { getSupabase, getSupabaseAuth } = require("../config/db");

async function protect(req, res, next) {
  try {
    const header = req.headers.authorization || "";
    if (!header.startsWith("Bearer ")) return res.status(401).json({ success:false, message:"Authentication required." });
    const token = header.split(" ")[1];

    const { data: { user }, error: authError } = await getSupabaseAuth().auth.getUser(token);
    if (authError || !user) {
      return res.status(401).json({ success:false, message:"Invalid or expired admin token." });
    }

    const { data: admin, error: adminError } = await getSupabase()
      .from("admin_users")
      .select("id, display_name")
      .eq("id", user.id)
      .maybeSingle();
    if (adminError) throw adminError;
    if (!admin) return res.status(401).json({ success:false, message:"Admin account is inactive or not found." });

    req.admin = {
      id: user.id,
      name: admin.display_name || user.user_metadata?.name || user.email,
      email: user.email,
      role: "admin",
    };
    next();
  } catch (error) {
    return res.status(401).json({ success:false, message:"Invalid or expired admin token." });
  }
}
module.exports = protect;
