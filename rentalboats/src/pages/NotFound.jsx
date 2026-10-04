import { Link } from "react-router-dom";
import usePageMeta from "../hooks/usePageMeta";
import { PHONE_DISPLAY } from "../data/site";
import GetInTouch from "../components/GetInTouch";

export default function NotFound() {
	usePageMeta({
		title: "Page not found - Englewood Rental Boats",
		description:
			"That page does not exist. Head back to Englewood Rental Boats.",
	});
	return (
		<>
			<div className="container-x pt-[175px]">
				<h2 className="m-0 text-[35px] leading-none">Page Not Found</h2>
				<div className="py-[15px]">
					<span className="block w-[41%] border-t-[1.8px] border-divider" />
				</div>
				<p className="m-0 text-base">
					The link you followed doesn't go anywhere.{" "}
					<Link to="/">Go to the home page</Link>,{" "}
					<Link to="/boats">see our rental boats</Link> or call {PHONE_DISPLAY}.
				</p>
			</div>
			<GetInTouch />
		</>
	);
}
