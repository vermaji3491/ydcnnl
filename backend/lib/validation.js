const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function requiredText(payload, fields) {
  return fields
    .filter((field) => !String(payload[field] || "").trim())
    .map((field) => `${field} is required.`);
}

function validateAdmission(payload) {
  const errors = requiredText(payload, [
    "studentName",
    "fatherName",
    "motherName",
    "dob",
    "gender",
    "category",
    "mobile",
    "email",
    "state",
    "city",
    "address",
    "course",
    "academicYear",
    "lastQualification",
  ]);

  if (payload.gender && !["Male", "Female", "Other"].includes(payload.gender)) {
    errors.push("Please select a valid gender.");
  }
  if (payload.category && !["General", "SC", "ST", "OBC", "Other"].includes(payload.category)) {
    errors.push("Please select a valid category.");
  }
  if (payload.mobile && !/^[0-9]{10}$/.test(payload.mobile)) {
    errors.push("Mobile number must contain exactly 10 digits.");
  }
  if (payload.email && !emailPattern.test(payload.email)) {
    errors.push("Please enter a valid email address.");
  }

  const passingYear = Number(payload.passingYear);
  if (!Number.isInteger(passingYear) || passingYear < 2000 || passingYear > 2100) {
    errors.push("Passing year must be between 2000 and 2100.");
  }
  if (payload.declaration !== true) errors.push("Declaration must be accepted.");

  return errors;
}

function validateRecruitment(payload) {
  const errors = requiredText(payload, ["name", "email", "phone", "position", "qualification"]);

  if (payload.email && !emailPattern.test(payload.email)) {
    errors.push("Please enter a valid email address.");
  }
  if (payload.phone && !/^[0-9]{10}$/.test(payload.phone)) {
    errors.push("Phone number must contain exactly 10 digits.");
  }
  if (payload.declaration !== true) errors.push("Declaration must be accepted.");
  if (!payload.resume?.originalName || !payload.resume?.fileName || !payload.resume?.filePath) {
    errors.push("A resume file is required.");
  }

  return errors;
}

module.exports = { validateAdmission, validateRecruitment };