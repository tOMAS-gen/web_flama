import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "Cartelería e Identidad Empresarial en Mendoza | FLAMA",
    template: "%s | FLAMA",
  },
  description:
    "Carteles 3D iluminados, ploteo vehicular, vinilos y neón para tu negocio. Taller propio, instalación incluida. Toda Mendoza. Consultá por WhatsApp.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://flamastudio.ar"
  ),
  openGraph: {
    siteName: "FLAMA",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL ?? "https://flamastudio.ar"}/api/og`,
        width: 1200,
        height: 630,
        type: "image/png",
        alt: "FLAMA — Carteles 3D, Neón, Vinilo, Gráfica en Mendoza",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [
      `${process.env.NEXT_PUBLIC_SITE_URL ?? "https://flamastudio.ar"}/api/og`,
    ],
  },
  other: {
    "theme-color": "#7C3AED",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${jakarta.variable} antialiased`}>
      <body className="min-h-screen flex flex-col font-sans">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-white"
        >
          Ir al contenido
        </a>
        <Header />
        <main id="main-content" className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
