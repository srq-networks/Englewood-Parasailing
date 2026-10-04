import { PARASAILING_URL } from "./site";

// Header menu in live order. `children` renders as a hover dropdown; `external` as a plain <a>.
export const NAV = [
	{ label: "Home", to: "/" },
	{ label: "Booking/Our Rental Boats", to: "/boats" },
	{
		label: "Rental Boat Galleries",
		children: [
			{ label: "Aloha Pontoon Gallery", to: "/galleries/aloha" },
			{ label: "Sun Catcher Pontoon Gallery", to: "/galleries/sun-catcher" },
			{ label: "Scout Center Console Gallery", to: "/galleries/scout" },
		],
	},
	{ label: "FAQs", to: "/faqs" },
	{ label: "Map & Contact Us", to: "/contact" },
	{ label: "Parasailing", href: PARASAILING_URL, external: true },
];
