export default function Badge({
  children,
  className = "",
}) {
  return (
    <span
      className={`inline-flex items-center px-4 py-2 rounded-full bg-amber-100 text-amber-700 text-sm font-medium ${className}`}
    >
      {children}
    </span>
  );
}