// Fleet, rates and categories as listed on englewoodrentalboats.com (boat-rental-englewood-fl).
// Rates are per rental, before tax. Photos: the skiff and the Bayliner reuse pontoon shots
// until real ones land in assets-raw/rb.
export const BOATS = [
	{
		id: "suncatcher-22",
		name: "22' Sun Catcher Pontoon",
		year: 2021,
		category: "pontoon",
		engine: "90hp Yamaha 4-Stroke",
		capacity: 11,
		bestFor: "Large Families, Sandbars & Shelling",
		blurb: "Spacious lounge seating, heavy-duty bimini shade, and swimming ladder. Nose right up to the sandbar.",
		rates: { fourHour: 285, sixHour: 375, eightHour: 435 },
		img: "/images/fleet/suncatcher.webp",
	},
	{
		id: "aloha-20",
		name: "20' Aloha Pontoon",
		year: 2020,
		category: "pontoon",
		engine: "90hp Yamaha 4-Stroke",
		capacity: 9,
		bestFor: "Sandbar Hopping & Casual Cruising",
		blurb: "Comfortable couches, easy boarding, and plenty of cooler space for a day at Stump Pass.",
		rates: { fourHour: 285, sixHour: 375, eightHour: 435 },
		img: "/images/fleet/aloha.webp",
	},
	{
		id: "bayliner-deck",
		name: "20' Bayliner Deck Boat",
		year: 2020,
		category: "deck",
		engine: "250hp Yamaha 4-Stroke",
		capacity: 8,
		bestFor: "Speed, Watersports & Open Water",
		blurb: "Combines the spacious deck of a pontoon with the speed and hull performance of a runabout.",
		rates: { fourHour: 285, sixHour: 375, eightHour: 435 },
		img: "/images/fleet/family.webp",
	},
	{
		id: "scout-19",
		name: "19' Scout Center Console",
		year: 2019,
		category: "console",
		engine: "150hp Yamaha 4-Stroke",
		capacity: 6,
		capacityNote: "4 adults recommended",
		bestFor: "Inshore Fishing & Gulf Exploration",
		blurb: "Built for speed, rod holders, livewell, and handling open water chop. Ideal for serious anglers.",
		rates: { fourHour: 299, sixHour: 399, eightHour: 450 },
		img: "/images/fleet/scout.webp",
	},
	{
		id: "keywest-skiff",
		name: "17' Key West Skiff",
		year: 2014,
		category: "skiff",
		engine: "50hp Yamaha 4-Stroke",
		capacity: 6,
		capacityNote: "4 adults recommended",
		bestFor: "Backcountry Fishing & Shallow Bays",
		blurb: "Nimble, shallow-draft skiff to explore backcountry mangroves and secluded fishing honey-holes.",
		rates: { fourHour: 199, sixHour: 250, eightHour: 299 },
		img: "/images/fleet/aloha.webp",
	},
];

export const CATEGORY_LABELS = { pontoon: "Pontoon", deck: "Deck boat", console: "Center console", skiff: "Skiff" };

// Fleet filter tabs. Grouping follows the old site: pontoons + skiffs vs. consoles + deck boats.
export const CATEGORIES = [
	{ id: "all", label: "All Boats", types: ["pontoon", "skiff", "deck", "console"] },
	{ id: "leisure", label: "Pontoons & Leisure", types: ["pontoon", "skiff"] },
	{ id: "fishing", label: "Center Consoles & Fishing", types: ["console", "deck"] },
];

export const DURATIONS = [
	{ id: "fourHour", label: "4 hours", short: "4 hrs" },
	{ id: "sixHour", label: "6 hours", short: "6 hrs" },
	{ id: "eightHour", label: "Full day (8h)", short: "Full day" },
];

export const PRICING_NOTE = "Rates exclude tax. 15% automatic gratuity applies for dockside boat cleaning and fueling.";
