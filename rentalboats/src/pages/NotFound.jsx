import { Link } from "react-router-dom";
import usePageMeta from "../hooks/usePageMeta";
import { PHONE_DISPLAY, PHONE_HREF } from "../data/site";

export default function NotFound() {
	usePageMeta({ title: "Page not found — Englewood Rental Boats", description: "That page sailed off. Head back to Englewood Rental Boats." });
	return (
		<section className="container-x flex flex-col items-start gap-6 pt-24 pb-32">
			<span className="eyebrow">404</span>
			<h1 className="m-0 text-[clamp(40px,5.2vw,72px)] leading-[1.04]">
				That page <span className="text-teal">sailed</span> off.
			</h1>
			<p className="m-0 max-w-[48ch] text-lg">The link you followed doesn't go anywhere. Head home, or give us a call.</p>
			<div className="flex flex-wrap gap-3">
				<Link to="/" className="btn btn-primary">Back home</Link>
				<a href={PHONE_HREF} className="btn btn-secondary">Call {PHONE_DISPLAY}</a>
			</div>
		</section>
	);
}
