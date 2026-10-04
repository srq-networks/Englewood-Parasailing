// Business facts and integration IDs, mirrored from the live englewoodrentalboats.com.
export const SITE_NAME = "Englewood Rental Boats";

// Contact
export const PHONE = "9414750733";
export const PHONE_DISPLAY = "941-475-0733";
export const PHONE_HREF = `tel:${PHONE}`;
export const ADDRESS = "1450 Beach Rd. Englewood, FL 34223";
export const HOURS = ["7 Days : 8AM to 6PM", "Weather Permitting"];
// Live icons link to "#"; they render only once a real URL is set here.
export const SOCIALS = { facebook: null, instagram: null };

// Booking. Two systems are mixed exactly as on the live site: the first three boat
// cards link to BookingCentral, every "Book Now" link and the last two cards to FareHarbor.
export const FAREHARBOR = {
	book: "https://fareharbor.com/embeds/book/englewoodrentalboats/?full-items=yes&flow=1159754",
};
const BOOKING_CENTRAL_LOCATION = "900bb4af-ec6b-4ca1-82ba-5bacaf561d16";
export function bookingCentral(productId) {
	return `https://app.bookingcentral.com/book/product/englewoodrentalboats?location=${BOOKING_CENTRAL_LOCATION}&product=${productId}&referer=&clearcart`;
}

// Embeds
export const ELFSIGHT = { weather: "3dabe21e-5375-4b22-8f21-fcaabed8c350" };
export const YOUTUBE = { touch: "Y7YGXD4LXAA" };
export const MAP_EMBED =
	"https://maps.google.com/maps?q=1450%20Beach%20Rd%20Englewood%2C%20FL%2034223&t=m&z=10&output=embed&iwloc=near";

// Links. VITE_PARASAIL_URL lets a demo point at a demo host.
export const PARASAILING_URL =
	import.meta.env.VITE_PARASAIL_URL || "https://englewoodparasailing.com/";
export const DESIGN_CREDIT = {
	name: "Zucker and Zucker",
	href: "https://zuckerandzucker.com",
};
