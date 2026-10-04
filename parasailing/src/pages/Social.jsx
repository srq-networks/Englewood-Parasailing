import usePageMeta from "../hooks/usePageMeta";
import { ELFSIGHT, FACEBOOK_PLUGIN, SOCIALS } from "../data/site";
import PageHero from "../components/PageHero";
import ElfsightWidget from "../components/ElfsightWidget";

export function Facebook() {
	return (
		<section className="bg-light pt-5 pb-[60px]">
			<div className="container-x text-center">
				<p className="kicker m-0">Our</p>
				<h2 className="display-blue m-0 mt-2.5">Facebook Happenings</h2>
				<iframe
					src={FACEBOOK_PLUGIN}
					title="Englewood Parasailing Tours on Facebook"
					loading="lazy"
					allow="encrypted-media"
					className="mx-auto mt-10 block h-[600px] w-full max-w-[500px] border-0"
				/>
			</div>
		</section>
	);
}

export function Instagram() {
	return (
		<section className="bg-light pb-[60px]">
			<div className="container-x text-center">
				<p className="kicker m-0">Our</p>
				<h2 className="display-blue m-0 mt-2.5">Instagram Happenings</h2>
				<p className="m-0 mt-5 font-el text-[24px] font-semibold leading-none text-black">
					Tag us! {SOCIALS.hashtag}
				</p>
				<div className="mt-10 text-left">
					<ElfsightWidget id={ELFSIGHT.instagram} />
				</div>
			</div>
		</section>
	);
}

export default function Social() {
	usePageMeta({
		title: "Let’s Get Social – Englewood Parasailing",
		description:
			"Follow Englewood Parasailing on Facebook and Instagram and tag your flight photos with #englewoodparasailingtours.",
	});
	return (
		<>
			<PageHero
				kicker="Let’s Get"
				title="Social"
				bg="/images/bg/img_0019.webp"
				heading=""
			/>
			<Facebook />
			<Instagram />
		</>
	);
}
