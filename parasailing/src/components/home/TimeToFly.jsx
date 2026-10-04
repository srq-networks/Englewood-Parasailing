import FareHarborCalendar from "../FareHarborCalendar";

export default function TimeToFly() {
	return (
		<section className="container-x grid items-center gap-8 pt-20 pb-10 md:grid-cols-[52%_48%]">
			<img
				src="/images/home/family.webp"
				alt="Excited family ready to go parasailing"
				width="1000"
				height="1212"
				loading="lazy"
				className="mx-auto block h-auto w-full max-w-[520px] px-[10px]"
			/>
			<div className="px-[10px]">
				<p className="kicker m-0">Ready...?</p>
				<h2 className="display-blue m-0 mt-2.5">Time To Fly!</h2>
				<FareHarborCalendar className="mt-8 h-[440px]" />
			</div>
		</section>
	);
}
