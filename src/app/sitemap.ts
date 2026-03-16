import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: "https://travel.meitav-ins.co.il",
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1,
        },
    ];
}
