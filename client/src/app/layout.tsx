import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://xmb.xtrawrkx.com"),
  title: {
    default:
      "Xtrawrkx Manufacturing Business - Precision Manufacturing Solutions",
    template: "%s | Xtrawrkx Manufacturing Business",
  },
  description:
    "Leading manufacturing company specializing in precision machining, assembly manufacturing, and Industry 4.0 solutions. Delivering world-class manufacturing excellence with cutting-edge technology and expert craftsmanship. Global operations across 25+ countries.",
  keywords: [
    "manufacturing",
    "precision machining",
    "assembly manufacturing",
    "Industry 4.0",
    "CNC machining",
    "quality control",
    "supply chain",
    "automotive manufacturing",
    "aerospace manufacturing",
    "electronics manufacturing",
    "medical device manufacturing",
    "sourcing and procurement",
    "design and prototyping",
    "operational excellence",
    "global manufacturing",
    "Xtrawrkx",
  ],
  authors: [{ name: "Xtrawrkx Manufacturing Business" }],
  creator: "Xtrawrkx Manufacturing Business",
  publisher: "Xtrawrkx Manufacturing Business",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://xmb.xtrawrkx.com",
    siteName: "Xtrawrkx Manufacturing Business",
    title:
      "Xtrawrkx Manufacturing Business - Precision Manufacturing Solutions",
    description:
      "Leading manufacturing company specializing in precision machining, assembly manufacturing, and Industry 4.0 solutions. Global operations across 25+ countries.",
    images: [
      {
        url: "/images/og-image.png",
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
    images: ["/images/twitter-image.png"],
  },
  alternates: {
    canonical: "https://xmb.xtrawrkx.com",
  },
  verification: {
    // Add your verification codes here when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
  category: "Manufacturing",
  classification: "Business",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Xtrawrkx Manufacturing",
  },
  formatDetection: {
    telephone: true,
    date: true,
    address: true,
    email: true,
    url: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#2563eb" },
    { media: "(prefers-color-scheme: dark)", color: "#1e40af" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-H9JQRB2TSZ"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-H9JQRB2TSZ');
            `,
          }}
        />
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
