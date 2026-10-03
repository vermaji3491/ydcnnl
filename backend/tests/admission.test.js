const assert = require("node:assert/strict");
const test = require("node:test");
const Admission = require("../models/Admission");

const validAdmission = {
  studentName: "Test Student",
  fatherName: "Test Father",
  motherName: "Test Mother",
  dob: "2005-01-15",
  gender: "Other",
  category: "General",
  mobile: "9876543210",
  email: "student@example.com",
  state: "Haryana",
  city: "Narnaul",
  address: "College Road",
  course: "B.Sc",
  academicYear: "2026-27",
  lastQualification: "12th Pass",
  passingYear: 2025,
  declaration: true,
};

test("accepts an admission payload with all required backend fields", async () => {
  await assert.doesNotReject(new Admission(validAdmission).validate());
});

test("rejects missing required fields and invalid contact data", async () => {
  const error = await new Admission({
    ...validAdmission,
    mobile: "123",
    email: "not-an-email",
    lastQualification: undefined,
  }).validate().then(
    () => null,
    (validationError) => validationError
  );

  assert.ok(error);
  assert.ok(error.errors.mobile);
  assert.ok(error.errors.email);
  assert.ok(error.errors.lastQualification);
});