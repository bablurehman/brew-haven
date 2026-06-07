import Image from "next/image";
import Link from "next/link";
import { homeGallery } from "@/data/galleryData";

export default function GallerySection() {
  return (
    <section className="py-24 bg-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-flex px-4 py-2 rounded-full bg-amber-100 text-amber-700 text-sm font-medium">
            Our Gallery
          </span>

          <h2 className="mt-6 text-2xl sm:text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900">
            A Taste Of The Experience
          </h2>

          <p className="max-w-2xl mx-auto mt-6 text-lg text-neutral-600">
            Explore our cozy atmosphere, handcrafted beverages,
            fresh pastries, and memorable moments shared by our guests.
          </p>
        </div>

        {/* Gallery Grid */}
<div className="space-y-5">

  {/* First Row - 2 Images */}
  <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-5">
    {homeGallery.slice(0, 2).map((item) => (
      <div
        key={item.id}
        className="relative h-[260px] sm:h-[420px] overflow-hidden rounded-[32px] group"
      >
        <Image
          src={item.image}
          alt={item.alt}
          loading="lazy"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-all duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition duration-500" />

        <div className="absolute bottom-0 left-0 right-0 p-6 opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
          <h3 className="text-white text-sm sm:text-lg font-semibold">
            {item.alt}
          </h3>
        </div>
      </div>
    ))}
  </div>

  {/* Second Row - 3 Images */}
  <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
    {homeGallery.slice(2, 5).map((item) => (
      <div
        key={item.id}
        className="img_height relative h-[200px] sm:h-[320px] overflow-hidden rounded-[32px] group"
      >
        <Image
          src={item.image}
          alt={item.alt}
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          fill
          loading="lazy"
          className="object-cover transition-all duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition duration-500" />

        <div className="absolute bottom-0 left-0 right-0 p-6 opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
          <h3 className="text-white text-sm sm:text-lg font-semibold">
            {item.alt}
          </h3>
        </div>
      </div>
    ))}
  </div>

</div>

        {/* CTA */}
        <div className="text-center mt-14">
          <Link
            href="/gallery"
            className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-amber-600 text-white font-medium hover:bg-amber-700 transition-all duration-300"
          >
            View Full Gallery
          </Link>
        </div>

      </div>
    </section>
  );
}