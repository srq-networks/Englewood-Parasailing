import { useState } from "react";
import Lightbox from "./Lightbox";

// The "Play With Music On" badge from the hero: opens the branded video with sound.
export default function SoundButton({ video, className = "" }) {
	const [open, setOpen] = useState(false);
	return (
		<>
			<button
				type="button"
				onClick={() => setOpen(true)}
				className={`block cursor-pointer ${className}`}
			>
				<img
					src="/images/brand/soundbutton.webp"
					alt="Play with music on"
					width="85"
					height="68"
					className="block"
				/>
			</button>
			<Lightbox
				open={open}
				onClose={() => setOpen(false)}
				label="Englewood Rental Boats video"
			>
				<video
					src={video}
					controls
					autoPlay
					playsInline
					className="max-h-full max-w-full"
				/>
			</Lightbox>
		</>
	);
}
