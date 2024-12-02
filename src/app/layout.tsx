import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "solo un chico tranquilo",
  description: "Sólo un generador de tipos tranquilos",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "solo un chico tranquilo",
    description: "Sólo un generador de tipos tranquilos.",
    url: "https://guy-chill.vercel.app",
    images: ["opengraph-image.png"],
    type: "website",
    locale: "es_AR",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-ar" className={inter.variable} suppressHydrationWarning>
      <body className="antialiased overflow-hidden">
        <div className="fixed left-0 top-0 -z-10  h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]" />

        {children}
      </body>
    </html>
  );
}