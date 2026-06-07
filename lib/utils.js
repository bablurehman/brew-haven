export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function formatPrice(price) {
  return `$${Number(price).toFixed(2)}`;
}

export function truncateText(text, length = 100) {
  if (text.length <= length) return text;

  return text.slice(0, length) + "...";
}

export function getCurrentYear() {
  return new Date().getFullYear();
}

export function scrollToSection(id) {
  const element = document.getElementById(id);

  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
}