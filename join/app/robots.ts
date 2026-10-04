import type { MetadataRoute } from "next";
import { seoSites } from "@togotravel/shared/seo/sites";

const site = seoSites.join;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },
    sitemap: `${site.siteUrl}/sitemap.xml`,
    host: site.siteUrl,
  };
}
