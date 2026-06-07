"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { navLinks } from "@/data/navLinks";
import logo from "../../public/bh-logo.png";

import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="h-20 flex items-center justify-between">
            {/* Logo */}

            <Link href="/" className="flex items-center">
              <Image
                src={logo}
                alt="Brew Haven"
                width={280}
                height={90}
                priority
                className="h-12 sm:h-14 w-auto object-contain"
              />
            </Link>

            {/* Desktop Nav */}

            <nav className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => {
                const active = pathname === link.href;

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`
          group
          relative
          text-[15px]
          font-medium
          transition-colors
          duration-300
          ${active ? "text-amber-600" : "text-neutral-700 hover:text-amber-600"}
        `}
                  >
                    {link.label}

                    <span
                      className={`
            absolute
            left-0
            -bottom-[3px]
            h-[2px]
            bg-amber-600
            transition-all
            duration-300
            ${active ? "w-full" : "w-0 group-hover:w-full"}
          `}
                    />
                  </Link>
                );
              })}
            </nav>

            {/* Right Side */}

            <div className="flex items-center gap-4">
              <button
                onClick={() => router.push("/contact")}
                className="
                  hidden md:flex
                  px-6
                  py-3
                  rounded-full
                  bg-amber-600
                  text-white
                  font-medium
                  hover:bg-amber-700
                  transition cursor-pointer
                "
              >
                Book a Table
              </button>

              <button
                onClick={() => setIsOpen(true)}
                className="
                  md:hidden
                  w-10
                  h-10
                  rounded-full
                  border
                  border-neutral-200
                  flex
                  items-center
                  justify-center
                "
              >
                <Menu size={20} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}

      <div
        className={`
          fixed inset-0 z-[999] bg-white transition-all duration-300
          ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}
        `}
      >
        {/* Top Bar */}

        <div className="h-20 px-6 border-b border-neutral-200 flex items-center justify-between">
          <div>
            <Link href="/" className="flex items-center">
              <Image
                src={logo}
                alt="Brew Haven"
                width={280}
                height={90}
                priority
                className="h-14 sm:h-16 w-auto object-contain"
              />
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(false)}
            className="
              w-10
              h-10
              rounded-full
              border
              border-neutral-200
              flex
              items-center
              justify-center
            "
          >
            <X size={18} />
          </button>
        </div>

        {/* Links */}

        <nav className="px-6 py-8">
          <div className="flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="
                  py-4
                  text-lg
                  font-medium
                  text-neutral-800
                  border-b
                  border-neutral-100
                  hover:text-amber-600
                  transition-colors
                "
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>

        {/* CTA */}

        <div className="px-6">
          <button
            onClick={() => router.push("/contact")}
            className="
              w-auto
              px-4
              py-3
              rounded-full
              bg-amber-600
              text-white
              font-medium
              hover:bg-amber-700
              transition cursor-pointer
            "
          >
            Book a Table
          </button>
        </div>
      </div>
    </>
  );
}
