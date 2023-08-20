import { defineConfig } from "cypress";

export default defineConfig({
  fixturesFolder: "src/tests/cypress/fixtures",
  defaultCommandTimeout: 8000,
  e2e: {
    baseUrl: "https://goingshopping.vercel.app",
    specPattern: "src/tests/cypress/specs/*.spec.ts",
    supportFile: "src/tests/cypress/support/index.ts",
  },
});
