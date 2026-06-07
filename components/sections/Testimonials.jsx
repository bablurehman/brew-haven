import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Coffee Enthusiast",
    review:
      "The atmosphere is incredible, and the coffee is easily the best in town. Every visit feels like a special experience.",
  },
  {
    id: 2,
    name: "Michael Davis",
    role: "Regular Customer",
    review:
      "From the handcrafted drinks to the fresh pastries, everything is consistently exceptional. Highly recommended.",
  },
  {
    id: 3,
    name: "Emily Wilson",
    role: "Food Blogger",
    review:
      "A perfect blend of premium coffee, beautiful interiors, and outstanding service. This café never disappoints.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}

        <div className="text-center mb-16">

          <span className="inline-flex px-4 py-2 rounded-full bg-amber-100 text-amber-700 text-sm font-medium">
            Testimonials
          </span>

          <h2 className="mt-6 text-2xl sm:text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900">
            What Our Guests Say
          </h2>

          <p className="max-w-2xl mx-auto mt-6 text-lg text-neutral-600">
            Thousands of coffee lovers trust us for exceptional
            drinks, warm hospitality, and memorable experiences.
          </p>

        </div>

        {/* Testimonial Cards */}

        <div className="cols_1 grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">

          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-[32px] p-8 shadow-sm border border-neutral-100 hover:shadow-xl transition-all duration-300"
            >

              {/* Stars */}

              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    size={18}
                    className="fill-amber-400 text-amber-400"
                  />
                ))}
              </div>

              <p className="text-neutral-600 leading-relaxed text-sm sm:text-lg">
                "{testimonial.review}"
              </p>

              <div className="mt-8 flex items-center gap-4">

                <div className="w-10 sm:w-14 h-10 sm:h-14 rounded-full bg-amber-100 flex items-center justify-center text-sm sm:text-lg font-bold text-amber-700">
                  {testimonial.name.charAt(0)}
                </div>

                <div>
                  <h3 className="font-semibold text-sm sm:text-lg text-neutral-900">
                    {testimonial.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-500">
                    {testimonial.role}
                  </p>
                </div>

              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}