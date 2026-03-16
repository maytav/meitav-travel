import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
            },
            {
                userAgent: "facebookexternalhit",
                allow: "/",
            },
            {
                userAgent: "Facebot",
                allow: "/",
            },
            {
                userAgent: "Twitterbot",
                allow: "/",
            },
        ],
        sitemap: "https://travel.meitav-ins.co.il/sitemap.xml",
    };
}
