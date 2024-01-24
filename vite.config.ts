import { defineConfig } from 'vitest/config';

export default defineConfig({
  optimizeDeps: {
    // debug by
    //   DEBUG=vite:deps pnpm test
    // force: true
  },
  test: {
    browser: {
      enabled: true,
      provider: "playwright",
      name: 'chromium',
    },
  },
});
