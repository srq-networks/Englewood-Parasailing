import { FacebookIcon, InstagramIcon } from "./SocialIcons";
import {
	ADDRESS,
	CANCELLATION,
	ELFSIGHT,
	FOOTER_TAGS,
	MAP_EMBED,
	PHONE_DISPLAY,
	PHONE_HREF,
	PHONE_VANITY,
	RENTALS_URL,
	SITE_NAME,
	SOCIALS,
} from "../data/site";
import ElfsightWidget from "./ElfsightWidget";

const SOCIAL_LINKS = [
	{ label: "Facebook", href: SOCIALS.facebook, Icon: FacebookIcon },
	{ label: "Instagram", href: SOCIALS.instagram, Icon: InstagramIcon },
];

function Heading({ children }) {
	return (
		<h3 className="mt-[45px] pb-5 font-display text-[38px] font-medium leading-tight text-white">
			{children}
		</h3>
	);
}

// Logo on the left, 60px white social circles on the right.
export function InfoRow() {
	return (
		<div className="container-x flex flex-wrap items-center justify-between gap-6 pt-[240px] pb-[60px]">
			<img
				src="/images/brand/logo.webp"
				alt={SITE_NAME}
				width="600"
				height="428"
				className="block h-auto w-[200px]"
			/>
			<div className="flex gap-1">
				{SOCIAL_LINKS.map(({ label, href, Icon }) => (
					<a
						key={label}
						href={href}
						target="_blank"
						rel="noopener"
						aria-label={label}
						className="grid size-[60px] place-items-center rounded-full bg-[#fcfcfc] text-black transition-colors hover:text-orange"
					>
						<Icon size={18} />
					</a>
				))}
			</div>
		</div>
	);
}

export function TagsCol() {
	return (
		<div>
			<Heading>Englewood Parasailing</Heading>
			<p className="m-0">{FOOTER_TAGS}</p>
			<hr className="my-0 border-t border-[#808080]" />
			<p className="m-0 mt-1 font-bold">Want to go Boating?</p>
			<a
				href={RENTALS_URL}
				target="_blank"
				rel="noopener"
				className="mt-2 block w-[80%]"
			>
				<img
					src="/images/brand/rentalboats-logo.webp"
					alt="Englewood Rental Boats"
					width="400"
					height="293"
					className="block h-auto w-full"
				/>
			</a>
		</div>
	);
}

export function WeatherCol() {
	return (
		<div>
			<Heading>Our Weather</Heading>
			<ElfsightWidget id={ELFSIGHT.weather} />
		</div>
	);
}

export function ContactCol() {
	return (
		<div id="contact" className="scroll-mt-5">
			<Heading>Contact Info</Heading>
			<p className="m-0 font-bold">
				CALL US
				<br />
				<a href={PHONE_HREF} className="text-white no-underline">
					{PHONE_VANITY}
				</a>
			</p>
			<p className="m-0">
				<strong>ADDRESS</strong>
				<br />
				{ADDRESS.street}, {ADDRESS.city}
			</p>
			<p className="m-0">
				Phone:
				<a href={PHONE_HREF} className="text-white no-underline">
					{PHONE_DISPLAY}
				</a>
			</p>
		</div>
	);
}

export function MapCol() {
	return (
		<div>
			<Heading>Map &amp; Directions</Heading>
			<iframe
				src={MAP_EMBED}
				title={`Map to ${ADDRESS.street}, ${ADDRESS.city}`}
				loading="lazy"
				referrerPolicy="no-referrer-when-downgrade"
				className="mx-auto block h-[275px] w-[90%] border-0"
			/>
		</div>
	);
}

export function Copyright() {
	return (
		<div className="container-x grid gap-x-0 gap-y-1 border-t border-rule py-10 text-[16px] leading-[31px] lg:grid-cols-2">
			<span>CANCELLATION POLICY: {CANCELLATION}</span>
			<span>© Copyright 2023 {SITE_NAME}. All Rights Reserved</span>
			<span className="lg:col-span-2 lg:text-right">
				Site Design by Zucker &amp; Zucker
			</span>
		</div>
	);
}

export default function Footer() {
	return (
		<footer className="relative bg-[url(/images/bg/dji_0051.webp)] bg-[length:100%_100%] bg-top text-[16px] leading-[31px] text-white">
			<div
				aria-hidden="true"
				className="absolute inset-x-0 top-[-1px] h-[218px] bg-[url(/images/theme/footer-wave.webp)] bg-[length:100%_100%]"
			/>
			<div className="relative">
				<InfoRow />
				<div className="container-x">
					<div className="grid border-t border-rule bg-[#007efc]/20 pt-10 md:grid-cols-2 lg:grid-cols-4">
						<div className="px-[15px] pb-[15px]">
							<TagsCol />
						</div>
						<div className="px-[15px] pb-[15px]">
							<WeatherCol />
						</div>
						<div className="px-[15px] pb-[15px]">
							<ContactCol />
						</div>
						<div className="px-[15px] pb-[15px]">
							<MapCol />
						</div>
					</div>
				</div>
				<Copyright />
			</div>
		</footer>
	);
}
