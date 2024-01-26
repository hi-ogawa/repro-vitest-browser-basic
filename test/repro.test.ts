import { test } from 'vitest';

test('ok', async () => {
});

test("url polyfill", async () => {
  // FAIL  test/repro.test.ts > ok
  // ReferenceError: require is not defined
  //  ❯ ../../../../node_modules/.pnpm/url@0.11.3/node_modules/url/url.js:26:16
  await import("url")
})
