import { Cloud, SquarePlus } from "lucide-react";

const FREE_FALL =
	'Optional Free Fall where the captain slows down the boat and lets you drift down toward the water, then accelerates to bring you on an "Elevator Ride" back to the top as well as a dip if you like.';

// The three Essential Addons "style-2" pricing cards on /pricing. A feature is a plain
// string or { strong, text, note } (bold lead-in, body, bold price line below).
export const CARDS = [
	{
		id: "deluxe",
		icon: Cloud,
		title: "Deluxe Parasail",
		subtitle: "Our Most Popular",
		price: "$99",
		unit: "/Person",
		ribbon: "Most Popular",
		features: [{ strong: "1200ft Tow Line" }, "14 Minutes in Air", FREE_FALL],
		book: true,
	},
	{
		id: "standard",
		icon: Cloud,
		title: "Standard Flight",
		subtitle: "Affordable For Beginners",
		price: "$89",
		unit: "/Person",
		features: [
			"1000Ft Tow Line",
			"9 Minutes in Air",
			"(This flight is our competitors $99 flight)",
			FREE_FALL,
		],
		book: true,
	},
	{
		id: "extras",
		icon: SquarePlus,
		title: "Extras!",
		subtitle: "More Options",
		price: "Prices Below",
		features: [
			{
				strong: "Observers",
				text: ' - Whenever we have room on the boat, observers are welcome to come along for the ride. Observer seats are often decided on a "stand-by" basis, but if we can, we will make room for you.',
				note: "$35pp / $50 Guaranteed Seating",
			},
			{
				strong: "Photos!",
				text: " We take 50-60 high resolution digital photos of your entire ride and put the images on an SD card that you get to keep. You can instantly load the photos onto Facebook or send via email, etc ...",
				note: "$40 ea",
			},
		],
		book: false,
	},
];
