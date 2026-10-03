const mongoose = require("mongoose");

const industrialVisitSchema = new mongoose.Schema({
	company_name: { type: String, required: true, trim: true },
	category: { type: String, default: "Manufacturing" },
	visit_date: { type: Date, default: Date.now },
	location: { type: String, required: true, trim: true },
	duration: String,
	students: String,
	purpose: String,
	description: { type: String, required: true, trim: true },
	what_students_saw: String,
	activities: String,
	learnings: String,
	outcomes: String,
	coordinator: String,
	main_image: String,
	gallery: { type: [String], default: [] },
	published: { type: Boolean, default: true },
}, { timestamps: true });

module.exports = mongoose.model("IndustrialVisit", industrialVisitSchema);