import { BasePage } from '../../pages/base.page';
import { mainPageSelectors } from '../../selectors/main-page.selectors';
import {
	TBtns,
	TBtnsArray,
	TLink,
	TLinkArray,
} from '../../models/main-page.model';
const url = '../../task.html';

describe('Suite practice page', () => {
	const basePage = new BasePage(url);

	beforeEach(() => {
		cy.visit('/');
		cy.fixture('main-data.json', 'utf-8').then(function (data) {
			this.data = data;
		});
	});

	it('Check the alert-text.txt file and use its contents as the text to invoke the alert ', function () {
		// basePage.goTo();
		const alertTextFromFile = this.data.alertTextFromFile;
		const inputs = mainPageSelectors.inputs;
		const btns = mainPageSelectors.btns;
		const stub = basePage.listenAlert();
		basePage.task('readFile')?.then((text) => {
			if (typeof text === 'string') {
				basePage.setValue(inputs.inputName.css, text);
			} else {
				throw new Error(`Can't read file. Result is: ${text}`);
			}
		});
		basePage.click(btns.alertBtn.css).then(function () {
			expect(stub.getCall(0).lastArg).to.be.eql(alertTextFromFile);
		});
	});

	it('Check hover section/iframe and social-media', function () {
		// basePage.goTo();
		const topAttribute = this.data.topAttribute;
		const reload = this.data.reload;
		const socialMediaLinks = this.data.socialMediaLinks;
		//hover
		const btns = mainPageSelectors.btns;
		basePage.hover(btns.hoverBtn.css);
		basePage
			.getDropdownTopElement()
			.click({ force: true })
			.then(function (el) {
				expect(el.attr('href')).to.be.eql(topAttribute);
			});
		//iframe
		basePage.getIframeBody().then((el) => {
			expect(el.attr('class')).to.be.eql('current');
		});
		//footer
		const linkLoc = mainPageSelectors.footer;
		const links: TLinkArray = Object.keys(mainPageSelectors.footer);
		links.forEach(function (el: TLink) {
			basePage.getAttr(linkLoc[el].css, 'href').then(function (href) {
				expect(href).to.be.eql(socialMediaLinks[el]);
			});
		});
	});

	it('Check dropdown/Upload and section show/hide', function () {
		// basePage.goTo();
		const myName = this.data.myName;
		const options: string[] = this.data.options;
		//Dropdown
		const selectLocator = mainPageSelectors.selects.selectOption.css;
		options.forEach(function (el) {
			basePage.selectValue(selectLocator, el).then(function (elem) {
				const optionsInDropDown = elem
					.text()
					.trim()
					.split('\t')
					.filter((em) => em.trim().includes('Option'))
					.map((elm) => elm.trim());
				const expectedEl =
					optionsInDropDown[optionsInDropDown.indexOf(el)];
				const optionName = elem.text().trim();
				expect(optionName).contains(expectedEl);
			});
		});
		//Upload
		basePage.uploadFile(mainPageSelectors.uploads.uploadBtn.css);
		basePage.getUploadedImg().then(function (el) {
			expect(el.attr('src')).to.not.equal(null);
		});
		//ShowHide
		const inputsLoc = mainPageSelectors.inputs;
		const btnsLoc = mainPageSelectors.btns;
		basePage.setValue(inputsLoc.inputHideShow.css, myName);
		basePage.click(btnsLoc.hideBtn.css);
		basePage.getInputHideShow().should('not.be.visible');
		basePage.click(btnsLoc.showBtn.css);
		basePage.getVal(inputsLoc.inputHideShow.css).then((el: string) => {
			expect(el).to.be.eql(myName);
		});
	});

	it('Check btns behaviour: Home/Open tab and section Invoke an Alert/confirmation modal', function () {
		// basePage.goTo();
		const href = this.data.href;
		const blanC = this.data._blanc;
		const alertText = this.data.alertText;
		const myName = this.data.myName;
		const alertTextWithName = this.data.alertTextWithName;
		const alertTextConfirm = this.data.alertTextConfirm;

		//homebtn
		basePage
			.getAttr(
				mainPageSelectors.btns.homeBtn.css.replace(' button', ''),
				'href'
			)
			.then((el) => {
				expect(el).to.be.eql(href);
			});

		//openTab
		basePage
			.getAttr(mainPageSelectors.btns.openTabBtn.css, 'target')
			.then(function (blank) {
				expect(blank).to.be.eql(blanC);
			});

		//section invoke Alert
		const stub = basePage.listenAlert();
		const btns: TBtnsArray = Object.keys(mainPageSelectors.btns);
		const inputsLoc = mainPageSelectors.inputs;
		const btnsLoc = mainPageSelectors.btns;

		btns.forEach(function (el: TBtns) {
			if (el === 'alertBtn' || el === 'confirmBtn') {
				basePage.click(btnsLoc[el].css).then(function () {
					expect(stub.getCall(0).lastArg).to.be.eql(alertText);
				});
				basePage.setValue(inputsLoc.inputName.css, myName);
				basePage.click(btnsLoc[el].css).then(function () {
					expect(stub.lastCall.lastArg).to.be.eql(
						el === 'alertBtn' ? alertTextWithName : alertTextConfirm
					);
				});
			}
		});
	});

	it('Check that all btns have correct background-color and correct text', function () {
		// basePage.goTo();
		const btns = this.data.btn;
		const bg = this.data.backgroundColor;
		const locators: TBtnsArray = Object.keys(mainPageSelectors.btns);
		let counter = 0;

		btns.forEach(function (element: any) {
			basePage
				.getBtnProperty(locators[counter])
				.then(function (property: JQuery<any>) {
					expect(property[0]).to.be.eql(element);
					expect(property[1]).contains(bg);
				});
			counter++;
		});
	});
});
