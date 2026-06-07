import Image from "next/image";
import Link from "next/link";
import hero from "../../public/images/hero/hero-bg.jpg";

export default function Hero() {
  return (
    <section className="relative min-h-screen">
      {/* Background Image */}

      <div className="absolute inset-0">
        <Image
          src={hero}
          alt="Premium Coffee"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/25" />
      </div>

      {/* Content */}

      <div className="relative z-10 max-w-7xl mx-auto px-6 min-h-screen flex items-center">
        <div className="max-w-5xl">
          {/* Badge */}

          <span className="inline-flex items-center px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-amber-300 text-sm font-medium tracking-wide">
            ✦ Artisan Coffee House Since 2014
          </span>

          {/* Heading */}

          <h1 className="mt-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[0.95]">
            More Than, Just A Café.
          </h1>

          {/* Description */}

          <p className="mt-8 text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed">
            Discover handcrafted coffee, artisan pastries, and a warm atmosphere
            designed for meaningful conversations, productive mornings, and
            unforgettable moments.
          </p>

          {/* CTA */}

          <div className="mt-10 flex gap-3 sm:gap-4">
            <Link
              href="/menu"
              className="
                px-4 sm:px-8 py-3 sm:py-4
                rounded-full
                bg-amber-600
                text-white
                font-medium sm:font-semibold
                shadow-[0_12px_40px_rgba(217,119,6,0.35)]
                hover:bg-amber-700
                hover:-translate-y-1
                transition-all
                duration-300
              "
            >
              Explore Menu
            </Link>

            <Link
              href="/contact"
              className="
                px-4 sm:px-8 py-3 sm:py-4
                rounded-full
                border
                border-white/20
                bg-white/80
                backdrop-blur-xl
                text-black
                font-medium sm:font-semibold
                hover:bg-white
                hover:text-amber-600
                hover:-translate-y-1
                transition-all
                duration-300
              "
            >
              Reserve A Table
            </Link>
          </div>

          {/* Stats */}

          <div className="grid grid-cols-3 gap-3 sm:gap-5 mt-16 max-w-2xl">
            <div className="">
              <p className="text-[20px] sm:text-3xl md:text-4xl font-bold text-white">
                10+
              </p>

              <p className="mt-2 text-xs sm:text-sm text-gray-400 ">
                Years Experience
              </p>
            </div>

            <div className="">
              <p className="text-[20px] sm:text-3xl md:text-4xl font-bold text-white">
                50K+
              </p>

              <p className="mt-2 text-xs sm:text-sm text-gray-400">
                Happy Guests
              </p>
            </div>

            <div className="">
              <p className="text-[20px] sm:text-3xl md:text-4xl font-bold text-white">
                4.9★
              </p>

              <p className="mt-2 text-xs sm:text-sm text-gray-400">
                Customer Rating
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
