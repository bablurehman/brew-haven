import Image from "next/image";
import logo from "../public/bh-logo.png";

export default function Loading() {
  return (
    <div className="min-h-screen bg-[#faf8f5] flex items-center justify-center px-6">
      <div
        className="
          flex
          flex-col
          items-center
          text-center
          bg-white
          rounded-[32px]
          border
          border-neutral-200
          px-10
          py-12
          shadow-xl
          max-w-md
          w-full
        "
      >
        {/* Logo */}
        <Image
          src={logo}
          alt="Brew Haven"
          width={240}
          height={122}
          priority
          className="object-contain"
        />

        {/* Text */}
        <h2 className="mt-8 text-2xl font-bold text-neutral-900">
          Brewing Your Experience
        </h2>

        <p className="mt-3 text-neutral-600 leading-relaxed">
          Preparing handcrafted coffee and fresh pastries...
        </p>

        {/* Loading Dots */}
        <div className="flex gap-2 mt-6">
          <span className="w-2.5 h-2.5 rounded-full bg-amber-600 animate-bounce" />
          <span
            className="w-2.5 h-2.5 rounded-full bg-amber-600 animate-bounce"
            style={{ animationDelay: "0.15s" }}
          />
          <span
            className="w-2.5 h-2.5 rounded-full bg-amber-600 animate-bounce"
            style={{ animationDelay: "0.3s" }}
          />
        </div>
      </div>
    </div>
  );
}