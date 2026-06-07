import Image from "next/image";
import about_cafe from "../../public/images/cafe/about-cafe.jpg";

export default function AboutSection() {
  return (
    <section className="py-24 bg-[#faf8f5]">
      {" "}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10 md:gap-8 lg:gap-16 items-center">
          {/* Image Side */}

          <div className="relative">
            <div className="relative h-[360px] sm:h-[550px] overflow-hidden rounded-[32px]">
              <Image
                src={about_cafe}
                alt="Cafe Interior"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                loading="lazy"
                className="object-cover"
              />
            </div>

            <div className="absolute -bottom-6 -right-6 bg-white p-4 sm:p-6 rounded-3xl shadow-xl">
              <h3 className="text-[20px] sm:text-3xl md:text-4xl  font-bold text-amber-600">10+</h3>

              <p className="text-neutral-600">Years Experience</p>
            </div>
          </div>

          {/* Content Side */}

          <div>
            <span className="inline-flex px-4 py-2 rounded-full bg-amber-100 text-amber-700 text-sm font-medium">
              About Our Café
            </span>

            <h2 className="mt-6 text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-900 leading-tight">
              Where Every Cup Tells A Story
            </h2>

            <p className="mt-8 text-lg text-neutral-600 leading-relaxed">
              At Brew Haven, we believe exceptional coffee begins with passion,
              craftsmanship, and carefully selected ingredients. Every drink is
              handcrafted to create memorable experiences for our guests.
            </p>

            <p className="mt-6 text-lg text-neutral-600 leading-relaxed">
              From premium coffee beans sourced around the world to freshly
              baked pastries prepared daily, we are committed to quality in
              every detail.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-10">
              <div>
                <h3 className="text-2xl sm:text-4xl font-bold text-amber-600">50K+</h3>

                <p className="mt-2 text-neutral-600">Happy Customers</p>
              </div>

              <div>
                <h3 className="text-2xl sm:text-4xl font-bold text-amber-600">30+</h3>

                <p className="mt-2 text-neutral-600">Signature Drinks</p>
              </div>
            </div>

            <button className="mt-10 px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-amber-600 hover:bg-amber-700 text-white font-medium transition">
              Discover Our Story
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
