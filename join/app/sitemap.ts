import type { MetadataRoute } from "next";
import { seoSites } from "@togotravel/shared/seo/sites";

const site = seoSites.join;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return site.routes.map((route) => ({
    url: `${site.siteUrl}${route.path === "/" ? "" : route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
