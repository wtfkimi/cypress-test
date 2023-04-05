export interface IButton {
	title: string;
	backgroundColor: string;
}

export type TBtns =
	| 'homeBtn'
	| 'openTabBtn'
	| 'alertBtn'
	| 'confirmBtn'
	| 'hideBtn'
	| 'showBtn'
	| 'hoverBtn';
export type TBtnsArray = [...TBtns];
export type TLink = 'facebookLink' | 'twitterLink' | 'youTubeLink';
export type TLinkArray = [...TLink];
