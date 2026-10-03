function dateOnly(value) {
	return value ? new Date(value).toISOString().slice(0, 10) : "";
}

function serialize(document, fields = () => ({})) {
	const value = document.toObject ? document.toObject() : document;
	return {
		...value,
		id: String(value._id || value.id),
		...fields(value),
	};
}

function normalizeRecruitmentPayload(payload = {}, files = []) {
	const textFields = [
		"name",
		"email",
		"phone",
		"dob",
		"gender",
		"position",
		"department",
		"qualification",
		"specialization",
		"experience",
		"organization",
		"address",
		"coverLetter",
	];

	const normalized = { ...payload };

	textFields.forEach((field) => {
		const value = normalized[field];
		if (value === undefined || value === null) {
			return;
		}

		const stringValue = String(value).trim();
		normalized[field] =
			field === "email" && stringValue
				? stringValue.toLowerCase()
				: stringValue;
	});

	normalized.declaration =
		normalized.declaration === true || normalized.declaration === "true" || normalized.declaration === "1";

	const uploadedFiles = Array.isArray(files) ? files : [];
	const hasFieldNames = uploadedFiles.some((file) => file && (file.fieldname === "resume" || file.fieldname === "documents"));
	const resumeFile = uploadedFiles.find((file) => {
		if (!file) return false;
		const name = (file.originalname || "").toLowerCase();
		return file.fieldname === "resume" || name.includes("resume");
	}) || uploadedFiles[0] || null;
	const supportingFiles = uploadedFiles.filter((file) => file && file !== resumeFile);

	normalized.resume = resumeFile
		? {
				originalName: resumeFile.originalname,
				fileName: resumeFile.filename,
				filePath: `/uploads/${resumeFile.filename}`,
				mimeType: resumeFile.mimetype,
				size: resumeFile.size,
		  }
		: undefined;

	if (hasFieldNames) {
		normalized.documents = supportingFiles.map((file) => ({
			originalName: file.originalname,
			fileName: file.filename,
			filePath: `/uploads/${file.filename}`,
			mimeType: file.mimetype,
			size: file.size,
		}));
	} else if (uploadedFiles.length > 1) {
		normalized.documents = [...supportingFiles, resumeFile].map((file) => ({
			originalName: file.originalname,
			fileName: file.filename,
			filePath: `/uploads/${file.filename}`,
			mimeType: file.mimetype,
			size: file.size,
		}));
	} else {
		normalized.documents = [];
	}

	return normalized;
}

module.exports = { dateOnly, serialize, normalizeRecruitmentPayload };