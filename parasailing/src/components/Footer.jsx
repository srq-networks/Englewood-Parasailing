import { FacebookIcon, InstagramIcon } from "./SocialIcons";
import {
	ADDRESS, CANCELLATION, ELFSIGHT, HOURS, MAP_EMBED, MAP_LINK,
	PHONE_DISPLAY, PHONE_HREF, PHONE_VANITY, RENTALS_URL, SEASON_NOTICE, SITE_NAME, SOCIALS,
} from "../data/site";
import ElfsightWidget from "./ElfsightWidget";

const SOCIAL_LINKS = [
	{ label: "Facebook", href: SOCIALS.facebook, Icon: FacebookIcon },
	{ label: "Instagram", href: SOCIALS.instagram, Icon: InstagramIcon },
];

const link = "text-teal-light no-underline hover:text-white";

function Heading({ children }) {
	return <span className="mb-1 font-display text-lg font-bold uppercase text-yellow">{children}</span>;
}

export function BrandCol() {
	return (
		<div className="flex flex-col gap-4">
			<span className="inline-flex self-start rounded-xl bg-white p-3">
				<img src="/images/brand/logo.webp" alt={SITE_NAME} width="600" height="428" className="block h-14 w-auto" />
			</span>
			<p className="m-0 max-w-[34ch] text-sm">
				Parasailing in Englewood, Florida — single, tandem and triple flights to 1,200 ft with the area's best-rated crew.
			</p>
			<div className="flex gap-2.5">
				{SOCIAL_LINKS.map(({ label, href, Icon }) => (
					<a
						key={label}
						href={href}
						target="_blank"
						rel="noopener"
						aria-label={label}
						className="grid size-10 place-items-center rounded-lg border-2 border-white/20 text-teal-light transition-colors hover:border-teal-light hover:text-white"
					>
						<Icon size={18} />
					</a>
				))}
			</div>
		</div>
	);
}

export function ContactCol() {
	return (
		<div className="flex flex-col gap-2.5 text-sm">
			<Heading>Contact info</Heading>
			<span className="font-bold text-white">
				Call us
				<br />
				<a href={PHONE_HREF} className="font-display text-2xl text-yellow no-underline hover:text-yellow-light">{PHONE_VANITY}</a>
			</span>
			<span>
				{ADDRESS.street}
				<br />
				{ADDRESS.city}
			</span>
			<span>
				Phone: <a href={PHONE_HREF} className={link}>{PHONE_DISPLAY}</a>
			</span>
		</div>
	);
}

export function HoursCol() {
	return (
		<div className="flex flex-col gap-2.5 text-sm">
			<Heading>Hours &amp; directions</Heading>
			<span>{HOURS}</span>
			<span>{SEASON_NOTICE}</span>
			<iframe
				src={MAP_EMBED}
				title="Map to 1450 Beach Road, Englewood"
				loading="lazy"
				referrerPolicy="no-referrer-when-downgrade"
				className="h-40 w-full rounded-lg border-2 border-white/20"
			/>
			<a href={MAP_LINK} target="_blank" rel="noopener" className={`text-[13px] font-bold uppercase tracking-[0.04em] ${link}`}>
				Map &amp; directions
			</a>
		</div>
	);
}

export function WeatherCol() {
	return (
		<div className="flex flex-col gap-2.5 text-sm">
			<Heading>Our weather</Heading>
			<ElfsightWidget id={ELFSIGHT.weather} />
		</div>
	);
}

export function RentalsCol() {
	return (
		<div className="flex flex-col gap-3 text-sm">
			<Heading>Want to go boating?</Heading>
			<a href={RENTALS_URL} className="inline-flex self-start rounded-xl bg-white p-3.5">
				<img src="/images/brand/rentalboats-logo.webp" alt="Englewood Rental Boats" width="400" height="293" className="block w-[150px]" />
			</a>
		</div>
	);
}

export default function Footer() {
	return (
		<footer className="bg-deep pt-14 pb-7 text-white/75">
			<div className="container-x grid grid-cols-[repeat(auto-fit,minmax(min(100%,220px),1fr))] gap-9">
				<BrandCol />
				<ContactCol />
				<HoursCol />
				<WeatherCol />
				<RentalsCol />
			</div>
			<div className="container-x mt-10 flex flex-wrap justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/50">
				<span>© {new Date().getFullYear()} {SITE_NAME}. All rights reserved.</span>
				<span>Cancellation policy: {CANCELLATION}</span>
			</div>
		</footer>
	);
}
