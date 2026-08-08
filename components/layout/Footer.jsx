import Image from "next/image";
import logo from "../../public/bh-logo2.png";
import Link from "next/link";
import {
  FaInstagram,
  FaFacebookF,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaTwitter,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-neutral-950 text-white overflow-hidden">
      {/* Top Accent Line */}
      <div className="h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="cols_1 grid grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Image
              src={logo}
              alt="Brew Haven"
              width={120}
              height={40}
              className="h-auto w-auto"
            />

            <p className="mt-5 text-neutral-400 leading-relaxed">
              Premium coffee, artisan pastries, and refined hospitality in a
              warm and inviting atmosphere.
            </p>

            <div className="flex gap-4 mt-8">
              <a
                href="#"
                aria-label="Instagram"
                className="w-11 h-11 rounded-full border border-neutral-700 flex items-center justify-center hover:border-amber-500 hover:text-amber-500 transition-all duration-300"
              >
                <FaInstagram size={18} />
              </a>

              <a
                href="#"
                aria-label="Facebook"
                className="w-11 h-11 rounded-full border border-neutral-700 flex items-center justify-center hover:border-amber-500 hover:text-amber-500 transition-all duration-300"
              >
                <FaFacebookF size={16} />
              </a>

              <a
                href="#"
                aria-label="Twitter"
                className="w-11 h-11 rounded-full border border-neutral-700 flex items-center justify-center hover:border-amber-500 hover:text-amber-500 transition-all duration-300"
              >
                <FaTwitter size={16} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Explore</h4>

            <ul className="space-y-3 text-neutral-400">
              <li>
                <Link
                  href="/"
                  className="hover:text-amber-500 transition-colors"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/about"
                  className="hover:text-amber-500 transition-colors"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  href="/menu"
                  className="hover:text-amber-500 transition-colors"
                >
                  Our Menu
                </Link>
              </li>

              <li>
                <Link
                  href="/gallery"
                  className="hover:text-amber-500 transition-colors"
                >
                  Gallery
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="hover:text-amber-500 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Opening Hours</h4>

            <div className="space-y-4 text-neutral-400">
              <div className="flex justify-between">
                <span>Monday - Friday</span>
                <span>7 AM - 9 PM</span>
              </div>

              <div className="flex justify-between">
                <span>Saturday</span>
                <span>8 AM - 10 PM</span>
              </div>

              <div className="flex justify-between">
                <span>Sunday</span>
                <span>8 AM - 8 PM</span>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>

            <div className="space-y-5 text-neutral-400">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt
                  size={18}
                  className="text-amber-500 mt-1 shrink-0"
                />

                <span>
                  Hill Cart Road, Kurseong
                  <br />
                  734203, West Bengal
                </span>
              </div>

              <div className="flex items-center gap-3">
                <FaPhoneAlt size={16} className="text-amber-500" />
                <span>+91 8372992290</span>
              </div>

              <div className="flex items-center gap-3">
                <FaEnvelope size={16} className="text-amber-500" />
                <span>hello@brewhaven.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-neutral-800 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-neutral-500">
  <p>© {new Date().getFullYear()} Brew Haven. All Rights Reserved.</p>

  <p>
    Developed & SEO by{" "}
    <a
      href="https://bablurehman.in/"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-amber-500 transition"
    >
      Bablu Rehman
    </a>
  </p>

  <div className="flex gap-6">
    <Link
      href="/privacy-policy"
      className="hover:text-amber-500 transition"
    >
      Privacy Policy
    </Link>

    <Link href="/terms" className="hover:text-amber-500 transition">
      Terms of Service
    </Link>
  </div>
</div>
      </div>
    </footer>
  );
}
