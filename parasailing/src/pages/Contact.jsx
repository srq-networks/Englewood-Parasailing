import { Clock, MapPin, Phone, Ticket } from "lucide-react";
import usePageMeta from "../hooks/usePageMeta";
import {
	ADDRESS,
	HOURS,
	MAP_EMBED,
	PHONE_DISPLAY,
	PHONE_HREF,
	PHONE_VANITY,
} from "../data/site";
import BookButton from "../components/BookButton";
import ContactForm from "../components/ContactForm";

const CARDS = [
	{
		Icon: MapPin,
		title: "Visit Us",
		body: (
			<>
				{ADDRESS.street},
				<br />
				{ADDRESS.city}
			</>
		),
	},
	{
		Icon: Phone,
		title: "Call Us",
		body: (
			<>
				<a href={PHONE_HREF} className="text-inherit no-underline">
					{PHONE_VANITY}
				</a>
				<br />
				<a href={PHONE_HREF} className="text-inherit no-underline">
					{PHONE_DISPLAY}
				</a>
			</>
		),
	},
	{
		Icon: Ticket,
		title: "Book Online",
		body: (
			<BookButton className="text-royal underline">
				Reserve your flight
			</BookButton>
		),
	},
	{ Icon: Clock, title: "Opening hours", body: HOURS },
];

export function Intro() {
	return (
		<div className="grid gap-8 md:grid-cols-[45%_1fr] md:gap-16">
			<div>
				<p className="kicker m-0">If You Have Any Questions</p>
				<h1 className="m-0 mt-2.5 font-display text-[45px] font-bold leading-none text-black md:text-[63px]">
					Feel Free to Get in Touch With Us
				</h1>
			</div>
			<p className="m-0 text-[15px] leading-7 text-muted md:pt-8">
				Questions about a flight, a group or the weather? Call us, stop by the
				dock, or send us a message below.
			</p>
		</div>
	);
}

export function Cards() {
	return (
		<div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
			{CARDS.map(({ Icon, title, body }) => (
				<div
					key={title}
					className="flex flex-col items-center bg-white px-5 py-10 text-center shadow-[0_0_25px_rgba(0,0,0,0.08)]"
				>
					<Icon
						size={60}
						strokeWidth={1}
						className="text-ink"
						aria-hidden="true"
					/>
					<h3 className="m-0 mt-6 mb-2.5 font-display text-[28px] font-medium leading-tight text-ink-2">
						{title}
					</h3>
					<p className="m-0 text-[14px] leading-6 text-muted">{body}</p>
				</div>
			))}
		</div>
	);
}

export default function Contact() {
	usePageMeta({
		title: "Contact – Englewood Parasailing",
		description:
			"Get in touch with Englewood Parasailing: 1450 Beach Road, Englewood, FL 34223. Call 833-FLY-1200 or send us a message.",
	});
	return (
		<>
			<section className="container-x pt-[60px] pb-[60px]">
				<Intro />
				<Cards />
			</section>
			<iframe
				src={MAP_EMBED}
				title={`Map to ${ADDRESS.street}, ${ADDRESS.city}`}
				loading="lazy"
				referrerPolicy="no-referrer-when-downgrade"
				className="block h-[500px] w-full border-0"
			/>
			<section className="container-x pt-[60px] pb-[80px]">
				<div className="mx-auto max-w-[640px]">
					<ContactForm />
				</div>
			</section>
		</>
	);
}
