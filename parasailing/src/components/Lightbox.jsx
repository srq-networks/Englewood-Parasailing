import { useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

// Full-screen <dialog>. Renders whatever is passed as children (an image or a video).
// onPrev/onNext are optional; when given, arrow keys and side buttons work.
export default function Lightbox({ open, onClose, onPrev, onNext, label = "Media viewer", children }) {
	const ref = useRef(null);

	useEffect(() => {
		const dialog = ref.current;
		if (!dialog) return;
		if (open && !dialog.open) dialog.showModal();
		if (!open && dialog.open) dialog.close();
	}, [open]);

	useEffect(() => {
		if (!open) return;
		const onKey = (e) => {
			if (e.key === "ArrowLeft") onPrev?.();
			if (e.key === "ArrowRight") onNext?.();
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [open, onPrev, onNext]);

	const navBtn = "absolute top-1/2 grid size-12 -translate-y-1/2 place-items-center rounded-full bg-surface/80 text-ink hover:bg-surface";

	return (
		<dialog
			ref={ref}
			aria-label={label}
			onClose={onClose}
			onClick={(e) => e.target === ref.current && onClose()}
			className="m-auto max-h-none max-w-none bg-transparent p-0 backdrop:bg-deep/90"
		>
			{open && (
				<div onClick={(e) => e.target === e.currentTarget && onClose()} className="relative flex h-dvh w-screen items-center justify-center p-4">
					{children}
					<button type="button" onClick={onClose} aria-label="Close" className="absolute top-4 right-4 grid size-12 place-items-center rounded-full bg-surface/80 text-ink hover:bg-surface">
						<X size={22} />
					</button>
					{onPrev && (
						<button type="button" onClick={onPrev} aria-label="Previous" className={`${navBtn} left-4`}>
							<ChevronLeft size={24} />
						</button>
					)}
					{onNext && (
						<button type="button" onClick={onNext} aria-label="Next" className={`${navBtn} right-4`}>
							<ChevronRight size={24} />
						</button>
					)}
				</div>
			)}
		</dialog>
	);
}
