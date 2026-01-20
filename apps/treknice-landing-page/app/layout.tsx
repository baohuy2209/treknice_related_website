import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/opengraph-katachi.jpg-7vz2r3hxZA6woukGOmH115Fg7Piyjs.jpeg",
        alt: "TrekNice design furniture — timeless pieces, architected in Belgium",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_BE",
  },
  twitter: {
    card: "summary_large_image",
    title: "TrekNice — Trang bị cho trekking và đi phượt.",
    description:
      "TrekNice – Trang bị cho trekking và đi phượt, được thiết kế để đồng hành cùng bạn trên mọi cung đường.",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/opengraph-katachi.jpg-7vz2r3hxZA6woukGOmH115Fg7Piyjs.jpeg",
        alt: "TrekNice – Trang bị cho trekking và đi phượt, được thiết kế để đồng hành cùng bạn trên mọi cung đường.",
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
      <body className="font-sans bg-neutral-50 text-neutral-900 overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
