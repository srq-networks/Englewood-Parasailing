import { useEffect, useMemo, useRef, useState } from "react";
import { Check, X } from "lucide-react";
import { BOATS, DURATIONS, PRICING_NOTE } from "../data/boats";
import { PHONE_DISPLAY, PHONE_HREF } from "../data/site";
import { BookingContext } from "../hooks/useBooking";

// ============================================================================
// DEMO ONLY — placeholder for the OnLot booking widget.
// Pure HTML/JSX with local state: no network calls, nothing is reserved and no
// card is charged. Every "Book online" CTA on the site opens this dialog so the
// demo shows a booking flow. Replace this file when the real widget arrives.
// ============================================================================

const EMPTY = { duration: "fourHour", date: "", guests: "4" };

function prettyDate(iso) {
	if (!iso) return "your date";
	return new Date(`${iso}T12:00:00`).toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" });
}

export function DemoRibbon() {
	return (
		<p className="m-0 rounded-lg bg-sun/15 px-3 py-2 text-xs font-semibold text-navy">
			Demo — not a real reservation. To book today, call <a href={PHONE_HREF} className="font-bold">{PHONE_DISPLAY}</a>.
		</p>
	);
}

// Mounted fresh each time the dialog opens, so its state resets on its own.
export function BookingForm({ initialBoat, onClose }) {
	const [boat, setBoat] = useState(initialBoat);
	const [form, setForm] = useState(EMPTY);
	const [done, setDone] = useState(false);
	const chosen = BOATS.find((b) => b.id === boat) ?? BOATS[0];
	const duration = DURATIONS.find((d) => d.id === form.duration);
	const price = chosen.rates[form.duration];

	const set = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

	if (done) {
		return (
			<div className="flex flex-col gap-4 p-7">
				<span className="grid size-14 place-items-center rounded-full bg-teal text-white"><Check size={28} /></span>
				<h2 className="m-0 text-3xl">You're on the books.</h2>
				<p className="m-0 text-[15px]">
					{chosen.name}, {duration.label.toLowerCase()} on {prettyDate(form.date)} for {form.guests}. ${price} + tax and gratuity.
				</p>
				<DemoRibbon />
				<button type="button" onClick={onClose} className="btn btn-secondary self-start">Close</button>
			</div>
		);
	}

	return (
		<form onSubmit={(e) => { e.preventDefault(); setDone(true); }} className="grid grid-cols-2 gap-4 p-7">
			<div className="col-span-full flex items-start justify-between gap-4">
				<div className="flex flex-col gap-1">
					<span className="eyebrow">Book online</span>
					<h2 className="m-0 text-3xl">Reserve your boat</h2>
				</div>
				<button type="button" onClick={onClose} aria-label="Close" className="grid size-10 flex-none place-items-center rounded-full bg-bg text-navy hover:bg-teal-50">
					<X size={20} />
				</button>
			</div>
			<div className="col-span-full"><DemoRibbon /></div>
			<label className="label col-span-full">
				Boat
				<select value={boat} onChange={(e) => setBoat(e.target.value)} className="input">
					{BOATS.map((b) => <option key={b.id} value={b.id}>{b.name} · up to {b.capacity}</option>)}
				</select>
			</label>
			<fieldset className="col-span-full m-0 flex flex-col gap-1.5 border-0 p-0">
				<legend className="label mb-1.5">Duration</legend>
				<div className="grid grid-cols-3 overflow-hidden rounded-xl border-2 border-line">
					{DURATIONS.map((d) => (
						<label key={d.id} className={`flex cursor-pointer flex-col items-center px-2 py-2.5 text-center transition-colors ${form.duration === d.id ? "bg-navy text-white" : "hover:bg-teal-50"}`}>
							<input type="radio" name="duration" value={d.id} checked={form.duration === d.id} onChange={set} className="sr-only" />
							<span className="text-xs font-semibold uppercase tracking-wider">{d.short}</span>
							<span className="font-display text-xl">${chosen.rates[d.id]}</span>
						</label>
					))}
				</div>
			</fieldset>
			<label className="label">
				Date
				<input name="date" type="date" required value={form.date} onChange={set} className="input" />
			</label>
			<label className="label">
				Guests (max {chosen.capacity})
				<input name="guests" type="number" min="1" max={chosen.capacity} required value={form.guests} onChange={set} className="input" />
			</label>
			<div className="col-span-full flex flex-wrap items-center justify-between gap-3 rounded-xl bg-bg px-4 py-3">
				<span className="text-sm text-muted">{duration.label}</span>
				<span className="font-display text-3xl text-navy">${price}<span className="ml-1 text-sm font-sans font-semibold text-muted">+ tax</span></span>
			</div>
			<p className="col-span-full m-0 text-xs text-muted">{PRICING_NOTE}</p>
			<button type="submit" className="btn btn-coral col-span-full">Reserve now</button>
		</form>
	);
}

export function BookingDialog({ open, boatId, onClose }) {
	const ref = useRef(null);

	useEffect(() => {
		const dialog = ref.current;
		if (!dialog) return;
		if (open && !dialog.open) dialog.showModal();
		if (!open && dialog.open) dialog.close();
	}, [open]);

	return (
		<dialog
			ref={ref}
			aria-label="Book a boat"
			onClose={onClose}
			onClick={(e) => e.target === ref.current && onClose()}
			className="m-auto w-[min(100%-32px,520px)] rounded-3xl bg-surface p-0 text-text shadow-lift backdrop:bg-deep/80"
		>
			{open && <BookingForm initialBoat={boatId} onClose={onClose} />}
		</dialog>
	);
}

export default function BookingProvider({ children }) {
	const [state, setState] = useState({ open: false, boatId: BOATS[0].id });
	const api = useMemo(() => ({ open: (boatId) => setState({ open: true, boatId: boatId || BOATS[0].id }) }), []);
	const close = () => setState((s) => ({ ...s, open: false }));

	return (
		<BookingContext.Provider value={api}>
			{children}
			<BookingDialog open={state.open} boatId={state.boatId} onClose={close} />
		</BookingContext.Provider>
	);
}
