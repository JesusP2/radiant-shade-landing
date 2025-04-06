import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "UNACH - Acreditación | Universidad Nacional de Chimborazo",
  description: "Portal de acreditación de la Universidad Nacional de Chimborazo - Compromiso con la excelencia académica y la producción científica de calidad",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable}`}>
      <ClientBody>{children}</ClientBody>
    </html>
  );
}
