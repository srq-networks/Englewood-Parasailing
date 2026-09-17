import { FacebookIcon, InstagramIcon } from "../components/SocialIcons";
import usePageMeta from "../hooks/usePageMeta";
import { ELFSIGHT, SOCIALS } from "../data/site";
import ElfsightWidget from "../components/ElfsightWidget";

const CHANNELS = [
	{ name: "Facebook", handle: "Englewood Parasailing Tours", href: SOCIALS.facebook, Icon: FacebookIcon, blurb: "Photos from the dock, season updates and specials." },
	{ name: "Instagram", handle: "@englewoodparasailingtours", href: SOCIALS.instagram, Icon: InstagramIcon, blurb: `Tag us! ${SOCIALS.hashtag}` },
];

export function Header() {
	return (
		<div className="flex flex-col gap-5">
			<span className="eyebrow">Englewood's #1 rated parasail company</span>
			<h1 className="m-0 text-[clamp(40px,5.4vw,74px)] leading-none">Let's get social</h1>
			<p className="m-0 max-w-[52ch] text-lg text-ink-2">Follow along, tag your flight photos, and see what's happening on the water this week.</p>
		</div>
	);
}

export function Channels() {
	return (
		<div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,280px),1fr))] gap-4">
			{CHANNELS.map(({ name, handle, href, Icon, blurb }) => (
				<a key={name} href={href} target="_blank" rel="noopener" className="card flex items-start gap-4 border-t-4 border-t-sky p-6 no-underline transition-colors hover:bg-canvas">
					<span className="grid size-12 flex-none place-items-center rounded-lg bg-canvas-2 text-sky"><Icon size={24} /></span>
					<span className="flex flex-col gap-1">
						<span className="font-display text-xl font-bold uppercase leading-none text-navy">{name}</span>
						<span className="text-sm font-bold text-sky-deep">{handle}</span>
						<span className="text-sm text-ink-2">{blurb}</span>
					</span>
				</a>
			))}
		</div>
	);
}

export function InstagramFeed() {
	return (
		<div className="flex flex-col gap-6">
			<div className="flex flex-col gap-3">
				<span className="eyebrow">Our Instagram happenings</span>
				<h2 className="display m-0">Tag us! {SOCIALS.hashtag}</h2>
			</div>
			<div className="card p-4">
				<ElfsightWidget id={ELFSIGHT.instagram} />
			</div>
		</div>
	);
}

export default function Social() {
	usePageMeta({
		title: "Let's Get Social — Englewood Parasailing",
		description: "Follow Englewood Parasailing on Facebook and Instagram and tag your flight photos with #englewoodparasailingtours.",
	});
	return (
		<div className="flex flex-col gap-16 pt-12 pb-24">
			<section className="container-x"><Header /></section>
			<section className="container-x"><Channels /></section>
			<section className="container-x"><InstagramFeed /></section>
		</div>
	);
}
