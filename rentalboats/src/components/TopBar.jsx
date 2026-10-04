import { Phone } from "lucide-react";
import { PHONE_DISPLAY, SOCIALS } from "../data/site";
import { FacebookIcon, InstagramIcon } from "./SocialIcons";

// 45px navy bar: phone on the left (plain text, as on live), social icons on the right.
// Icons render only once a real URL is set in SOCIALS. Stacks and centers under 768px.
export default function TopBar() {
	const socials = [
		SOCIALS.facebook && {
			href: SOCIALS.facebook,
			label: "Facebook",
			Icon: FacebookIcon,
		},
		SOCIALS.instagram && {
			href: SOCIALS.instagram,
			label: "Instagram",
			Icon: InstagramIcon,
		},
	].filter(Boolean);

	return (
		<div className="border-b border-[#9B94A8] bg-topbar text-white">
			<div className="mx-auto flex max-w-[90%] flex-wrap items-center justify-between gap-1 py-2 text-base md:max-w-[1200px]">
				<span className="inline-flex items-center gap-[7px] leading-[1.8]">
					<Phone size={16} aria-hidden="true" />
					{PHONE_DISPLAY}
				</span>
				{socials.length > 0 && (
					<ul className="m-0 flex list-none items-center p-0">
						{socials.map(({ href, label, Icon }) => (
							<li key={label}>
								<a
									href={href}
									target="_blank"
									rel="noopener"
									aria-label={label}
									className="grid h-5 place-items-center px-1.5 text-white hover:text-hover"
								>
									<Icon size={14} />
								</a>
							</li>
						))}
					</ul>
				)}
			</div>
		</div>
	);
}
