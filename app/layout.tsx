import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeContextProvider } from "@/context/ThemeContext";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { defaultSeoConfig } from "@/models/config";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: defaultSeoConfig.title,
  description: defaultSeoConfig.description,
  openGraph: {
    title: defaultSeoConfig.title,
    description: defaultSeoConfig.description,
    images: [{ url: defaultSeoConfig.image }],
    url: defaultSeoConfig.url,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeContextProvider>
          <Header />
          {children}
          <Footer />
        </ThemeContextProvider>
      </body>
    </html>
  );
}
