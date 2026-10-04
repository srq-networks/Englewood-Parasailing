import { Link } from "react-router-dom";
import usePageMeta from "../hooks/usePageMeta";
import { PHONE_HREF, PHONE_VANITY } from "../data/site";

export default function NotFound() {
	usePageMeta({
		title: "Page not found – Englewood Parasailing",
		description: "That page drifted off. Head back to Englewood Parasailing.",
	});
	return (
		<section className="container-x pt-[60px] pb-[120px]">
			<p className="kicker m-0">404</p>
			<h1 className="display-blue m-0 mt-2.5">That page drifted off.</h1>
			<p className="m-0 mt-5 max-w-[48ch] font-el text-[22px] leading-[30px] text-muted">
				The link you followed doesn't go anywhere. Head home, or give us a call.
			</p>
			<div className="mt-10 flex flex-wrap gap-4">
				<Link to="/" className="btn btn-royal">
					<span>Back Home</span>
				</Link>
				<a href={PHONE_HREF} className="btn btn-red">
					<span>Call {PHONE_VANITY}</span>
				</a>
			</div>
		</section>
	);
}
