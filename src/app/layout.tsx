import type { Metadata } from "next";
import { Heebo } from "next/font/google";
import "./globals.css";

const heebo = Heebo({
    subsets: ["hebrew"],
    weight: ["300","400","500","600","700","800"],
});

export const metadata: Metadata = {
    title: "מיטב ביטוח ופיננסים",
    description: "ביטוח נסיעות לחו״ל",
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
