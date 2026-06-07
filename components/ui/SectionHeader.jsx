export default function SectionHeader({
  badge,
  title,
  description,
  center = true,
}) {
  return (
    <div
      className={`mb-14 ${
        center ? "text-center" : ""
      }`}
    >
      {badge && (
        <span className="text-amber-600 font-medium">
          {badge}
        </span>
      )}

      <h2 className="mt-3 text-4xl md:text-5xl font-bold">
        {title}
      </h2>

      {description && (
        <p className="mt-5 text-gray-600 max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
}