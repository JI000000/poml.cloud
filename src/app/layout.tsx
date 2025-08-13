import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import Link from "next/link";
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
        <div className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-background/60 bg-background/90 border-b border-black/10 dark:border-white/10">
          <div className="mx-auto max-w-6xl px-4 h-14 flex items-center justify-between">
            <Link href="/" className="text-sm font-semibold">POML Cloud</Link>
            <nav className="flex items-center gap-4 text-sm">
              <Link href="/docs" className="hover:underline">Docs</Link>
              <Link href="/templates" className="hover:underline">Templates</Link>
              <Link href="/sandbox" className="hover:underline">Sandbox</Link>
            </nav>
          </div>
        </div>
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
        <main className="mx-auto max-w-6xl px-4">{children}</main>
        <footer className="mt-16 px-4 py-10 text-sm opacity-70 border-t border-black/10 dark:border-white/10">
          <div className="mx-auto max-w-6xl flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <span>Not affiliated with Microsoft.</span>
              <a className="underline ml-2" href="https://microsoft.github.io/poml/latest/" target="_blank">Docs</a>
              <a className="underline ml-3" href="https://github.com/microsoft/poml" target="_blank">GitHub</a>
            </div>
            <div className="flex gap-4">
              <Link className="hover:underline" href="/docs">Docs</Link>
              <Link className="hover:underline" href="/templates">Templates</Link>
              <Link className="hover:underline" href="/sandbox">Sandbox</Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
