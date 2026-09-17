import { PHONE_DISPLAY, PHONE_HREF } from "../../data/site";
import BookForm from "../BookForm";

export function Intro() {
	return (
		<div className="flex flex-col gap-5">
			<span className="eyebrow">Prefer a human?</span>
			<h2 className="display m-0">Request a date or ask us anything.</h2>
			<p className="m-0 max-w-[42ch] text-muted">
				Group outing, fishing gear, a question about the passes? Send it over and we'll get back to you with availability.
			</p>
			<p className="m-0 text-[13px] text-muted">
				Or just call <a href={PHONE_HREF} className="font-semibold">{PHONE_DISPLAY}</a>, 8 am – 6 pm daily.
			</p>
		</div>
	);
}

export default function Book() {
	return (
		<section id="book" className="container-x pb-24">
			<div className="card grid grid-cols-[repeat(auto-fit,minmax(min(100%,320px),1fr))] gap-x-[clamp(28px,5vw,80px)] gap-y-10 rounded-3xl px-[clamp(24px,4vw,64px)] py-14">
				<Intro />
				<BookForm />
			</div>
		</section>
	);
}
