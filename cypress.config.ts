import { defineConfig } from "cypress";

export default defineConfig({
  downloadsFolder: "/cypress/downloads",
  fixturesFolder: "/cypress/fixtures",
  reporter: "mochawesome",
  reporterOptions: {
    overwrite: false,
    html: false,
    json: true,
    reportDir: "/cypress/reports/json",
  },
  screenshotsFolder: "/cypress/screenshots",
  chromeWebSecurity: false,
  defaultCommandTimeout: 8000,
  video: true,
  videosFolder: "/cypress/videos",
  e2e: {
    baseUrl: "https://goingshopping.vercel.app",
    specPattern: "src/tests/cypress/specs/*.spec.ts",
    supportFile: "src/tests/cypress/support/index.ts",
  },
});
