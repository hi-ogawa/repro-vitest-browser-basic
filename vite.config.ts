import { defineConfig } from "vitest/config";

export default defineConfig({
  optimizeDeps: {
    // debug by
    //   DEBUG=vite:deps pnpm test
    force: true,
    // tweak optimizeDeps for browser tests
    // https://github.com/vitest-dev/vitest/issues/4892#issuecomment-1907879517
    include: ["vitest > @vitest/utils > loupe"],
  },
  test: {
    browser: {
      enabled: true,
      provider: "playwright",
      name: "chromium",
    },
  },
});
