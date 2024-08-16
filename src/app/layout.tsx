import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// app/layout.js or app/page.js
export const metadata: Metadata = {
  title: "Edna's Catalog Shop",
  description: "Shopping at your own convenience",
  openGraph: {
    url: "https://business-profile-lemon.vercel.app/",
    type: "website",
    title: "Edna's Shop",
    description: "Shopping at your own convenience",
    images: [
      {
        url: "https://opengraph.b-cdn.net/production/images/0ea92150-0045-4377-bf8d-9417700e39c3.jpg?token=VR-kzQdBH5SuoHTcETN1tRxoC6oeVqP0Kwz9GWBmWfc&height=460&width=460&expires=33259792187",
        width: 460,
        height: 460,
        alt: "Edna's  Shop",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    // domain: "business-profile-lemon.vercel.app",
    // url: "https://business-profile-lemon.vercel.app/",
    title: "Edna's Catalog Shop",
    description: "Shopping at your own convenience",
    images: [
      "https://opengraph.b-cdn.net/production/images/0ea92150-0045-4377-bf8d-9417700e39c3.jpg?token=VR-kzQdBH5SuoHTcETN1tRxoC6oeVqP0Kwz9GWBmWfc&height=460&width=460&expires=33259792187",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
