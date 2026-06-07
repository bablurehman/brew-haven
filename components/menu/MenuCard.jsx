import Image from "next/image";

export default function MenuCard({ item }) {
  return (
    <article
      className="
    group
    overflow-hidden
    rounded-[20px]
    sm:rounded-[24px]
    bg-white
    border
    border-neutral-200
    shadow-sm
    transition-all
    duration-500
    hover:-translate-y-1
    hover:shadow-xl
    h-full
  "
    >
      <div className="relative h-36 sm:h-42 lg:h-48 overflow-hidden">
        <Image
          src={item.image}
          alt={item.name}
          fill
          loading="lazy"
          className="
        object-cover
        transition-transform
        duration-700
        ease-out
        group-hover:scale-105
      "
        />

        <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
          <span
            className="
          rounded-full
          bg-white/95
          backdrop-blur-sm
          px-3
          py-1.5
          text-[11px]
          sm:text-xs
          font-medium
          tracking-wide
          text-neutral-700
        "
          >
            {item.category}
          </span>
        </div>
      </div>

      <div className="p-4 sm:p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3
              className="
              mt-1
            text-sm
            sm:text-base
            font-semibold
            text-neutral-900
          "
            >
              {item.name}
            </h3>
          </div>
          <span
            className="
          shrink-0
          rounded-full
          bg-amber-50
          px-3
          py-1.5
          text-xs
          sm:text-sm
          font-semibold
          text-amber-700
        "
          >
            {item.price}
          </span>
        </div>

        <p
          className="
        mt-3
        text-sm
        leading-relaxed
        text-neutral-600
        line-clamp-2
      "
        >
          {item.description}
        </p>
      </div>
    </article>
  );
}
