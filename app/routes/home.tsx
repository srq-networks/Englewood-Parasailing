import type { Route } from "./+types/home";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Englewood Parasailing – Florida's #1 Parasail Company" },
    {
      name: "description",
      content:
        "Experience 1,200-foot parasailing flights above Englewood, FL. Family-friendly, FAA-approved, 15+ year safety record. Starting at $89/person. Call 833-359-1200.",
    },
  ];
}

const FEATURES = [
  { icon: "👨‍👩‍👧‍👦", label: "Ages 5–105", desc: "Family-friendly for all" },
  { icon: "🪂", label: "1,200ft Flights", desc: "FAA-approved altitude" },
  { icon: "🛡️", label: "15+ Year Safety Record", desc: "Coast Guard certified" },
  { icon: "⭐", label: "5-Star Rated", desc: "Englewood's #1 company" },
];

const GALLERY_PREVIEW = [
  {
    src: "https://englewoodparasailing.com/wp-content/uploads/2023/06/IMG_0019-1024x683.jpg",
    alt: "Parasailing over Englewood Beach",
  },
  {
    src: "https://englewoodparasailing.com/wp-content/uploads/2023/06/IMG_7836-1024x683.jpg",
    alt: "Aerial view of the Gulf Coast",
  },
  {
    src: "https://englewoodparasailing.com/wp-content/uploads/2023/06/IMG_7337-1024x683.jpg",
    alt: "Guests enjoying a parasail flight",
  },
];

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="relative h-[90vh] flex items-center justify-center text-white text-center overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="https://englewoodparasailing.com/wp-content/uploads/2023/06/englwood-121.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-navy/55" />
        <div className="relative z-10 px-4 max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-6xl font-bold mb-4 drop-shadow-lg leading-tight">
            Soar Above the Gulf Coast
          </h1>
          <p className="text-xl sm:text-2xl mb-2 text-sky-100 font-medium">
            Englewood's #1 Rated Parasail Company
          </p>
          <p className="text-sky-200 text-lg mb-10">
            From $89/person · Ages 5–105 Welcome · 15+ Year Safety Record
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:8333591200"
              className="bg-ep-yellow hover:bg-ep-orange text-navy hover:text-white font-bold px-8 py-4 rounded text-lg transition-colors shadow-lg"
            >
              Book Now · 833-359-1200
            </a>
            <Link
              to="/pricing"
              className="bg-white/20 hover:bg-white/30 text-white font-semibold px-8 py-4 rounded text-lg transition-colors border border-white/40"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Features strip */}
      <section className="bg-sky-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {FEATURES.map(({ icon, label, desc }) => (
            <div key={label} className="space-y-1">
              <div className="text-3xl">{icon}</div>
              <div className="font-bold text-sm sm:text-base">{label}</div>
              <div className="text-sky-300 text-xs sm:text-sm">{desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Welcome */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-sky-950 mb-6">
            Welcome to Englewood Parasailing
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            We are the area's original and most experienced —{" "}
            <strong>the only full-time operator</strong> in Englewood, FL. Whether you're 5 or
            105 years old, our expert captains will give you an unforgettable experience soaring
            1,200 feet above the beautiful Gulf Coast waters.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            Spot dolphins and manatees from above. Take in breathtaking views of Englewood
            Beach, Boca Grande, and Manasota Key — all from our state-of-the-art 2023 Ocean Pro
            vessel with up to 12 guests aboard.
          </p>
          <Link
            to="/parasailing"
            className="bg-ep-orange hover:bg-ep-yellow text-white hover:text-navy font-semibold px-8 py-3 rounded text-lg transition-colors"
          >
            Learn About Our Adventures
          </Link>
        </div>
      </section>

      {/* Gallery preview */}
      <section className="py-16 bg-sky-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-sky-950 text-center mb-10">
            Memories to Last a Lifetime
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {GALLERY_PREVIEW.map(({ src, alt }) => (
              <img
                key={src}
                src={src}
                alt={alt}
                className="w-full h-64 object-cover rounded-xl shadow-md"
              />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/photos"
              className="text-sky-600 hover:text-sky-700 font-semibold text-lg transition-colors"
            >
              View All Photos →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-sky-950 text-white py-20 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Fly?</h2>
          <p className="text-sky-200 text-lg mb-8">
            Reservations required September–January. Call us to book your flight today!
          </p>
          <a
            href="tel:8333591200"
            className="bg-ep-yellow hover:bg-ep-orange text-navy hover:text-white font-bold px-10 py-4 rounded text-xl transition-colors shadow-lg inline-block"
          >
            Call 833-359-1200
          </a>
        </div>
      </section>
    </main>
  );
}
