import type { Metadata } from "next";
import { Cinzel, Libre_Baskerville, Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/ui/CustomCursor";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
});

const libre = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-libre",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Golden Rain Productions | From Execution to Creation",
  description: "Golden Rain Productions - Led by Producer Vijay Jagarlamudi. Premier Line Production house in Hyderabad since 2005. Producer of Khudiram Bose. The Clear Choice for Production.",
  keywords: ["film production", "line production", "Hyderabad", "Telugu films", "Tamil films", "Bollywood", "Vijay Jagarlamudi", "Khudiram Bose"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cinzel.variable} ${libre.variable} ${montserrat.variable} ${playfair.variable} antialiased`}
      >
        <CustomCursor />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
