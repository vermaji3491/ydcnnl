const mongoose = require("mongoose");

const feeSchema = new mongoose.Schema({
	course: { type: String, required: true, trim: true },
	duration: { type: String, required: true, trim: true },
	total_fee: { type: Number, min: 0, default: 0 },
	first_year_fee: { type: Number, min: 0, default: 0 },
	other_fee: { type: Number, min: 0, default: 0 },
}, { timestamps: true });

module.exports = mongoose.model("Fee", feeSchema);