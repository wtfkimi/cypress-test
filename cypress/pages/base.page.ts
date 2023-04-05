import { Main } from '../main/Main';
import { mainPageSelectors } from '../selectors/main-page.selectors';
import { TBtns } from '../models/main-page.model';

export class BasePage extends Main {
	constructor(url: string) {
		super(url);
	}

	getBtnProperty(locator: TBtns): Cypress.Chainable {
		return this.getElement(mainPageSelectors.btns[locator].css).then(
			function (el) {
				const data = [];
				if (el.text()) {
					data.push(el.text().trim());
				} else {
					data.push(el.val());
				}
				data.push(el.css('background'));
				return data;
			}
		);
	}

	uploadFile(locator: string): void {
		this.task('getFile')?.then((res) => {
			if (typeof res === 'string') {
				this.getElement(locator).selectFile(res);
			}
		});
	}

	getUploadedImg(): Cypress.Chainable<JQuery<HTMLElement>> {
		return this.getElement(
			mainPageSelectors.uploads.imgUploaded.css
		).should('be.visible');
	}

	getInputHideShow(): Cypress.Chainable<JQuery<HTMLElement>> {
		return this.getElement(mainPageSelectors.inputs.inputHideShow.css);
	}

	getDropdownTopElement(): Cypress.Chainable<JQuery<HTMLElement>> {
		return this.getElement(mainPageSelectors.dropdown.topBtn.css);
	}

	getDropdownReloadElement(): Cypress.Chainable<JQuery<HTMLElement>> {
		return this.getElement(mainPageSelectors.dropdown.reload.css);
	}

	getIframeDocument(): Cypress.Chainable<JQuery<HTMLElement>> {
		return this.getElement('#courses-iframe').should('exist');
	}

	getIframeBody(): Cypress.Chainable<JQuery<HTMLElement>> {
		const linkIframe = mainPageSelectors.iframe;
		return this.getIframeDocument().then(function ($iframe) {
			const body = $iframe.contents().find('body');
			return cy.wrap(body).find(linkIframe.linkEn.css);
		});
	}
}
