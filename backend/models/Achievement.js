const mongoose = require("mongoose");

const achievementSchema = new mongoose.Schema({
	title: { type: String, required: true },
	studentName: String,
	course: String,
	year: String,
	category: String,
	position: String,
	sport: String,
	event: String,
	exam: String,
	subject: String,
	score: String,
	description: String,
	imageUrl: String,
	pdfUrl: String,
	published: { type: Boolean, default: true },
}, { timestamps: true });

module.exports = mongoose.model("Achievement", achievementSchema);
