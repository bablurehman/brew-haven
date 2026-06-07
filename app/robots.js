export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap:
      "https://cafe-brew-haven.vercel.app/sitemap.xml",
  };
}