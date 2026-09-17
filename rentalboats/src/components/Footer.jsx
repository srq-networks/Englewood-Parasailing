import { ADDRESS, HOURS, HOURS_NOTE, PARASAIL_URL, PHONE_DISPLAY, PHONE_HREF, SITE_NAME } from "../data/site";

function Col({ title, children }) {
	return (
		<div className="flex flex-col gap-2 text-sm">
			<h6 className="m-0 mb-1.5 text-base tracking-wider text-white">{title}</h6>
			{children}
		</div>
	);
}

export default function Footer() {
	return (
		<footer className="bg-navy pt-14 pb-8 text-white/80 [&_a]:text-teal-light [&_a:hover]:text-white">
			<div className="container-x grid grid-cols-[repeat(auto-fit,minmax(min(100%,220px),1fr))] gap-9">
				<div className="flex flex-col gap-3.5">
					<img src="/images/brand/logo.webp" alt={SITE_NAME} width="595" height="436" className="block h-15 w-auto self-start rounded-xl bg-white p-2" />
					<p className="m-0 max-w-[32ch] text-sm">Five inspected rental boats on Manasota Key. Be your own captain, at your own pace.</p>
				</div>
				<Col title="Find us">
					<span>{ADDRESS.street}<br />{ADDRESS.city}</span>
					<a href={PHONE_HREF} className="font-semibold">{PHONE_DISPLAY}</a>
				</Col>
				<Col title="Hours">
					<span>{HOURS}</span>
					<span>{HOURS_NOTE}</span>
				</Col>
				<Col title="Family">
					<a href={PARASAIL_URL}>Englewood Parasailing</a>
				</Col>
			</div>
			<div className="container-x mt-10 text-xs text-white/60">© {new Date().getFullYear()} {SITE_NAME}. All rights reserved.</div>
		</footer>
	);
}
