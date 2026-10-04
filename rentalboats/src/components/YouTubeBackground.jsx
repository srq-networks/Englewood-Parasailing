// Muted, looping YouTube video as a section background (Elementor-style): the iframe is
// scaled to cover the section at 16:9, with the poster image behind it while it loads.
// Hidden below md like Elementor's "play on mobile" default; the poster shows instead.
export default function YouTubeBackground({ id, poster }) {
	const src = `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&mute=1&loop=1&playlist=${id}&controls=0&rel=0&playsinline=1&modestbranding=1`;
	return (
		<div
			aria-hidden="true"
			className="absolute inset-0 overflow-hidden bg-cover bg-center [container-type:size]"
			style={{ backgroundImage: `url(${poster})` }}
		>
			<iframe
				src={src}
				title="Background video"
				tabIndex={-1}
				allow="autoplay"
				className="pointer-events-none absolute top-1/2 left-1/2 hidden aspect-video w-[max(100cqw,177.78cqh)] -translate-x-1/2 -translate-y-1/2 border-0 md:block"
			/>
		</div>
	);
}
