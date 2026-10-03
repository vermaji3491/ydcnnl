const assert = require("node:assert/strict");
const test = require("node:test");
const { validateAdmission } = require("../lib/validation");

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

test("accepts an admission payload with all required backend fields", () => {
  assert.deepEqual(validateAdmission(validAdmission), []);
});

test("rejects missing required fields and invalid contact data", () => {
  const errors = validateAdmission({
    ...validAdmission,
    mobile: "123",
    email: "not-an-email",
    lastQualification: undefined,
  });

  assert.ok(errors.some((message) => message.includes("Mobile number")));
  assert.ok(errors.some((message) => message.includes("valid email")));
  assert.ok(errors.some((message) => message.includes("lastQualification")));
});