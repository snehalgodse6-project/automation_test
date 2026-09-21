// @ts-check
import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config =({
  testDir: './tests',
  timeout: 15000, //setting time for await else by default its 30 second
  //reporter: 'html',
  reporter:[ ['list'],['allure-playwright', { outputFolder: 'allure-results' }],['html',{open:'never'}]],
  expect:{timeout:10_000},
  /* Run tests in files in parallel */
  //fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  //forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  //retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  //workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  //reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('')`. */
    // baseURL: 'http://localhost:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    //trace: 'on-first-retry',
    browserName: 'chromium',
    headless:false,
    launchOptions: {
      slowMo: 2000
    },
    trace: 'on',
    screenshot: 'only-on-failure',

  },

  /* Configure projects for major browsers */
 /*  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    }, */

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  //],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
module.exports = config;
// Command for using in playwright test execution
//npm install -D allure-playwright ///to install allure playwright reporter  
//npx playwright test testlogin.spec.js ///to run the file
//npx playwright show-report  // to show the report in browser
//npx playwright test testlogin.spec.js --debug ///to run the file in debug mode
//npx playwright test testlogin.spec.js --trace on // to trace the test execution
//npm install -g allure-commandline // to install allure command line globally
//allure open allure-report // open the report in browser
//  allure generate allure-results -o allure-report --clean // to generate the report in allure-report folder(if u want to create report for new file then remove allure report and allure result file)
// Vault /hashicorp vault using login data or credential details or like env file