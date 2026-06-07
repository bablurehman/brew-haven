import { whyChooseUs } from "@/data/whyChooseUs";
import { stats } from "@/data/stats";

export default function WhyChooseUs() {
  return (
    <section className="py-28 bg-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}

        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-flex px-4 py-2 rounded-full bg-amber-100 text-amber-700 text-sm font-medium">
            Why Choose Us
          </span>

          <h2 className="mt-6 text-2xl sm:text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-900">
            More Than Just Coffee
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-neutral-600">
            We combine premium ingredients, expert craftsmanship, and genuine
            hospitality to create an unforgettable café experience.
          </p>
        </div>

        {/* Features Grid */}

        <div className="cols_1 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {whyChooseUs.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="
                  group
                  bg-white
                  rounded-[20px sm:rounded-[32px]
                  p-4 sm:p-8
                  border
                  border-neutral-100
                  hover:-translate-y-2
                  hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]
                  transition-all
                  duration-500
                "
              >
                <div
                  className="
                    w-14
                    h-14
                    rounded-2xl
                    bg-amber-50
                    flex
                    items-center
                    justify-center
                    mb-6
                    group-hover:bg-amber-600
                    transition-all
                    duration-300
                  "
                >
                  <Icon
                    size={26}
                    className="
                      text-amber-600
                      group-hover:text-white
                      transition-colors
                      duration-300
                    "
                  />
                </div>

                <h3 className="text-[16px] sm:text-xl font-bold text-neutral-900">
                  {feature.title}
                </h3>

                <p className="mt-4 text-neutral-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Premium Highlight Section */}

        <div
          className="
    relative
    mt-24
    overflow-hidden
    rounded-[40px]
    bg-neutral-900
    text-white
    px-6
    py-12
    md:px-14
    md:py-16
  "
        >
          <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-transparent" />

          <div className="relative grid sm:grid-cols-2 gap-8 sm:gap-14 items-center">
            {/* Content */}

            <div className="max-w-xl">
              <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-amber-300">
                Trusted By Thousands
              </span>

              <h3 className="mt-6 text-2xl sm:text-3xl md:text-4xl font-bold leading-tight tracking-tight">
                Crafted for Every Moment
              </h3>

              <p className="mt-6 text-base md:text-lg leading-relaxed text-neutral-300">
                Whether you're enjoying your morning espresso, meeting friends,
                or working remotely, Brew Haven is thoughtfully designed to be
                your favorite destination for exceptional coffee and meaningful
                experiences.
              </p>
            </div>

            {/* Stats */}

            <div className="grid grid-cols-2 gap-3 sm:gap-5">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="
            rounded-[20px] sm:rounded-[28px]
            border
            border-white/10
            bg-white/[0.04]
            p-3
            sm:p-6
            text-center
            backdrop-blur-sm
            transition-all
            duration-300
            hover:bg-white/[0.08]
            hover:border-white/20
          "
                >
                  <h4 className="text-xl sm:text-2xl md:text-4xl font-bold text-amber-400">
                    {stat.value}
                  </h4>

                  <p className="mt-3 text-xs uppercase tracking-[0.10em] text-neutral-400">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
