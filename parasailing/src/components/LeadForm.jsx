import { useState } from "react";
import { FLIGHTS } from "../data/pricing";
import { LEAD_ENDPOINT, PHONE_VANITY } from "../data/site";

const EMPTY = { name: "", phone: "", email: "", date: "", party: "2", notes: "" };

function prettyDate(iso) {
	if (!iso) return "your date";
	return new Date(`${iso}T12:00:00`).toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" });
}

// Flight request form. POSTs JSON to VITE_LEAD_ENDPOINT; with no endpoint it fakes a
// send so the demo still shows the success state. `flight` / `onFlightChange` are
// lifted so the pricing cards can pre-select a flight.
export default function LeadForm({ flight, onFlightChange }) {
	const [form, setForm] = useState(EMPTY);
	const [status, setStatus] = useState("idle"); // idle | sending | sent | error
	const [error, setError] = useState("");
	const sending = status === "sending";
	const chosen = FLIGHTS.find((f) => f.id === flight) ?? FLIGHTS[1];

	const set = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

	async function submit(e) {
		e.preventDefault();
		setStatus("sending");
		setError("");
		const lead = { source: "englewoodparasailing.com", ...form, flight, party: Number(form.party), submittedAt: new Date().toISOString() };
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
			setError(err.message || `Could not send — call ${PHONE_VANITY}.`);
		}
	}

	if (status === "sent") {
		return (
			<div className="flex flex-col gap-3.5 rounded-xl border-2 border-teal bg-canvas p-6">
				<span className="font-display text-2xl font-bold uppercase text-sky-deep">You're on the list, {form.name}.</span>
				<p className="m-0 text-[15px] text-ink-2">
					We've got your {chosen.name} (${chosen.price}) request for {form.party} on {prettyDate(form.date)}. Watch your phone — we'll confirm the launch time shortly.
				</p>
				<button
					type="button"
					onClick={() => { setForm({ ...form, name: "", notes: "" }); setStatus("idle"); }}
					className="self-start cursor-pointer text-sm font-bold uppercase tracking-[0.04em] text-sky-deep hover:text-sky"
				>
					Send another request
				</button>
			</div>
		);
	}

	const flightBtn = (f) =>
		`cursor-pointer rounded-lg border-2 px-3 py-3 text-sm font-bold uppercase tracking-[0.04em] transition-colors ${
			f.id === flight ? "border-navy bg-navy text-white" : "border-line bg-white text-ink-2 hover:border-sky"
		}`;

	return (
		<form onSubmit={submit} className="grid grid-cols-2 gap-3.5">
			<label className="label col-span-full">
				Name
				<input name="name" required placeholder="Who's flying?" value={form.name} onChange={set} className="input" />
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
				Preferred date
				<input name="date" type="date" required value={form.date} onChange={set} className="input" />
			</label>
			<label className="label">
				Party size
				<input name="party" type="number" min="1" max="12" required value={form.party} onChange={set} className="input" />
			</label>
			<fieldset className="col-span-full m-0 flex flex-col gap-1.5 border-0 p-0">
				<legend className="label mb-1.5">Flight</legend>
				<div className="grid grid-cols-2 gap-2">
					{FLIGHTS.map((f) => (
						<button key={f.id} type="button" onClick={() => onFlightChange(f.id)} aria-pressed={f.id === flight} className={flightBtn(f)}>
							{f.name} — ${f.price}
						</button>
					))}
				</div>
			</fieldset>
			<label className="label col-span-full">
				Anything we should know?
				<textarea name="notes" placeholder="Birthday, first-timers, want to get dipped…" value={form.notes} onChange={set} className="input min-h-20 resize-y" />
			</label>
			<div className="col-span-full flex flex-wrap items-center gap-3.5">
				<button type="submit" disabled={sending} className="btn btn-primary">
					<span>{sending ? "Sending…" : "Request my flight"}</span>
				</button>
				<span className="text-xs text-ink-3" role="status">
					{status === "error" ? error : LEAD_ENDPOINT ? "" : "Demo mode — requests are not sent yet."}
				</span>
			</div>
		</form>
	);
}
