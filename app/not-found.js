import Link from "next/link";
import Image from "next/image";
import logo from "../public/bh-logo.png";

export default function NotFound() {
  return (
    <main className="relative min-h-screen bg-[#faf8f5] flex items-center justify-center px-6 overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-500/5 blur-3xl" />
      </div>

      <div className="relative max-w-2xl text-center">
        
        {/* Logo */}
        <Image
          src={logo}
          alt="Brew Haven"
          width={240}
          height={120}
          priority
          className="mx-auto object-contain"
        />

        {/* Badge */}
        <span className="mt-8 inline-flex rounded-full bg-amber-100 px-4 py-2 text-sm font-medium text-amber-700">
          Error 404
        </span>

        {/* 404 */}
        <h1 className="mt-8 text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-neutral-900">
          404
        </h1>

        {/* Heading */}
        <h2 className="mt-6 text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900">
          Freshly Brewed... But Not Found
        </h2>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-neutral-600">
          It seems this page has wandered off like the last croissant of the
          morning. Explore our menu, discover our story, or head back home.
        </p>

        {/* Actions */}
        <div className="mt-10 flex justify-center gap-4">
          <Link
            href="/"
            className="
              px-6
              py-3
              rounded-full
              bg-amber-600
              text-white
              font-medium
              shadow-lg
              shadow-amber-600/20
              hover:bg-amber-700
              hover:-translate-y-0.5
              transition-all
              duration-300
            "
          >
            Back To Home
          </Link>

          <Link
            href="/menu"
            className="
              px-6
              py-3
              rounded-full
              bg-white
              border
              border-neutral-200
              text-neutral-800
              font-medium
              hover:border-amber-600
              hover:text-amber-600
              hover:-translate-y-0.5
              transition-all
              duration-300
            "
          >
            Explore Menu
          </Link>
        </div>
      </div>
    </main>
  );
}