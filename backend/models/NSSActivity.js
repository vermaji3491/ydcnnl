const mongoose = require("mongoose");

const nssActivitySchema = new mongoose.Schema({
	title: { type: String, required: true, trim: true },
	activity_date: { type: Date, default: Date.now },
	description: { type: String, required: true, trim: true },
	image_url: String,
	published: { type: Boolean, default: true },
}, { timestamps: true });

module.exports = mongoose.model("NSSActivity", nssActivitySchema);