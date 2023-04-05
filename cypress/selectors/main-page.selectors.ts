export const mainPageSelectors = {
	btns: {
		homeBtn: {
			css: 'a[href="https://easygenerator.com/"]:last-child button',
		},

		openTabBtn: {
			css: 'button[id="opentab"]',
		},

		alertBtn: {
			css: 'input[id="alertbtn"]',
		},

		confirmBtn: {
			css: 'input[id="confirmbtn"]',
		},

		hideBtn: {
			css: 'input[id="hide-textbox"]',
		},

		showBtn: {
			css: 'input[id="show-textbox"]',
		},

		hoverBtn: {
			css: 'div[class="hover-container"] button',
		},
	},

	inputs: {
		inputName: {
			css: 'input[name="enter-name"]',
		},

		inputHideShow: {
			css: 'input[name="show-hide"]',
		},
	},

	selects: {
		selectOption: {
			css: 'select[id="dropdown-class-example"]',
		},
	},

	uploads: {
		uploadBtn: {
			css: 'input[type="file"]:last-child',
		},
		imgUploaded: {
			css: 'div[class="image-upload-wrapper"] img',
		},
	},

	dropdown: {
		topBtn: {
			css: 'a[href="#top"]',
		},
		reload: {
			css: 'div[class="hover-content"] a:last-child',
		},
	},

	iframe: {
		iframeMain: {
			css: 'iframe[id="courses-iframe"]',
		},
		linkEn: {
			css: 'div[class="select-menu"] a[class="current"]',
		},
	},
	footer: {
		facebookLink: {
			css: 'li[class="gf-li"] a[href="https://www.facebook.com/easygenerator/"]',
		},

		twitterLink: {
			css: 'li[class="gf-li"] a[href="https://twitter.com/easygenerator"]',
		},

		youTubeLink: {
			css: 'li[class="gf-li"] a[href="https://www.youtube.com/user/easygenerator"]',
		},
	},
};
