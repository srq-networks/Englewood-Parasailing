export const FLIGHTS = [
	{
		id: "standard",
		name: "Standard",
		price: 89,
		tagline: "The classic flight — great for first-timers",
		height: 1000,
		minutes: 9,
		bullets: ["Great affordable flight for beginners", "Dry deck takeoff and landing", "Fly single, tandem or triple"],
		note: "This flight is our competitors' $99 flight.",
		badge: null,
		featured: false,
	},
	{
		id: "bigair",
		name: "Big Air",
		price: 99,
		tagline: "Deluxe flight to the FAA maximum height",
		height: 1200,
		minutes: 14,
		bullets: ["FAA maximum height — nobody flies higher", "Optional ocean toe-dip on the way down", "Extra airtime for photos and dolphin spotting"],
		note: "Deluxe flight to the FAA maximum height.",
		badge: "Most popular · Extra airtime",
		featured: true,
	},
];

export const TOGETHER = "Up to 3 fly together — single, tandem or triple";

export const FREE_FALL =
	"Optional free fall: the captain slows the boat and lets you drift down toward the water, then accelerates to bring you on an \"elevator ride\" back to the top — with a dip if you like.";

// `short` is the one-line version shown next to the pricing cards.
export const EXTRAS = [
	{
		name: "Observers",
		price: "$35 · $50",
		priceNote: "$35 standby · $50 guaranteed seat",
		short: "Ride along and watch!",
		text: "Whenever we have room on the boat, observers are welcome to come along for the ride. Observer seats are often decided on a stand-by basis, but if we can, we will make room for you.",
	},
	{
		name: "Photo pack",
		price: "$40",
		priceNote: "per SD card",
		short: "50–60 pro shots of your whole flight",
		text: "We take 50–60 high-resolution digital photos of your entire ride and put them on an SD card you keep. Load them straight onto Facebook, email them — whatever you like.",
	},
];
