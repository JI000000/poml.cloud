import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "POML Cloud — Learn, preview, and share POML",
  description: "A modern, zero-install POML sandbox and template hub.",
  metadataBase: new URL("https://poml.cloud"),
  openGraph: {
    title: "POML Cloud",
    description: "Learn, preview, and share POML in your browser.",
    url: "https://poml.cloud",
    siteName: "POML Cloud",
  },
  alternates: { canonical: "https://poml.cloud/" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-09KQ91LERM"
          strategy="afterInteractive"
        />
        <Script id="ga-gtag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);} 
            gtag('js', new Date());
            gtag('config', 'G-09KQ91LERM');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
