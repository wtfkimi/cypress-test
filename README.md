# cypress-typescript-framework

Cypress TypeScript framework

## Structure of project

Tests -> e2e/tests folder

Plugins -> cy-ts-preprocessor.js - for TypeScript compiling.

EsLint -format and lint the code.

Cypress/data - data for tests(such as .txt, .png).

Fixtures - some .json file for expect and etc..

Main - Main file.

Models - Additional typing.

Pages - Pages structure.

Selectors - Selectors of elements.

Support - Additional global configuration.

## Scripts

The framework using following scripts:

`npm run lint` - This script formats your code using eslint && prettier.

`npm run build` - Build project(for running tests local not necessary).

`npm run chrome-run` - This runs your Cypress tests in a headless state with allure report generate.

`npm run chrome-run-headed` - This runs your Cypress tests in a headed state with allure report generate.

`npm run open:cypress` - Command open Cypress GUI, just select test for run.

`npm run allure:clear` - Clear trash of allure result/allure-report.

`npm run allure:report` - Generate allure report.

`npm run allure:open` - Open allure result.

`npm run start-server` - Start server for testing.

## Requirements

`node version: 14.17.5`

`java: "1.8.0_291`

## How to RUN

Firstly download project:

`git clone https://github.com/wtfkimi/cypress-test.git`

Then install dependencies:

`npm install`

Then run server:

`node index.js`

Then run tests:

`npm run chrome-run-headed`

Then generate allure result:

`npm run allure:report`

Then install globally allure-commandline:

`npm install -G allure-commandline`

Then open allure result: 

`npm run allure:open`

## Additional information

Contact me directly via telegram if some problem occur: https://t.me/satoshinakomote
