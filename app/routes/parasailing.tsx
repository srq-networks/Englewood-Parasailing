import type { Route } from "./+types/parasailing";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Parasailing Adventures | Englewood Parasailing" },
    {
      name: "description",
      content:
        "Experience exhilarating parasailing adventures above the Florida Gulf Coast. US Coast Guard certified captains, 1,200ft FAA-approved flights, views of Englewood Beach, Boca Grande, and Manasota Key.",
    },
  ];
}

const STEPS = [
  {
    icon: "🚤",
    title: "Board Our Vessel",
    desc: "Step aboard our state-of-the-art 2023 Ocean Pro boat. Up to 12 guests can join each trip — perfect for families and groups.",
  },
  {
    icon: "🪂",
    title: "Take Flight",
    desc: "Glide up to 1,200 feet in the air on FAA-approved Kevlar towlines. No experience, no running start, no jumping required.",
  },
  {
    icon: "🌊",
    title: "Optional Dip",
    desc: 'Ask the captain for the "free fall" experience — gently lowered near the water\'s surface then accelerated back up. Optional water dip available!',
  },
];

export default function Parasailing() {
  return (
    <main>
      {/* Hero — YouTube video background */}
      <section className="relative h-72 sm:h-[500px] flex items-center justify-center text-white overflow-hidden">
        <iframe
          className="absolute inset-0 w-full h-[calc(100%+160px)] -top-20 pointer-events-none"
          src="https://www.youtube.com/embed/NmvqzDlRUOU?autoplay=1&mute=1&loop=1&playlist=NmvqzDlRUOU&controls=0&disablekb=1&modestbranding=1&playsinline=1&rel=0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="Englewood Parasailing background video"
        />
        <div className="absolute inset-0 bg-navy/60" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl sm:text-6xl font-teko font-semibold tracking-wide">
            Parasailing Adventures
          </h1>
          <p className="mt-3 text-ep-yellow text-lg font-medium">
            Above the Beautiful Florida Gulf Coast
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-teko font-semibold text-navy mb-5 tracking-wide">
            Your Adventure Begins Here
          </h2>
          <p className="text-gray-600 leading-relaxed mb-5">
            Float above the stunning waters of the Florida Gulf Coast as our boat glides along
            below you. From the parasail canopy you'll enjoy breathtaking views of Englewood
            Beach, Boca Grande, and Manasota Key — and keep an eye out for dolphins and manatees
            in the crystal-clear water below.
          </p>
          <p className="text-gray-600 leading-relaxed mb-5">
            Guests are seated comfortably in the parasail harness as the captain smoothly
            ascends them using Kevlar towlines — no running, no jumping, no experience required.
            The whole experience is designed to be as relaxing or thrilling as you'd like.
          </p>
          <p className="text-gray-600 leading-relaxed">
            For thrill-seekers, ask about the <strong>"free fall" experience</strong> where the
            captain slows the boat to gently lower you near the water's surface before
            accelerating back skyward. Optional water dips are available on request.
          </p>
        </div>
      </section>

      {/* YouTube video embed */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-teko font-semibold text-navy mb-6 tracking-wide text-center">
            See It For Yourself
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="aspect-video rounded-xl overflow-hidden shadow-md">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/3S3PsEaZYCY?rel=0&modestbranding=1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Englewood Parasailing video 1"
              />
            </div>
            <div className="aspect-video rounded-xl overflow-hidden shadow-md">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/hX3cpL_nalI?rel=0&modestbranding=1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Englewood Parasailing video 2"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-teko font-semibold text-navy text-center mb-12 tracking-wide">
            What to Expect
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {STEPS.map(({ icon, title, desc }) => (
              <div
                key={title}
                className="bg-gray-50 rounded-xl p-8 text-center border border-gray-100"
              >
                <div className="text-5xl mb-4">{icon}</div>
                <h3 className="text-2xl font-teko font-semibold text-navy mb-3 tracking-wide">
                  {title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery strip */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              "https://englewoodparasailing.com/wp-content/gallery/home-parasail/EP1.JPG",
              "https://englewoodparasailing.com/wp-content/gallery/home-parasail/EP4.JPG",
              "https://englewoodparasailing.com/wp-content/gallery/home-parasail/DJI_0024.JPG",
              "https://englewoodparasailing.com/wp-content/gallery/home-parasail/DJI_0044.JPG",
            ].map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Parasailing photo ${i + 1}`}
                className="w-full h-40 object-cover rounded-xl"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Safety */}
      <section className="py-16 bg-navy text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-teko font-semibold mb-6 tracking-wide">
            Safety First, Always
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Our captains are <strong className="text-white">US Coast Guard certified</strong> with
            years of parasailing experience. We operate with the newest technology and equipment
            to ensure every single flight is safe, smooth, and memorable.
          </p>
          <p className="text-gray-300 leading-relaxed mb-10">
            With a <strong className="text-white">15+ year perfect safety record</strong>, we are
            Englewood's most trusted parasailing company. All ages welcome — 5 to 105 years old.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/pricing"
              className="bg-white text-navy hover:bg-gray-100 font-semibold px-8 py-3 rounded text-lg transition-colors"
            >
              View Pricing
            </Link>
            <a
              href="tel:8333591200"
              className="bg-ep-yellow hover:bg-ep-orange text-navy hover:text-white font-semibold px-8 py-3 rounded text-lg transition-colors"
            >
              Book Now · 833-359-1200
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
