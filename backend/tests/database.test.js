const assert = require("node:assert/strict");
const test = require("node:test");
const { fromDatabase, toDatabase } = require("../lib/database");

test("preserves legacy columns and exposes camelCase aliases", () => {
  assert.deepEqual(fromDatabase({ id: "abc", student_name: "Jane", created_at: "today" }), {
    id: "abc",
    student_name: "Jane",
    created_at: "today",
    studentName: "Jane",
    createdAt: "today",
  });
});

test("maps API payloads to Supabase columns and omits undefined fields", () => {
  assert.deepEqual(toDatabase({ studentName: "Jane", image_url: "/image.png", optional: undefined }), {
    student_name: "Jane",
    image_url: "/image.png",
  });
});