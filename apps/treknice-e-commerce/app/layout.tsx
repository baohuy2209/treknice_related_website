import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { TooltipProvider } from "@/components/ui/tooltip";
import { CartProvider } from "@/contexts/cart-context";
import { Toaster } from "sonner";
import Script from "next/script";
import { getCurrentSession } from "@/actions/auth";
import { SessionProvider } from "@/contexts/session-context";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TrekNice E-commerce",
  description: "Author By Nguyen Bao Huy",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { user } = await getCurrentSession();
  return (
    <html lang="en" suppressHydrationWarning>
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SessionProvider user={user}>
          <TooltipProvider>
            <CartProvider>
              <Navbar />
              {children}
              <Footer />
              <Toaster />
            </CartProvider>
          </TooltipProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
