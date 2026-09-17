import { FAREHARBOR } from "../data/site";

// Opens FareHarbor. The autolightframe script in index.html intercepts the click and
// shows the booking flow in a lightbox; without JS it just navigates there.
export default function BookButton({ children = "Book your flight", className = "btn btn-primary" }) {
	return (
		<a href={FAREHARBOR.book} className={className}>
			<span>{children}</span>
		</a>
	);
}
