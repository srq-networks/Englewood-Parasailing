import { FAREHARBOR, bookingCentral } from "./site";

// The five cards on /boats, in live order. Copy is verbatim from the live site.
export const BOATS = [
	{
		id: "sun-catcher",
		title: "2021 Sun Catcher pontoons with 90hp",
		image: "/images/boats/sun-catcher.webp",
		bullets: ["90hp Yamaha Four Strokes", "Capacity of 11 PPL"],
		rates: [
			"$285+ tax for 4 hrs",
			"$375 + tax for 6 hrs",
			"$435 + tax for 8 hours.",
		],
		href: bookingCentral("4c61a39d-fdb5-45d8-8491-40fa3ef69093"),
		bookLabel: "Click here to Book Now!",
	},
	{
		id: "aloha",
		title: "2020 Aloha pontoon with 90hp",
		image: "/images/boats/aloha.webp",
		bullets: ["90hp Yamaha Four Strokes", "Capacity of 9 PPL"],
		rates: [
			"$285+ tax for 4 hrs",
			"$375 + tax for 6 hrs",
			"$435 + tax for 8 hours.",
		],
		href: bookingCentral("1e587787-f6a9-4337-876d-d705469c64e7"),
		bookLabel: "Click Here to Book Now!",
	},
	{
		id: "scout",
		title: "2019 Scout Center Console with 150hp",
		image: "/images/boats/scout.webp",
		bullets: [
			"150hp Yamaha Four Stroke",
			"Capacity of 6 PPL (4 is most comfortable if all adults)",
		],
		rates: [
			"$299 + tax for 4 hrs",
			"$399 + tax for 6 hrs",
			"$450 + tax for 8 hours.",
		],
		href: bookingCentral("1dd90449-c45b-47c1-9c25-395371944cf0"),
		bookLabel: "Click Here To Book Now",
	},
	{
		id: "bayliner",
		title: "2020 Bayliner deck boat with 175hp",
		image: "/images/boats/bayliner.webp",
		bullets: ["250hp Yamaha Four Stroke", "Capacity of 8 PPL"],
		rates: [
			"$285 + tax for 4 hrs",
			"$375 + tax for 6 hrs",
			"$435 + tax for 8 hours.",
		],
		href: FAREHARBOR.book,
		bookLabel: "Click Here to Book Now!",
	},
	{
		id: "skiff",
		title: "2014 Key West Skiff with 50hp",
		image: "/images/boats/skiff.webp",
		bullets: [
			"50hp Yamaha Four Stroke",
			"Capacity of 6 PPL (4 is most comfortable if all adults)",
		],
		rates: [
			"$199 + tax for 4 hrs",
			"$250 + tax for 6 hrs",
			"$299 + tax for 8 hours.",
		],
		href: FAREHARBOR.book,
		bookLabel: "Click Here to Book Now!",
	},
];

export const GRATUITY_NOTE =
	"NOTE: There is a 15% automatic gratuity charged for boat cleaning and fueling";

function gallery(slug, stems) {
	return stems.map((stem) => ({
		src: `/images/galleries/${slug}/${stem}.webp`,
		thumb: `/images/galleries/${slug}/thumbs/${stem}.webp`,
		caption: stem.toUpperCase(),
	}));
}

// Gallery pages keyed by route slug, images in live order.
export const GALLERIES = {
	aloha: {
		title: "Aloha Pontoon Rental Boats Englewood, FL",
		pageTitle: "Aloha Pontoon Gallery",
		images: gallery("aloha", [
			"img_0413",
			"img_0406",
			"img_0404",
			"img_0430",
			"img_0412",
			"img_0410",
		]),
	},
	"sun-catcher": {
		title: "Sun Catcher Pontoon Rental Boats Englewood, FL",
		pageTitle: "Sun Catcher Pontoon Gallery",
		images: gallery("sun-catcher", [
			"img_0434",
			"img_0438",
			"img_0451",
			"img_0455",
		]),
	},
	scout: {
		title: "Scout Center Console Rental Boat Englewood, FL",
		pageTitle: "Scout Center Console Gallery",
		images: gallery("scout", [
			"img_0403",
			"img_0370-1",
			"img_0373",
			"img_0397",
			"img_0368",
			"img_0367",
		]),
	},
};
