// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

// Website metadata
export const SITE_URL: string = "https://inhumane.nl";
export const SITE_TITLE: string = "Inhumane Run";
export const SITE_DESCRIPTION: string = "De meest extreme obstakel run in Nederland.";

// Repo info
export const REPO: string = "Torqain3/inhumane"; // TODO: Update dynamically
export const DEFAULT_BRANCH: string = "main"; // TODO: Update dynamically

// SEO metadata
export const TWITTER_CREATOR: string = "@inhumaneNL";

// Navigation
type Page = {
	title: string;
	href: string;
	children?: Page[];
};

export const PAGES: Page[] = [
	{
		title: "Home",
		href: "/",
	},
	{
		title: "Blog",
		href: "/blog",
	},
	{
		title: "About",
		href: "/about",
	},
];

// i18n
export const DEFAULT_LOCALE = "nl";
export const LOCALES = {
	nl: "nl", // the `defaultLocale` value must present in `locales` keys
	en: "en",
};

// Hosting
export const HOSTING_SERVICE: "cloudflare" | "netlify" | "none" = "cloudflare";
