"use client";

import { useState } from "react";
import MenuCard from "./MenuCard";
import MenuCategory from "./MenuCategory";

export default function MenuGrid({ items }) {
  const categories = [
    "All",
    ...new Set(items.map((item) => item.category)),
  ];

  const [activeCategory, setActiveCategory] =
    useState("All");

  const filteredItems =
    activeCategory === "All"
      ? items
      : items.filter(
          (item) => item.category === activeCategory
        );

  return (
    <section className="py-20">
      <div className="max-w-7xl lg:max-w-6xl mx-auto px-4 sm:px-6">
        <MenuCategory
          categories={categories}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />

 <div
  className="
  cols_2
    grid
    grid-cols-2
    sm:grid-cols-2
    md:grid-cols-3
    gap-4
    lg:gap-8
  "
>
  {filteredItems.map((item) => (
    <MenuCard
      key={item.id}
      item={item}
    />
  ))}
</div>
      </div>
    </section>
  );
}