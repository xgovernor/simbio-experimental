import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import tsConfigPath from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [react(), tsConfigPath()],
  mode: "test",
  test: {
    environment: "jsdom",
  },
});
