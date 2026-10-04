// Business facts used across the site. If one changes, change it here.
export const SITE_NAME = "Englewood Parasailing";
export const PHONE = "8333591200";
export const PHONE_DISPLAY = "833-359-1200";
export const PHONE_VANITY = "833-FLY-1200";
export const PHONE_HREF = `tel:${PHONE}`;
export const ADDRESS = {
	street: "1450 Beach Road",
	city: "Englewood, FL 34223",
};
export const HOURS = "Daily 8:00 am – 5:30 pm";
export const CANCELLATION =
	"Reservations must be cancelled 24 hours before booking date/time or will be charged full price.";

// Home-page counters (Elementor counter widgets: from → to over 2 s).
export const SAFETY_YEARS = { from: 15, to: 28 };
export const PRICE_COUNTER = { from: 99, to: 89 };

// Footer "Englewood Parasailing" column, verbatim from the old site.
export const FOOTER_TAGS =
	"TAGS: Parasailing in Englewood, Englewood, Florida parasail adventures, parasail flights, tandem parasail flights, Florida parasail flights, parasail 1200ft, best parasail company";

export const SOCIALS = {
	facebook:
		"https://www.facebook.com/pages/Englewood-Parasailing-Tours/1641315582832147",
	instagram: "https://www.instagram.com/englewoodparasailingtours/",
	hashtag: "#englewoodparasailingtours",
};

// Facebook Page Plugin (replaces the old site's "facebook feed here" placeholder).
export const FACEBOOK_PLUGIN = `https://www.facebook.com/plugins/page.php?href=${encodeURIComponent(SOCIALS.facebook)}&tabs=timeline&width=500&height=600&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true`;

// YouTube videos embedded on the Parasailing page.
export const YOUTUBE = {
	hero: "NmvqzDlRUOU",
	popup: "3S3PsEaZYCY",
	howItWorks: "hX3cpL_nalI",
};

// FareHarbor is the real booking system. Links to fareharbor.com open in a lightbox
// via the autolightframe script in index.html.
export const FAREHARBOR = {
	book: "https://fareharbor.com/embeds/book/englewoodparasailing/?full-items=yes",
	calendar:
		"https://fareharbor.com/embeds/calendar/englewoodparasailing/?fallback=simple&full-items=yes",
};

// Elfsight widget IDs carried over from the previous site (platform.js is in index.html).
export const ELFSIGHT = {
	reviews: "08888243-fb04-4dcf-886f-86e04d280980",
	weather: "3dabe21e-5375-4b22-8f21-fcaabed8c350",
	instagram: "5dd88482-747e-4a6c-9944-a1f047e67252",
};

export const MAP_LINK =
	"https://maps.google.com/?q=1450+Beach+Road+Englewood+FL+34223";
export const MAP_EMBED =
	"https://maps.google.com/maps?q=1450+Beach+Road,+Englewood,+FL+34223&z=15&output=embed";

// Sister business. VITE_RENTALS_URL lets the demo point at a demo host.
export const RENTALS_URL =
	import.meta.env.VITE_RENTALS_URL || "https://englewoodrentalboats.com/";

// Where the contact form POSTs. Empty = demo mode (see ContactForm.jsx).
export const LEAD_ENDPOINT = import.meta.env.VITE_LEAD_ENDPOINT || "";
