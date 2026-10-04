import { useState } from "react";
import Lightbox from "./Lightbox";

// The old site's "Play With Music On" image button. Opens a lightbox with either a local
// <video> (home hero) or a YouTube player (Parasailing page).
export default function SoundButton({ video, youtubeId, className = "" }) {
	const [open, setOpen] = useState(false);
	return (
		<>
			<button
				type="button"
				onClick={() => setOpen(true)}
				aria-label="Play with music on"
				className={`block cursor-pointer ${className}`}
			>
				<img
					src="/images/theme/soundbutton.webp"
					alt=""
					width="85"
					height="68"
					className="block"
				/>
			</button>
			<Lightbox
				open={open}
				onClose={() => setOpen(false)}
				label="Englewood Parasailing video"
			>
				{video ? (
					<video
						src={video}
						controls
						autoPlay
						playsInline
						className="max-h-full max-w-full"
					/>
				) : (
					<iframe
						src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0`}
						title="Englewood Parasailing video"
						allow="autoplay; encrypted-media; fullscreen"
						className="h-[600px] max-h-full w-[900px] max-w-full border-0 bg-black"
					/>
				)}
			</Lightbox>
		</>
	);
}
