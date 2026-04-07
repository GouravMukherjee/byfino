import { MetadataRoute } from "next";
import { posts } from "@/lib/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://byfino.com";

  const staticPages = [
    { url: base, priority: 1.0, changeFrequency: "weekly" as const },
    { url: `${base}/experience`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${base}/wedding-suits`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${base}/materials`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${base}/tailors`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${base}/blog`, priority: 0.7, changeFrequency: "weekly" as const },
    { url: `${base}/contact`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${base}/book-appointment`, priority: 0.9, changeFrequency: "monthly" as const },
    // City pages
    { url: `${base}/bespoke-tailor-los-gatos`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${base}/custom-suits-san-jose`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${base}/bespoke-suits-saratoga`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${base}/custom-suits-palo-alto`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${base}/custom-suits-campbell`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${base}/custom-suits-silicon-valley`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${base}/custom-suits-gilroy`, priority: 0.6, changeFrequency: "monthly" as const },
    { url: `${base}/wedding-suits-san-jose`, priority: 0.8, changeFrequency: "monthly" as const },
  ];

  const blogPages = posts.map((post) => ({
    url: `${base}/blog/${post.slug}`,
    priority: 0.6,
    changeFrequency: "monthly" as const,
  }));

  return [...staticPages, ...blogPages];
}
