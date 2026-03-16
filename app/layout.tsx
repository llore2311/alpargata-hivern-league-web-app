import type { Metadata } from "next";
import { Bebas_Neue, Space_Grotesk } from "next/font/google";
import { Header } from "@/components/Header";
import "./globals.css";

const titleFont = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-title"
});

const bodyFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-body"
});

export const metadata: Metadata = {
  title: "Alpargata Hivern - Torneo de Baloncesto",
  description: "Web oficial del torneo de baloncesto Alpargata Hivern."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${titleFont.variable} ${bodyFont.variable}`}>
        <div className="background-layer" />
        <div className="background-accent background-accent-one" />
        <div className="background-accent background-accent-two" />
        <div className="app-shell">
          <Header />
          <main className="main-content">{children}</main>
        </div>
      </body>
    </html>
  );
}
