import { ExploreMenu } from "@/components/menu/ExploreMenu";
import MenuCTA from "@/components/menu/MenuCTA";
import MenuHighlights from "@/components/menu/MenuHighlights";



export const metadata = {
  title: "Menu | Brew Haven - Premium Coffee & Artisan Café",
  description:
    "Discover our selection of specialty coffee, handcrafted drinks, fresh pastries, and signature café creations made with premium ingredients.",
};
export default function MenuPage() {


  return (
    <main className="bg-[#faf8f5]">
      {/* Hero Section */}

      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-50 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <span className="inline-flex px-4 py-2 rounded-full bg-amber-100 text-amber-700 text-sm font-medium">
            Freshly Crafted
          </span>

          <h1 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900">
            Discover Our <span className="text-amber-600">Menu</span>
          </h1>

          <p className="max-w-3xl mx-auto mt-6 text-lg text-neutral-600 leading-relaxed">
            Carefully crafted coffee, handcrafted beverages, freshly baked
            pastries, and signature dishes made with premium ingredients.
          </p>
        </div>
      </section>

      {/* Highlights */}

      <MenuHighlights />

      {/* Menu Grid */}

      <ExploreMenu />

      {/* CTA */}

      <MenuCTA />
    </main>
  );
}
