import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";
import { ThemeContextProvider } from "@/context/ThemeContext";
import { appConfig, defaultMetadataConfig } from "@/models/config";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: defaultMetadataConfig.title,
  description: defaultMetadataConfig.description,
  /* Original author must not be changed */
  authors: [{ name: appConfig.author }],
  /* Original author must not be changed */
  openGraph: {
    title: defaultMetadataConfig.title,
    description: defaultMetadataConfig.description,
    images: [{ url: defaultMetadataConfig.image }],
    url: defaultMetadataConfig.url,
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
