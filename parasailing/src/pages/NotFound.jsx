import { Link } from "react-router-dom";
import usePageMeta from "../hooks/usePageMeta";
import { PHONE_HREF, PHONE_VANITY } from "../data/site";

export default function NotFound() {
	usePageMeta({ title: "Page not found — Englewood Parasailing", description: "That page drifted off. Head back to Englewood Parasailing." });
	return (
		<section className="container-x flex flex-col items-start gap-6 pt-24 pb-32">
			<span className="eyebrow">404</span>
			<h1 className="m-0 text-[clamp(40px,5.4vw,74px)] leading-none">
				That page <span className="text-sky">drifted</span> off.
			</h1>
			<p className="m-0 max-w-[48ch] text-lg text-ink-2">The link you followed doesn't go anywhere. Head home, or give us a call.</p>
			<div className="flex flex-wrap gap-3">
				<Link to="/" className="btn btn-primary"><span>Back home</span></Link>
				<a href={PHONE_HREF} className="btn btn-secondary"><span>Call {PHONE_VANITY}</span></a>
			</div>
		</section>
	);
}
