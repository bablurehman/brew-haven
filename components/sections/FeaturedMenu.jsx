import Image from "next/image";
import Link from "next/link";
import { featuredItems } from "@/data/featuredMenu";


export default function FeaturedMenu() {
  return (
    <section className="py-24 bg-[#faf8f5]">
      {" "}
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-flex px-4 py-2 rounded-full bg-amber-100 text-amber-700 text-sm font-medium">
            Featured Menu
          </span>

          <h2 className="mt-6 text-2xl sm:text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900">
            Customer Favorites
          </h2>

          <p className="max-w-2xl mx-auto mt-6 text-lg text-neutral-600">
            Discover our most loved handcrafted beverages and freshly baked
            delights.
          </p>
        </div>

        <div className="cols_1 grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
          {featuredItems.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-[20px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <div className="relative h-44 sm:h-64 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading="lazy"
                  className="object-cover transition duration-700 group-hover:scale-110"
                />
              </div>

              <div className="px-3 py-4 sm:p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold">{item.name}</h3>

                  <span className="text-sm sm:text-xl font-bold text-amber-600">
                    {item.price}
                  </span>
                </div>

                <p className="text-neutral-600 leading-relaxed">
                  {item.description}
                </p>

                <Link
                  href="/contact"
                  className="inline-block mt-4 text-amber-600 font-semibold hover:text-amber-700 transition cursor-pointer"
                >
                  Order Now
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-14">
          <Link
            href="/menu"
            className="px-8 py-4 rounded-full bg-amber-600 text-white font-medium hover:bg-amber-700 transition cursor-pointer"
          >
            View Full Menu
          </Link>
        </div>
      </div>
    </section>
  );
}
