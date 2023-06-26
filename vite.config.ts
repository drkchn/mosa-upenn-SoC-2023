import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/

export default defineConfig(({ mode }) => {
  return {
    server: {
      port: 4049,
    },
    plugins: [react()],
    esbuild: {
      pure: mode === "production" ? ["console.log"] : [],
    },
    test: {
      environment: "jsdom",
      globals: true,
      setupFiles: "./src/test_setup/setup-tests.ts",
      coverage: {
        reporter: ["text", "json", "html"],
        all: true,
        reportsDirectory: "./test-coverage",
      },
    },
  };
});
