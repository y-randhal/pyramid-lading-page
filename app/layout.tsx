import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const basePath = process.env.NODE_ENV === 'production' ? '/pyramid-lading-page' : '';

export const metadata: Metadata = {
  title: "Pyramid - The AI Course You Didn't Know You Needed",
  description: "Master AI the easy way. So easy, anyone can do it. (Yes, even you.)",
  icons: {
    icon: `${basePath}/favicon.svg`,
    shortcut: `${basePath}/favicon.svg`,
  },
  openGraph: {
    title: "Pyramid - The AI Course You Didn't Know You Needed",
    description: "Master AI the easy way. So easy, anyone can do it. (Yes, even you.)",
    images: [`${basePath}/images/og-image.png`],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
