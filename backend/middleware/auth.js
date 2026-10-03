const jwt = require("jsonwebtoken");
const Admin = require("../models/Admin");

async function protect(req, res, next) {
  try {
    const header = req.headers.authorization || "";
    if (!header.startsWith("Bearer ")) return res.status(401).json({ success:false, message:"Authentication required." });
    const token = header.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const admin = await Admin.findById(decoded.id).select("-password");
    if (!admin || !admin.active) return res.status(401).json({ success:false, message:"Admin account is inactive or not found." });
    req.admin = admin;
    next();
  } catch (error) {
    return res.status(401).json({ success:false, message:"Invalid or expired admin token." });
  }
}
module.exports = protect;
