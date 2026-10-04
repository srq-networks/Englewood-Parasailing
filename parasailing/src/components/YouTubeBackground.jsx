// Muted, looping YouTube video scaled to cover its (positioned) parent, with a poster
// image behind it while the player loads. Purely decorative, so it ignores the pointer.
export default function YouTubeBackground({ id, poster }) {
	const src = `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&mute=1&loop=1&playlist=${id}&controls=0&playsinline=1&rel=0&modestbranding=1&disablekb=1&iv_load_policy=3`;
	return (
		<div
			aria-hidden="true"
			className="pointer-events-none absolute inset-0 -z-10 overflow-hidden [container-type:size]"
		>
			{poster && (
				<img
					src={poster}
					alt=""
					className="absolute inset-0 size-full object-cover"
				/>
			)}
			<iframe
				src={src}
				title=""
				tabIndex={-1}
				allow="autoplay; encrypted-media"
				className="absolute top-1/2 left-1/2 h-[max(100cqh,56.25cqw)] w-[max(100cqw,177.78cqh)] -translate-x-1/2 -translate-y-1/2 border-0"
			/>
		</div>
	);
}
