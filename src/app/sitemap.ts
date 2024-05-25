import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: "https://simbio.do9.dev",
      lastModified: new Date().toISOString().split("T")[0],
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://simbio.do9.dev/auth/login",
      lastModified: new Date().toISOString().split("T")[0],
      changeFrequency: "yearly",
      priority: 0.9,
    },
    {
      url: "https://simbio.do9.dev/donate",
      lastModified: new Date().toISOString().split("T")[0],
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://simbio.do9.dev/privacy-policy",
      lastModified: new Date().toISOString().split("T")[0],
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://simbio.do9.dev/terms-conditions",
      lastModified: new Date().toISOString().split("T")[0],
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
