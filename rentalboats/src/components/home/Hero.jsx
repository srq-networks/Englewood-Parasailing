import SoundButton from "../SoundButton";

// Full-width branded video (logo and slogans are baked into the footage) under a dark
// wash, with the "Play With Music On" badge hanging off the left edge.
export default function Hero() {
	return (
		<section className="relative mt-[100px] flex min-h-[267px] items-center overflow-hidden bg-black md:mt-0 md:min-h-[644px] md:py-20 lg:min-h-[882px]">
			<video
				src="/video/hero.mp4"
				poster="/video/poster.webp"
				autoPlay
				muted
				loop
				playsInline
				aria-hidden="true"
				className="absolute inset-0 size-full object-cover"
			/>
			<div aria-hidden="true" className="absolute inset-0 bg-[#2D1515]/30" />
			<div className="relative z-[2] w-full px-[10px]">
				<div className="relative h-[68px]">
					<SoundButton
						video="/video/englewood-2.mp4"
						className="absolute top-[-80px] left-[-20px] md:top-[-130px]"
					/>
				</div>
			</div>
		</section>
	);
}
