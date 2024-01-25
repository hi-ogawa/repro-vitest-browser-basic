import { test, expect } from 'vitest';
// actually importing would somehow avoid error...
// https://github.com/vitest-dev/vitest/issues/4892#issuecomment-1907879517
// import loupe from "loupe"

test('ok', async () => {
  // expect(loupe).toBeDefined();
  expect(0).toBe(0);
});
