import { menuHighlights } from "@/data/menuData";

export default function MenuHighlights() {
  return (
    <section className="pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="cols_2 grid gap-4 sm:gap-6 grid-cols-2 md:grid-cols-3">
          {menuHighlights.map((item) => (
            <div
              key={item.id}
              className="
                group
                relative
                overflow-hidden
                rounded-[20px] sm:rounded-[28px]
                bg-white
                border
                border-neutral-300
                p-4 sm:p-8
                transition-all
                duration-500
                hover:-translate-y-1
                hover:shadow-xl
              "
            >
              {/* Accent Line */}
              {/* Number */}
              <span className="text-sm font-medium tracking-[0.2em] text-amber-600 uppercase">
                0{item.id}
              </span>

              <h3 className="mt-5 text-xl sm:text-[20px] font-semibold text-neutral-900">
                {item.title}
              </h3>

              <p className="mt-4 leading-relaxed text-neutral-600">
                {item.description}
              </p>

              <div
                className="
                  mt-6
                  h-px
                  w-12
                  bg-neutral-200
                  transition-all
                  duration-500
                  group-hover:w-20
                  group-hover:bg-amber-500
                "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}