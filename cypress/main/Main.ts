export class Main {
	url: string;

	constructor(url: string) {
		this.url = url;
	}

	goTo(url?: string): void {
		cy.visit(url ? url : this.url);
		cy.viewport(1280, 720);
	}

	getElement(locator: string): Cypress.Chainable<JQuery<HTMLElement>> {
		return cy.get(locator);
	}

	task(
		...taskParam: string[]
	): Cypress.Chainable<unknown> | Cypress.Chainable<string> | undefined {
		const [taskName, ...param] = taskParam;
		cy.log(`Execute task ${taskName}`);
		const task = cy.task(taskName, { ...param });
		if (task) {
			return task;
		}
	}

	getVal(locator: string): Cypress.Chainable {
		return this.getElement(locator).then(($elem) => {
			return $elem.val();
		});
	}

	getText(locator: string): Cypress.Chainable<string> {
		return this.getElement(locator).then(($elem) => {
			return $elem.text();
		});
	}

	getAttr(locator: string, attr: string): Cypress.Chainable<string> {
		return this.getElement(locator).then(function (el) {
			const href = el.attr(attr);
			return href as string;
		});
	}

	getUrl(): Cypress.Chainable<string> {
		return cy.url();
	}

	click(locator: string): Cypress.Chainable<JQuery<HTMLElement>> {
		return this.getElement(locator).click();
	}

	listenAlert() {
		const stub = cy.stub();
		cy.on('window:alert', stub);
		cy.on('window:confirm', stub);
		return stub;
	}

	setValue(locator: string, text: string) {
		this.getElement(locator).type(text);
	}

	clearInput(locator: string) {
		this.getElement(locator).focus().clear();
	}

	selectValue(locator: string, optionOrIndex: string | number) {
		return this.getElement(locator).select(optionOrIndex);
	}

	hover(locator: string): Cypress.Chainable<JQuery<HTMLElement>> {
		return this.getElement(locator).then((el) => {
			return cy.wrap(el).invoke('show');
		});
	}
}
