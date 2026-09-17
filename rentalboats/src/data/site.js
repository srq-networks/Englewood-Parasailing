// Business facts. NOTE: hours, "no license needed" and the fleet come from the design
// mock — verify against the live englewoodrentalboats.com before this goes to the client.
export const SITE_NAME = "Englewood Rental Boats";
export const PHONE = "9414750733";
export const PHONE_DISPLAY = "941-475-0733";
export const PHONE_HREF = `tel:${PHONE}`;
export const ADDRESS = { street: "1450 Beach Road", city: "Englewood, FL 34223" };
export const HOURS = "7 days · 8 am – 6 pm";
export const HOURS_NOTE = "Weather permitting";

// Sister business. VITE_PARASAIL_URL lets the demo point at a demo host.
export const PARASAIL_URL = import.meta.env.VITE_PARASAIL_URL || "https://englewoodparasailing.com/";

// Where the booking form POSTs. Empty = demo mode (see BookForm.jsx).
export const LEAD_ENDPOINT = import.meta.env.VITE_LEAD_ENDPOINT || "";
