const { defineConfig } = require("cypress");
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor')
const preprocessor = require('@badeball/cypress-cucumber-preprocessor')
const createEsbuildPlugin = require('@badeball/cypress-cucumber-preprocessor/esbuild')

async function setupNodeEvents(on, config) {
  setupNodeEvents
  // implement node event listeners here
  preprocessor.addCucumberPreprocessorPlugin(on, config)
  require('cypress-mochawesome-reporter/plugin')(on);
  on(
    'file:preprocessor',
    createBundler({
      plugins: [ createEsbuildPlugin.default(config) ]
    })
  )
  return config;
}

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    baseUrl: 'https://test.urbanicfarm.com',
    chromeWebSecurity: false,
    hideXHR: true,
    video: false,
    viewportWidth: 1366,
    viewportHeight: 768,
    watchForFileChanges: false,
    setupNodeEvents,
    specPattern:"cypress/e2e/features/**/*.feature"
  },
});
