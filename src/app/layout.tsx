import type { Metadata } from "next";
import { Heebo } from "next/font/google";
import "./globals.css";

const heebo = Heebo({
    subsets: ["hebrew"],
    weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
    title: "מיטב ביטוח ופיננסים | ביטוח נסיעות לחו״ל",
    description: "השוואת ביטוח נסיעות לחו״ל מכל חברות הביטוח במקום אחד.",
    metadataBase: new URL("https://travel.meitav-ins.co.il"),
    openGraph: {
        title: "מיטב ביטוח ופיננסים | ביטוח נסיעות לחו״ל",
        description: "השוואת ביטוח נסיעות לחו״ל מכל חברות הביטוח במקום אחד.",
        url: "https://travel.meitav-ins.co.il",
        siteName: "מיטב ביטוח ופיננסים",
        locale: "he_IL",
        type: "website",
        images: [
            {
                url: "https://travel.meitav-ins.co.il/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "מיטב ביטוח ופיננסים - ביטוח נסיעות לחו״ל",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "מיטב ביטוח ופיננסים | ביטוח נסיעות לחו״ל",
        description: "השוואת ביטוח נסיעות לחו״ל מכל חברות הביטוח במקום אחד.",
        images: ["https://travel.meitav-ins.co.il/og-image.jpg"],
    },
    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon-32x32.png",
        apple: "/apple-touch-icon.png",
    },
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="he" dir="rtl">
        <body className={`${heebo.className} antialiased`}>
        {children}
        </body>
        </html>
    );
}
