import { RENTALS_URL } from "./site";

// Header menu in live order. `to` = internal route (Link/NavLink), `href` = external,
// `children` = hover dropdown.
export const NAV = [
	{ label: "Home", to: "/" },
	{ label: "Parasailing", to: "/parasailing" },
	{ label: "Pricing", to: "/pricing" },
	{ label: "Contact", to: "/#contact" },
	{
		label: "More",
		children: [
			{ label: "Our Reviews", to: "/reviews" },
			{ label: "Pics", to: "/pics" },
			{ label: "Get Social", to: "/social" },
		],
	},
	{ label: "Boat Rentals", href: RENTALS_URL },
];
