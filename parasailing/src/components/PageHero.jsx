import YouTubeBackground from "./YouTubeBackground";

// Inner-page hero (Parasailing, Pricing, Reviews, Pics, Social): pulled up under the
// transparent menu bar, a photo or YouTube background, two white Teko headings, then the
// torn "parasail-wave" edge and a centred big blue heading on the light band.
export function Wave() {
	return (
		<div
			aria-hidden="true"
			className="-mt-[120px] h-[101px] bg-[url(/images/theme/parasail-wave.webp)] bg-[length:2500px_157px] bg-top bg-no-repeat"
		/>
	);
}

export default function PageHero({
	kicker,
	title,
	bg = "/images/bg/vid-loading.webp",
	youtubeId,
	heading,
	alignMobileRight = false,
	children,
}) {
	return (
		<>
			<section
				className="relative isolate bg-cover bg-center pt-[80px] pb-[260px] lg:-mt-[140px] lg:pt-[185px] lg:pb-[350px]"
				style={{ backgroundImage: `url(${bg})` }}
			>
				{youtubeId && <YouTubeBackground id={youtubeId} poster={bg} />}
				<div
					className={`container-x font-display font-semibold leading-none text-white ${alignMobileRight ? "text-right md:text-left" : ""}`}
				>
					<p className="m-0 px-[10px] text-[45px] md:text-[39px]">{kicker}</p>
					<h1 className="m-0 mt-[-5px] text-[45px] md:text-[99px]">{title}</h1>
				</div>
			</section>
			<Wave />
			<div className="bg-light pt-5">
				<div className="container-x">
					<h2 className="display-blue m-0 px-[10px] text-center">{heading}</h2>
					{children}
				</div>
			</div>
		</>
	);
}
