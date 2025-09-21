import { en_US as localeData } from './strings'

const sidebar_common = {
	text: localeData.other,
	items: [
		{ text: localeData.pages["contribute"], link: `/contribute` },
		{ text: localeData.pages["credits"], link: `/credits` },
		{ text: localeData.pages["privacy-policy"], link: `/privacy-policy` },
		{ text: localeData.pages["site-navigation"], link: `/site-navigation` }
	]
}

const themeConfig = {
	langMenuLabel: localeData.langMenuLabel,
	darkModeSwitchLabel: localeData.darkModeSwitchLabel,
	darkModeSwitchTitle: localeData.darkModeSwitchTitle,
	lightModeSwitchTitle: localeData.lightModeSwitchTitle,
	sidebarMenuLabel: localeData.sidebarMenuLabel,
	returnToTopLabel: localeData.returnToTopLabel,

	nav: [
		{ text: localeData.pages["faq"], link: `/faq` },
		{ text: localeData.pages["troubleshooting"], link: `/troubleshooting` }
	],
	sidebar: {
		[`/installing-eventhorizon`]: [
			{
				text: localeData.guide,
				items: [
					{ text: localeData.pages["key-information"], link: `/key-information` },
					{ text: localeData.pages["get-started"], link: `/get-started` },
					{ text: localeData.pages["installing-eventhorizon"], link: `/installing-eventhorizon` },
					{ text: localeData.pages["finalizing-setup"], link: `/finalizing-setup` }
				]
			},
			sidebar_common
		],
		/*
		 	The `/` path needs to be at the bottom as a catch all! If it is placed anywhere above,
			it will select the first matching one and not parse the rest!
		*/
		[`/`]: [
			{
				text: localeData.guide,
				items: [
					{ text: localeData.pages["key-information"], link: `/key-information` },
					{ text: localeData.pages["get-started"], link: `/get-started` },
					{ text: localeData.pages["installing-eventhorizon"], link: `/installing-eventhorizon` },
					{ text: localeData.pages["finalizing-setup"], link: `/finalizing-setup` }
				]
			},
			sidebar_common
		],
	},
	footer: {
		copyright: 'Copyright © 2025 Henry1887',
		items: [
			{ text: localeData.pages["credits"], link: `/credits` },
			{ text: localeData.pages["privacy-policy"], link: `/privacy-policy` },
			{ text: localeData.pages["site-navigation"], link: `/site-navigation` }
		]
	}
};

export default {
	lang: "en",
	label: "English",
    title: localeData.title,
    description: localeData.description,
    themeConfig: themeConfig
}
