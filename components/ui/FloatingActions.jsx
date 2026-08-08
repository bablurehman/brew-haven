"use client";

import { useEffect, useState } from "react";
import { FaArrowUp, FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

export default function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* Call & WhatsApp - Middle Right */}

      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">
        <a
          href="tel:+918372992290"
          aria-label="Call us"
          className="
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-full
            bg-blue-500
            text-white
            shadow-xl
            transition-all
            duration-300
            hover:-translate-y-1
            hover:scale-105
          "
        >
          <FaPhoneAlt size={14} />
        </a>

        <a
          href="https://wa.me/+918372992290"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp us"
          className="
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-full
            bg-green-500
            text-white
            shadow-xl
            transition-all
            duration-300
            hover:-translate-y-1
            hover:scale-105
          "
        >
          <FaWhatsapp size={18} />
        </a>
      </div>

      {/* Scroll To Top - Bottom Right */}

      {showTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="
            fixed
            bottom-6
            right-6
            z-50
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-full
            bg-amber-600
            text-white
            shadow-xl
            transition-all
            duration-300
            hover:-translate-y-1
            hover:bg-amber-700
          "
        >
          <FaArrowUp size={14} />
        </button>
      )}
    </>
  );
}
