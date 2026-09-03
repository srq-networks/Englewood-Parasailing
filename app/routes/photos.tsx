import type { Route } from "./+types/photos";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Photos | Englewood Parasailing" },
    {
      name: "description",
      content:
        "Browse aerial photos and parasailing memories from Englewood Parasailing in Englewood, FL.",
    },
  ];
}

const PHOTOS = [
  {
    src: "https://englewoodparasailing.com/wp-content/gallery/home-parasail/new-parasail-1g.jpg",
    alt: "Parasailing over the Gulf Coast",
  },
  {
    src: "https://englewoodparasailing.com/wp-content/gallery/home-parasail/2019-08-02.jpg",
    alt: "Aerial view during parasail flight",
  },
  {
    src: "https://englewoodparasailing.com/wp-content/gallery/home-parasail/2019-06-25-04.25.49.jpg",
    alt: "Parasailing adventure Englewood",
  },
  {
    src: "https://englewoodparasailing.com/wp-content/gallery/home-parasail/2019-06-25-04.44.19-3.jpg",
    alt: "Flying high above Englewood Beach",
  },
  {
    src: "https://englewoodparasailing.com/wp-content/gallery/home-parasail/new-parasail-1.jpg",
    alt: "Parasail canopy in the sky",
  },
  {
    src: "https://englewoodparasailing.com/wp-content/gallery/home-parasail/new-parasail-1b.jpg",
    alt: "Guests enjoying parasailing",
  },
  {
    src: "https://englewoodparasailing.com/wp-content/gallery/home-parasail/new-parasail-1c.jpg",
    alt: "Parasailing flight Englewood Florida",
  },
  {
    src: "https://englewoodparasailing.com/wp-content/gallery/home-parasail/IMG_7381.JPG",
    alt: "Parasailing group photo",
  },
  {
    src: "https://englewoodparasailing.com/wp-content/gallery/home-parasail/IMG_7390.JPG",
    alt: "High altitude parasail view",
  },
  {
    src: "https://englewoodparasailing.com/wp-content/gallery/home-parasail/DJI_0054.JPG",
    alt: "Drone shot of parasailing",
  },
  {
    src: "https://englewoodparasailing.com/wp-content/gallery/home-parasail/EP1.JPG",
    alt: "Englewood Parasailing aerial photo",
  },
  {
    src: "https://englewoodparasailing.com/wp-content/gallery/home-parasail/EP4.JPG",
    alt: "Parasailing over crystal blue water",
  },
  {
    src: "https://englewoodparasailing.com/wp-content/gallery/home-parasail/DJI_0063.JPG",
    alt: "Aerial drone parasailing photo",
  },
  {
    src: "https://englewoodparasailing.com/wp-content/gallery/home-parasail/DJI_0024.JPG",
    alt: "Drone view of parasailers",
  },
  {
    src: "https://englewoodparasailing.com/wp-content/gallery/home-parasail/DJI_0044.JPG",
    alt: "Gulf Coast aerial view",
  },
];

export default function Photos() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-navy text-white py-16 text-center">
        <h1 className="text-5xl sm:text-6xl font-teko font-semibold tracking-wide">Photos</h1>
        <p className="mt-2 text-gray-300">Memories to last a lifetime</p>
      </section>

      {/* Masonry gallery */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {PHOTOS.map(({ src, alt }) => (
              <img
                key={src}
                src={src}
                alt={alt}
                className="w-full rounded-xl shadow-sm break-inside-avoid block"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Photo package CTA */}
      <section className="bg-gray-50 border-t border-gray-100 py-14 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-4xl font-teko font-semibold text-navy mb-3 tracking-wide">
            Want Photos of Your Flight?
          </h2>
          <p className="text-gray-600 mb-6">
            Add our Digital Photo Package for just <strong>$40/person</strong> — receive 50–60
            high-resolution photos on an SD card to keep forever.
          </p>
          <a
            href="tel:8333591200"
            className="bg-ep-yellow hover:bg-ep-orange text-navy hover:text-white font-bold px-8 py-3 rounded text-lg transition-colors inline-block"
          >
            Book & Ask About Photos · 833-359-1200
          </a>
        </div>
      </section>
    </main>
  );
}
