
import { menuItems } from "@/data/menuData";
import MenuGrid from "./MenuGrid";

export const ExploreMenu = () => {
  return (
    <section className="pb-24">
      <div className="sm:max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <span className="inline-flex px-4 py-2 rounded-full bg-amber-100 text-amber-700 text-sm font-medium">
            Our Selection
          </span>

          <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900">
            Explore Our Menu
          </h2>

          <p className="mt-4 text-neutral-600 text-lg">
            Browse our handcrafted drinks, pastries, and signature favorites.
          </p>
        </div>

        <MenuGrid items={menuItems} />
      </div>
    </section>
  );
};
