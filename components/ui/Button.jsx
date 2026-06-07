export default function Button({
  children,
  className = "",
  variant = "primary",
  ...props
}) {
  const variants = {
    primary:
      "bg-amber-600 text-white hover:bg-amber-700",
    secondary:
      "border border-gray-300 hover:bg-gray-100",
  };

  return (
    <button
      className={`inline-flex items-center justify-center px-6 py-3 rounded-full font-medium transition-all duration-300 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}