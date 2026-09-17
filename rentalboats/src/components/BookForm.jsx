import { useState } from "react";
import { Check } from "lucide-react";
import { BOATS, DURATIONS } from "../data/boats";
import { LEAD_ENDPOINT, PHONE_DISPLAY } from "../data/site";

const EMPTY = { name: "", phone: "", email: "", date: "", guests: "4", duration: "fourHour", notes: "" };

function prettyDate(iso) {
	if (!iso) return "your date";
	return new Date(`${iso}T12:00:00`).toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" });
}

// Availability request. POSTs JSON to VITE_LEAD_ENDPOINT; with no endpoint it fakes a
// send so the demo shows the success state.
export default function BookForm() {
	const [boat, setBoat] = useState(BOATS[0].id);
	const [form, setForm] = useState(EMPTY);
	const [status, setStatus] = useState("idle"); // idle | sending | sent | error
	const [error, setError] = useState("");
	const sending = status === "sending";
	const chosen = BOATS.find((b) => b.id === boat);
	const duration = DURATIONS.find((d) => d.id === form.duration);

	const set = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

	async function submit(e) {
		e.preventDefault();
		setStatus("sending");
		setError("");
		const lead = { source: "englewoodrentalboats.com", ...form, boat, guests: Number(form.guests), submittedAt: new Date().toISOString() };
		try {
			if (LEAD_ENDPOINT) {
				const r = await fetch(LEAD_ENDPOINT, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(lead) });
				if (!r.ok) throw new Error(`Server replied ${r.status}`);
			} else {
				await new Promise((res) => setTimeout(res, 700));
			}
			setStatus("sent");
		} catch (err) {
			setStatus("error");
			setError(err.message || `Could not send — call ${PHONE_DISPLAY}.`);
		}
	}

	if (status === "sent") {
		return (
			<div className="flex flex-col justify-center gap-4 rounded-2xl bg-teal-50 p-8">
				<span className="grid size-14 place-items-center rounded-full bg-teal text-white"><Check size={28} /></span>
				<h3 className="m-0 text-3xl">Aye aye, {form.name}.</h3>
				<p className="m-0 text-[15px]">
					{chosen ? chosen.name : "Any boat"}, {duration.label.toLowerCase()} on {prettyDate(form.date)} for {form.guests}. We'll confirm by phone or text shortly.
				</p>
				<button type="button" onClick={() => { setForm({ ...form, name: "", notes: "" }); setStatus("idle"); }} className="btn btn-secondary self-start">
					Send another request
				</button>
			</div>
		);
	}

	return (
		<form onSubmit={submit} className="grid grid-cols-2 gap-4">
			<label className="label col-span-full">
				Name
				<input name="name" required placeholder="Captain for the day" value={form.name} onChange={set} className="input" />
			</label>
			<label className="label col-span-full sm:col-span-1">
				Phone
				<input name="phone" type="tel" required placeholder="(941) 555-0100" value={form.phone} onChange={set} className="input" />
			</label>
			<label className="label col-span-full sm:col-span-1">
				Email
				<input name="email" type="email" placeholder="you@example.com" value={form.email} onChange={set} className="input" />
			</label>
			<label className="label">
				Date
				<input name="date" type="date" required value={form.date} onChange={set} className="input" />
			</label>
			<label className="label">
				Guests
				<input name="guests" type="number" min="1" max="12" required value={form.guests} onChange={set} className="input" />
			</label>
			<label className="label col-span-full">
				Boat
				<select name="boat" value={boat} onChange={(e) => setBoat(e.target.value)} className="input">
					{BOATS.map((b) => <option key={b.id} value={b.id}>{b.name}</option>)}
					<option value="any">Whatever's available</option>
				</select>
			</label>
			<fieldset className="col-span-full m-0 flex flex-col gap-1.5 border-0 p-0">
				<legend className="label mb-1.5">Duration</legend>
				<div className="flex overflow-hidden rounded-xl border-2 border-line bg-surface">
					{DURATIONS.map((d) => (
						<label key={d.id} className={`flex flex-1 cursor-pointer justify-center px-3 py-2.5 text-sm font-semibold transition-colors ${form.duration === d.id ? "bg-navy text-white" : "hover:bg-teal-50"}`}>
							<input type="radio" name="duration" value={d.id} checked={form.duration === d.id} onChange={set} className="sr-only" />
							{d.label}
						</label>
					))}
				</div>
			</fieldset>
			<label className="label col-span-full">
				Anything we should know?
				<textarea name="notes" placeholder="Bringing the dog, want fishing gear, first time at the wheel…" value={form.notes} onChange={set} className="input min-h-21 resize-y" />
			</label>
			<div className="col-span-full flex flex-wrap items-center gap-3.5">
				<button type="submit" disabled={sending} className="btn btn-primary">{sending ? "Sending…" : "Send request"}</button>
				<span className="text-xs text-muted" role="status">
					{status === "error" ? error : LEAD_ENDPOINT ? "" : "Demo mode — requests are not sent yet."}
				</span>
			</div>
		</form>
	);
}
