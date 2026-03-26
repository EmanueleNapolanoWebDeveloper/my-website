import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/UI/Navbar";
import Footer from "@/components/UI/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: 'EN Web Developer',
    template: '%s | EN Web Developer',
  },
  description:
    'Sviluppatore web freelance specializzato in siti web, e-commerce e applicazioni su misura per PMI. Preventivo gratuito.',
  keywords: ['web developer', 'freelance', 'siti web', 'e-commerce', 'Next.js', 'Laravel', 'SEO', 'PMI'],
  authors: [{ name: 'EN Web Developer' }],
  creator: 'EN Web Developer',
  metadataBase: new URL('https://enwebdeveloper.it'),
  openGraph: {
    type: 'website',
    locale: 'it_IT',
    siteName: 'EN Web Developer',
    title: 'EN Web Developer',
    description: 'Sviluppatore web freelance specializzato in siti web, e-commerce e applicazioni su misura per PMI.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EN Web Developer',
    description: 'Sviluppatore web freelance specializzato in siti web, e-commerce e applicazioni su misura per PMI.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="it"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
