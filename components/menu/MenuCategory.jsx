export default function MenuCategory({
  categories,
  activeCategory,
  setActiveCategory,
}) {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-12">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setActiveCategory(category)}
          className={`px-4 sm:px-5 py-2 rounded-full text-sm font-medium transition-all ${
            activeCategory === category
              ? "bg-amber-600 text-white"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}