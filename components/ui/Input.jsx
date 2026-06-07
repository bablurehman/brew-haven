export default function Input({
  type = "text",
  placeholder,
  className = "",
  ...props
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-200 ${className}`}
      {...props}
    />
  );
}