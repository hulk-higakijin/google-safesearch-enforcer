const test = require("node:test");
const assert = require("node:assert/strict");
const { enforcedSearchUrl } = require("../core.js");

test("adds safe=active to a Google search", () => {
  assert.equal(
    enforcedSearchUrl("https://www.google.com/search?q=rails"),
    "https://www.google.com/search?q=rails&safe=active"
  );
});

test("replaces another SafeSearch value", () => {
  assert.equal(
    enforcedSearchUrl("https://google.com/search?q=rails&safe=off"),
    "https://google.com/search?q=rails&safe=active"
  );
});

test("does nothing when SafeSearch is already active", () => {
  assert.equal(
    enforcedSearchUrl("https://www.google.com/search?q=rails&safe=active"),
    null
  );
});

test("ignores non-search Google pages", () => {
  assert.equal(enforcedSearchUrl("https://www.google.com/"), null);
});

test("ignores non-Google hosts", () => {
  assert.equal(enforcedSearchUrl("https://example.com/search?q=rails"), null);
  assert.equal(enforcedSearchUrl("https://www.google.co.jp/search?q=rails"), null);
});
