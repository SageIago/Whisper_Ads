import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";
import { Inter, Roboto } from "next/font/google"

export const metadata: Metadata = {
  title: "Whisper Ads",
  description: "Whisper is a platform that allows you to monetize your WhatsApp status. Whether you're an advertiser looking to promote your product or an agent looking to earn money, Whisper has got you covered.",
};

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700"],
  variable: "--font-Roboto"
})

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-inter"
})

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
