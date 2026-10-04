import { useState } from "react";
import { LEAD_ENDPOINT, PHONE_VANITY } from "../data/site";

const EMPTY = { name: "", email: "", subject: "", message: "" };

// Contact-page form (name, email, subject, message). POSTs JSON to VITE_LEAD_ENDPOINT;
// with no endpoint it fakes a send so the demo still shows the success state.
export default function ContactForm() {
	const [form, setForm] = useState(EMPTY);
	const [status, setStatus] = useState("idle"); // idle | sending | sent | error
	const [error, setError] = useState("");
	const sending = status === "sending";

	const set = (e) =>
		setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

	async function submit(e) {
		e.preventDefault();
		setStatus("sending");
		setError("");
		const lead = {
			source: "englewoodparasailing.com",
			...form,
			submittedAt: new Date().toISOString(),
		};
		try {
			if (LEAD_ENDPOINT) {
				const r = await fetch(LEAD_ENDPOINT, {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(lead),
				});
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
			<div className="border border-check bg-light p-6" role="status">
				<p className="m-0 font-display text-[28px] font-medium leading-none text-royal">
					Thanks, {form.name}!
				</p>
				<p className="m-0 mt-2 text-[15px] text-muted">
					We've got your message and will get back to you shortly.
				</p>
				<button
					type="button"
					onClick={() => {
						setForm(EMPTY);
						setStatus("idle");
					}}
					className="mt-3 cursor-pointer text-[15px] text-royal underline"
				>
					Send another message
				</button>
			</div>
		);
	}

	return (
		<form onSubmit={submit} className="flex flex-col gap-3">
			<label className="flex flex-col gap-1">
				Your name
				<input
					name="name"
					required
					value={form.name}
					onChange={set}
					className="input"
				/>
			</label>
			<label className="flex flex-col gap-1">
				Your email
				<input
					name="email"
					type="email"
					required
					value={form.email}
					onChange={set}
					className="input"
				/>
			</label>
			<label className="flex flex-col gap-1">
				Subject
				<input
					name="subject"
					required
					value={form.subject}
					onChange={set}
					className="input"
				/>
			</label>
			<label className="flex flex-col gap-1">
				Your message (optional)
				<textarea
					name="message"
					rows="10"
					value={form.message}
					onChange={set}
					className="input resize-y"
				/>
			</label>
			<div className="flex flex-wrap items-center justify-between gap-3">
				<span className="text-[13px] text-muted" role="status">
					{status === "error"
						? error
						: LEAD_ENDPOINT
							? ""
							: "Demo mode — messages are not sent yet."}
				</span>
				<button
					type="submit"
					disabled={sending}
					className="cursor-pointer bg-[#6ec1e4] px-[30px] py-[10px] text-[15px] text-white transition-colors hover:bg-black disabled:opacity-60"
				>
					{sending ? "Sending…" : "Submit"}
				</button>
			</div>
		</form>
	);
}
