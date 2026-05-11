import { getAllSlugs } from "@/data/projects";

export default function sitemap() {
  const baseUrl = "https://lokeshpaneru.netlify.app";

  // Static routes
  const staticRoutes = ["", "/projects"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly",
    priority: route === "" ? 1.0 : 0.8,
  }));

  // Dynamic project routes
  const projectSlugs = getAllSlugs();
  const dynamicRoutes = projectSlugs.map((slug) => ({
    url: `${baseUrl}/projects/${slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...dynamicRoutes];
}
