import GalleryGrid from "@/components/gallery/GalleryGrid";

export const metadata = {
  title: "Gallery | Brew Haven - Premium Coffee & Artisan Café",
  description:
    "Explore Brew Haven's gallery featuring artisan coffee, handcrafted beverages, fresh pastries, and our premium café atmosphere.",
};

export default function GalleryPage() {
  return (
    <section className="relative overflow-hidden min-h-screen bg-gradient-to-b from-[#faf8f5] via-[#f8f4ef] to-white">
      <div className="absolute top-40 left-0 w-72 h-72 bg-amber-200/30 rounded-full blur-3xl" />
      <div className="absolute top-96 right-0 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 pt-28 text-center">
        <span className="inline-flex px-4 py-2 rounded-full bg-amber-100 text-amber-700 text-sm font-medium">
          Our Gallery
        </span>

        <h1 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-900">
          Moments Worth <span className="text-amber-600">Savoring</span>
        </h1>

        <p className="max-w-3xl mx-auto mt-8 text-lg text-neutral-600 leading-relaxed">
          Explore the atmosphere, handcrafted beverages,
          artisan desserts, and memorable moments that
          make every visit unforgettable.
        </p>
      </div>

      <GalleryGrid />
    </section>
  );
}