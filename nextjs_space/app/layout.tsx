import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pyramid - The AI Course You Didn't Know You Needed",
  description: "Master AI the easy way. So easy, anyone can do it. (Yes, even you.)",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "Pyramid - The AI Course You Didn't Know You Needed",
    description: "Master AI the easy way. So easy, anyone can do it. (Yes, even you.)",
    images: ["/og-image.png"],
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
