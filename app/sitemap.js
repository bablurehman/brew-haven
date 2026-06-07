export default function sitemap() {
  const baseUrl = "https://cafe-brew-haven.vercel.app";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/menu`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${baseUrl}/gallery`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      priority: 0.5,
    },
  ];
}