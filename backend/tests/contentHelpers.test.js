const assert = require("node:assert/strict");
const test = require("node:test");
const { dateOnly, serialize } = require("../routes/contentHelpers");

test("serializes Mongo documents with a stable id and optional fields", () => {
	const document = { _id: "abc123", title: "A notice", published: true };

	assert.deepEqual(serialize(document), {
		...document,
		id: "abc123",
	});
	assert.deepEqual(serialize(document, (value) => ({ active: value.published })), {
		...document,
		id: "abc123",
		active: true,
	});
});

test("normalizes date values for date inputs", () => {
	assert.equal(dateOnly("2026-09-27T00:00:00.000Z"), "2026-09-27");
	assert.equal(dateOnly(null), "");
});