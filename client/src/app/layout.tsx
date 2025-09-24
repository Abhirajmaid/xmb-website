import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Xtrawrkx Manufacturing Business - Precision Manufacturing Solutions",
  description:
    "Leading manufacturing company specializing in precision machining, assembly manufacturing, and Industry 4.0 solutions. Delivering world-class manufacturing excellence with cutting-edge technology and expert craftsmanship.",
  keywords:
    "manufacturing, precision machining, assembly, Industry 4.0, CNC machining, quality control, supply chain, automotive, aerospace, electronics, medical devices",
  authors: [{ name: "Xtrawrkx Manufacturing Business" }],
  creator: "Xtrawrkx Manufacturing Business",
  publisher: "Xtrawrkx Manufacturing Business",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://xtrawrkx.com",
    siteName: "Xtrawrkx Manufacturing Business",
    title:
      "Xtrawrkx Manufacturing Business - Precision Manufacturing Solutions",
    description:
      "Leading manufacturing company specializing in precision machining, assembly manufacturing, and Industry 4.0 solutions.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Xtrawrkx Manufacturing Business - Modern Manufacturing Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Xtrawrkx Manufacturing Business - Precision Manufacturing Solutions",
    description:
      "Leading manufacturing company specializing in precision machining, assembly manufacturing, and Industry 4.0 solutions.",
    images: ["/images/twitter-image.jpg"],
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#2563eb",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Newsreader:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
