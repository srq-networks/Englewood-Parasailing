import { Link } from "react-router-dom";
import { Anchor, ShieldCheck, Users, Wind } from "lucide-react";
import usePageMeta from "../hooks/usePageMeta";
import { PHONE_HREF, PHONE_VANITY } from "../data/site";
import BookButton from "../components/BookButton";

const BOAT_FACTS = [
	{ Icon: Anchor, text: "2023 Ocean Pro parasail boat, built solely for parasailing" },
	{ Icon: Users, text: "Up to 12 people on board; up to 3 fly together" },
	{ Icon: Wind, text: "Kevlar towline on a winch — soft, controlled takeoff and landing" },
	{ Icon: ShieldCheck, text: "USCG Master licensed captains with years of experience" },
];

export function Header() {
	return (
		<div className="relative grid grid-cols-[repeat(auto-fit,minmax(min(100%,380px),1fr))] items-center gap-x-[clamp(28px,5vw,72px)] gap-y-8">
			<div className="flex flex-col gap-5">
				<span className="eyebrow">Englewood's #1 parasail company</span>
				<h1 className="m-0 text-[clamp(40px,5.4vw,74px)] leading-none">Parasailing</h1>
				<p className="m-0 max-w-[48ch] text-lg text-ink-2">
					Parasailing with Englewood Parasailing will be the <strong className="text-navy">highlight</strong> of your trip.
				</p>
				<div className="flex flex-wrap gap-3">
					<BookButton>Book now</BookButton>
					<a href={PHONE_HREF} className="btn btn-secondary"><span>{PHONE_VANITY}</span></a>
				</div>
			</div>
			<figure className="m-0 aspect-[16/10] overflow-hidden rounded-3xl bg-canvas-2 shadow-[0_30px_60px_-30px_rgba(12,35,64,0.45)]">
				<img src="/images/parasailing/dji_0051.webp" alt="Drone view of a parasail flight off Englewood" width="1600" height="900" className="photo size-full object-cover" />
			</figure>
		</div>
	);
}

export function HowItWorks() {
	return (
		<div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] gap-x-[clamp(28px,5vw,72px)] gap-y-8">
			<div className="flex flex-col gap-3">
				<span className="eyebrow">Never parasailed before?</span>
				<h2 className="display m-0">How it works</h2>
			</div>
			<div className="flex flex-col gap-4 text-ink-2">
				<p className="m-0">
					Englewood Beach Parasailing uses the newest technology and systems to give anyone a safe, soft, controlled parasailing experience. Our state-of-the-art vessel is built solely for your parasailing enjoyment, and up to 12 people can come out on the boat for the excursion.
				</p>
				<p className="m-0">
					You and up to two friends or family members ride in the parasail together. From a seated position on the back deck you feel the boat pull away as you almost imperceptibly lift into the air. The Kevlar towline reels out from a winch so smoothly it feels as if the boat simply leaves you — while your view gets more beautiful the higher you climb.
				</p>
			</div>
		</div>
	);
}

export function MoreAdventure() {
	return (
		<div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] items-center gap-x-[clamp(28px,5vw,72px)] gap-y-8 rounded-3xl bg-gradient-to-br from-sky to-sky-deep px-[clamp(24px,4vw,56px)] py-12 text-white">
			<div className="flex flex-col gap-3">
				<span className="eyebrow text-yellow">Want even more adventure?</span>
				<h2 className="m-0 text-[clamp(30px,3.4vw,46px)]">Ask for the free fall.</h2>
				<p className="m-0 text-lg text-white/85">
					The captain slows the boat and lets you float down until you almost touch the water — then hits the throttle and up you come again. We can add a little splash too. Everyone lands softly back on the deck.
				</p>
			</div>
			<figure className="m-0 aspect-[3/2] overflow-hidden rounded-2xl">
				<img src="/images/parasailing/dji_00342.webp" alt="Parasail canopy skimming toward the water" width="1600" height="634" loading="lazy" className="photo size-full object-cover" />
			</figure>
		</div>
	);
}

export function Boat() {
	return (
		<div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] items-center gap-x-[clamp(28px,5vw,72px)] gap-y-8">
			<figure className="m-0 overflow-hidden rounded-3xl bg-canvas-2">
				<img src="/images/parasailing/boat.webp" alt="Englewood Parasailing's 2023 Ocean Pro parasail boat" width="1033" height="592" loading="lazy" className="block w-full" />
			</figure>
			<div className="flex flex-col gap-5">
				<span className="eyebrow">The boat</span>
				<h2 className="display m-0">Our 2023 state-of-the-art Ocean Pro</h2>
				<ul className="m-0 flex list-none flex-col gap-3.5 p-0 text-ink-2">
					{BOAT_FACTS.map(({ Icon, text }) => (
						<li key={text} className="flex items-start gap-3.5">
							<span className="grid size-10 flex-none place-items-center rounded-lg bg-canvas-2 text-sky"><Icon size={20} /></span>
							<span className="pt-2">{text}</span>
						</li>
					))}
				</ul>
				<Link to="/pricing" className="btn btn-primary self-start"><span>See pricing</span></Link>
			</div>
		</div>
	);
}

export default function Parasailing() {
	usePageMeta({
		title: "Parasailing in Englewood, FL — Englewood Parasailing",
		description:
			"How parasailing with Englewood Parasailing works: a 2023 Ocean Pro boat, USCG-certified captains, up to three riders together, optional free fall and dip. Book at 833-FLY-1200.",
	});
	return (
		<div className="flex flex-col gap-22 pt-12 pb-24">
			<section className="container-x"><Header /></section>
			<section className="container-x"><HowItWorks /></section>
			<section className="container-x"><MoreAdventure /></section>
			<section className="container-x"><Boat /></section>
		</div>
	);
}
