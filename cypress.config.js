const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
    },
    specPattern: "**/sauceDemo.cy.js", 
    supportFile: false 
  },
});
