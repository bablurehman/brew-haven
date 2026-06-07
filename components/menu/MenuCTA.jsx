import Link from "next/link";

export default function MenuCTA() {
  return (
     <section className="pb-24">
        <div className="sm:max-w-5xl mx-auto px-4 sm:px-6">
          <div className="relative overflow-hidden rounded-[40px] bg-neutral-900 text-white p-10 md:p-16 text-center">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-600/10 via-transparent to-transparent" />

            <div className="relative">
              <span className="inline-flex px-4 py-2 rounded-full bg-white/10 border border-white/10 text-sm font-medium">
                Reserve a Table
              </span>

              <h2 className="mt-6 text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
                Experience Every Flavor In Person
              </h2>

              <p className="max-w-2xl mx-auto mt-5 text-neutral-300 text-lg leading-relaxed">
                Join us for handcrafted coffee, artisan pastries,
                and memorable moments in a warm and welcoming atmosphere.
              </p>

              <div className="mt-10">
                <Link
                  href="/contact"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    px-6 sm:px-8
                    py-3 sm:py-4
                    rounded-full
                    bg-amber-600
                    text-white
                    font-medium
                    hover:bg-amber-700
                    transition-all
                    duration-300
                  "
                >
                  Book Your Visit
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}
