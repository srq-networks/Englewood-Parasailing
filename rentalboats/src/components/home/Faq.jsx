import { FAQ } from "../../data/faq";

export default function Faq() {
	return (
		<section id="faq" className="container-x grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] gap-x-[clamp(28px,5vw,80px)] gap-y-8 pt-24 pb-24">
			<div className="flex flex-col gap-4">
				<span className="eyebrow">Before you go</span>
				<h2 className="display m-0">Quick answers</h2>
			</div>
			<dl className="m-0 flex flex-col gap-4">
				{FAQ.map((f) => (
					<div key={f.q} className="card flex flex-col gap-1.5 p-5">
						<dt className="text-[17px] font-bold text-navy">{f.q}</dt>
						<dd className="m-0 text-[15px] text-muted">{f.a}</dd>
					</div>
				))}
			</dl>
		</section>
	);
}
