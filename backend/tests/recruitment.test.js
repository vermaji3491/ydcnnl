const assert = require("node:assert/strict");
const test = require("node:test");
const { normalizeRecruitmentPayload } = require("../routes/contentHelpers");
const upload = require("../middleware/upload");

test("allows multiple uploaded files for recruitment applications", () => {
  assert.equal(upload.limits?.files, undefined);
});

test("normalizes recruitment form values and keeps uploaded files metadata", () => {
  const payload = normalizeRecruitmentPayload(
    {
      name: "  Jane Doe  ",
      email: " JANE@EXAMPLE.COM ",
      phone: "1234567890",
      declaration: "true",
      position: "assistant-professor",
      department: "  Computer Science  ",
      coverLetter: "  I am excited to apply.  ",
      experience: "5 years",
    },
    [
      { originalname: "resume.pdf", filename: "resume-1.pdf", mimetype: "application/pdf", size: 1024 },
      { originalname: "id-card.png", filename: "id-2.png", mimetype: "image/png", size: 2048 },
    ]
  );

  assert.equal(payload.name, "Jane Doe");
  assert.equal(payload.email, "jane@example.com");
  assert.equal(payload.position, "assistant-professor");
  assert.equal(payload.department, "Computer Science");
  assert.equal(payload.coverLetter, "I am excited to apply.");
  assert.equal(payload.declaration, true);
  assert.equal(payload.resume.originalName, "resume.pdf");
  assert.equal(payload.documents.length, 2);
  assert.equal(payload.documents[0].originalName, "id-card.png");
});
