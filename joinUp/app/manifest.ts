import type { MetadataRoute } from "next";
import { seoSites } from "@togotravel/shared/seo/sites";

const site = seoSites.joinUp;

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.brand,
    short_name: site.brand,
    description: site.description,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#ff7112",
    lang: "uk",
  };
}
