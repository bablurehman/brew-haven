export const metadata = {
  title: "About Us | Brew Haven Café Story & Values",
  description:
    "Discover Brew Haven's story, where premium coffee, artisan-crafted beverages, fresh pastries, and exceptional hospitality come together to create memorable café experiences.",
};

import { stats } from "@/data/stats";
import Image from "next/image";
import { Coffee, Award, HeartHandshake } from "lucide-react";
import about_cafe from "../../public/images/cafe/about-cafe.jpg";

export default function AboutPage() {
  return (
    <section className="bg-[#faf8f5] py-24">
      {" "}
      <div className="max-w-7xl mx-auto px-6">
        {/* Hero Section */}

        <div className="text-center max-w-4xl mx-auto">
          <span className="inline-flex items-center rounded-full bg-amber-100 px-4 py-2 text-sm font-medium text-amber-700">
            Our Story
          </span>

          <h1 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900">
            Crafted With <span className="text-amber-600">Purpose</span>
          </h1>

          <p className="mt-8 text-lg text-neutral-600 leading-relaxed">
            At Brew Haven, every cup tells a story. From ethically sourced beans
            to artisan-crafted beverages, we're dedicated to creating memorable
            moments where people connect, relax, and enjoy the finest coffee
            experience.
          </p>
        </div>

        {/* Story Section */}

        <div className="grid lg:grid-cols-2 gap-16 items-center mt-24">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900">
              More Than Just a Café
            </h2>

            <p className="mt-6 text-neutral-600 leading-relaxed">
              Founded with a passion for exceptional coffee and genuine
              hospitality, Brew Haven has become a destination for coffee
              enthusiasts, remote workers, and friends gathering over
              handcrafted drinks and fresh pastries.
            </p>

            <p className="mt-6 text-neutral-600 leading-relaxed">
              Every ingredient is carefully selected, every recipe is
              thoughtfully crafted, and every guest is welcomed like family. We
              believe great coffee is about more than taste—it's about creating
              experiences worth remembering.
            </p>
          </div>

          <div className="relative">
            <Image
              src={about_cafe}
              alt="Cafe Interior"
              loading="lazy"
              className="h-[380px] sm:h-[500px] rounded-3xl object-cover"
            />
          </div>
        </div>

        {/* Features */}

        <div className="grid md:grid-cols-3 gap-8 mt-24">
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-neutral-100">
            <div className="w-14 h-14 rounded-2xl bg-amber-100 flex items-center justify-center mb-6">
              <Coffee className="text-amber-600" />
            </div>

            <h3 className="text-2xl font-semibold mb-4">Premium Beans</h3>

            <p className="text-neutral-600">
              Sourced from trusted growers around the world and roasted to
              perfection for rich, unforgettable flavor.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-sm border border-neutral-100">
            <div className="w-14 h-14 rounded-2xl bg-amber-100 flex items-center justify-center mb-6">
              <Award className="text-amber-600" />
            </div>

            <h3 className="text-2xl font-semibold mb-4">
              Artisan Craftsmanship
            </h3>

            <p className="text-neutral-600">
              Every drink and pastry is carefully prepared with passion,
              precision, and attention to detail.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-sm border border-neutral-100">
            <div className="w-14 h-14 rounded-2xl bg-amber-100 flex items-center justify-center mb-6">
              <HeartHandshake className="text-amber-600" />
            </div>

            <h3 className="text-2xl font-semibold mb-4">Warm Hospitality</h3>

            <p className="text-neutral-600">
              We strive to create a welcoming atmosphere where every guest feels
              comfortable, valued, and at home.
            </p>
          </div>
        </div>

        {/* Stats Section */}

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-24 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-amber-600">
                {stat.value}
              </h3>

              <p className="mt-2 text-neutral-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
