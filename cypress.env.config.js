const { defineConfig } = require("cypress");

module.exports = defineConfig({
  retries: 2,
  viewportHeight: 800,
  viewportWidth: 600,
  
  scripts: {
    
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://localhost:3000',
    specPattern : 'cypress/e2e/**/*.spec.{js,jsx,ts,tsx}',
  },
});
