import { defineConfig } from 'cypress';
import allureWriter from '@shelex/cypress-allure-plugin/writer';
import * as fs from 'fs';
import * as path from 'path';

const filePath = path.join(__dirname, 'cypress', 'data', 'alert-text.txt');

export const filePathNew = path.join(
	__dirname,
	'cypress',
	'data',
	'cypress.png'
);

function returnPathImg() {
	return new Promise((res) => {
		res(filePathNew);
	});
}

function readFile() {
	return new Promise((res) => {
		const data = fs.readFileSync(filePath);
		if (data) {
			res(data.toString());
		}
	});
}

export default defineConfig({
	video: false,
	screenshotOnRunFailure: true,
	e2e: {
		// We've imported your old cypress plugins here.
		// You may want to clean this up later by importing these.
		setupNodeEvents(on, config) {
			on('task', {
				readFile: readFile,
				getFile: returnPathImg,
			});
			allureWriter(on, config);
			return require('./cypress/plugins/index.js')(on, config);
		},
		baseUrl: 'http://localhost:3000/',
		watchForFileChanges: false,
		chromeWebSecurity: false, //access to iframe
	},
});
