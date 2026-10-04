// /pics gallery in the old site's order. Full images in public/images/pics/, 500px
// thumbnails in public/images/pics/thumbs/.
const pic = (name, alt) => ({
	src: `/images/pics/${name}.webp`,
	thumb: `/images/pics/thumbs/${name}.webp`,
	alt,
});

export const GALLERY = [
	pic("new-parasail-1g", "Riders under the Englewood Parasailing canopy"),
	pic("2019-08-02", "Parasail canopy over the Gulf"),
	pic("2019-06-25-04-25-49", "Tandem flight lifting off the back deck"),
	pic("2019-06-25-04-44-19-3", "Parasailers high above the water"),
	pic("img_7328", "Englewood Beach from the parasail"),
	pic("img_7838", "Parasail canopy against a blue sky"),
	pic("img_7836", "Drone view of the parasail boat"),
	pic("img_7390", "Manasota Key shoreline from above"),
	pic("dji_0050", "Aerial view of the parasail boat off Englewood"),
	pic("ep1", "Parasailers over turquoise water"),
	pic("ep4", "Canopy and boat seen from the drone"),
	pic("dji_0063", "Parasail flight along the beach"),
	pic(
		"englewood-parasailing-video-still",
		"Guests on the boat before a flight",
	),
	pic("img_0019", "Parasail canopy over the Gulf of Mexico"),
	pic("dji_0043", "Boat towing the parasail, seen from above"),
	pic("dji_0048", "Parasail flight at Englewood Beach"),
];

// The three photos on the home-page gallery teaser.
export const TEASER = [
	{ src: "/images/home/img_0019.webp", alt: "Three riders flying together" },
	{ src: "/images/home/img_7836.webp", alt: "Parasail canopy over the Gulf" },
	{ src: "/images/home/img_7337.webp", alt: "Englewood Beach from 1,200 feet" },
];
