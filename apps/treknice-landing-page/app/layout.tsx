import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "TrekNice — Trang bị cho trekking và đi phượt.",
  description:
    "TrekNice – Trang bị cho trekking và đi phượt, được thiết kế để đồng hành cùng bạn trên mọi cung đường.",
  generator: "v0.app",
  alternates: {
    canonical: "https://treknice.example/",
  },
  openGraph: {
    siteName: "TrekNice",
    title: "TrekNice — Trang bị cho trekking và đi phượt.",
    description:
      "TrekNice – Trang bị cho trekking và đi phượt, được thiết kế để đồng hành cùng bạn trên mọi cung đường.",
    type: "website",
    url: "https://treknice.example/",
    images: [
      {
        url: "/hero-section/image1.png",
        alt: "TrekNice - Trang bị cho trekking và đi phượt.",
        width: 1200,
        height: 630,
      },
    ],
    locale: "vi_VN",
  },
  twitter: {
    card: "summary_large_image",
    title: "TrekNice — Trang bị cho trekking và đi phượt.",
    description:
      "TrekNice – Trang bị cho trekking và đi phượt, được thiết kế để đồng hành cùng bạn trên mọi cung đường.",
    images: [
      {
        url: "/hero-section/image1.png",
        alt: "TrekNice - Trang bị cho trekking và đi phượt.",
      },
    ],
    site: "@treknice",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <head>
        {/* Google Analytics 4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-CDHJK3E1XW"
          strategy="afterInteractive"
        />
        <Script id="ga4" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-CDHJK3E1XW', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
      </head>
      <body className="font-sans bg-neutral-50 text-neutral-900 overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
