import SoundButton from "../SoundButton";

// Full-width looping background video pulled up under the transparent menu bar (and
// 150px under the Welcome section below), with the "Play With Music On" button.
export default function Hero() {
	return (
		<section className="relative isolate h-[310px] overflow-hidden bg-[url(/images/bg/vid-loading.webp)] bg-cover bg-center md:h-[600px] lg:-mt-[150px] lg:-mb-[150px] lg:h-[907px]">
			<video
				src="/video/hero.mp4"
				poster="/video/poster.webp"
				autoPlay
				muted
				loop
				playsInline
				preload="metadata"
				aria-hidden="true"
				className="absolute inset-0 -z-10 size-full object-cover"
			/>
			<SoundButton
				video="/video/englewood.mp4"
				className="absolute bottom-[10px] left-[10px] lg:top-[215px] lg:bottom-auto"
			/>
		</section>
	);
}
