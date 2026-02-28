import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

const fontHeading = Outfit({
  subsets: ["latin", "latin-ext"],
  variable: "--font-heading",
  display: "swap",
});

const fontBody = Plus_Jakarta_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "WebZaTyzden | Váš nový web. Hotový. Za týždeň.",
    template: "%s | WebZaTyzden"
  },
  description: "Sme digitálna agentúra, ktorá mení pravidlá hry v tvorbe webov. Vďaka nášmu unikátnemu prístupu 'jeden klient naraz' doručujeme profesionálne, SEO optimalizované stránky s bleskovou rýchlosťou bez kompromisov v kvalite.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk" className={`${fontHeading.variable} ${fontBody.variable}`}>
      <body className="antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}