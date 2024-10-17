import type { Metadata } from "next";
import "./globals.css";
import {Roboto, Inter} from "next/font/google"
import { ReactNode } from "react";

const roboto = Roboto({
  style: "normal",
  weight: ["100", "300", "400", "500", "700"],
  variable: "--font-Roboto"
})
const inter = Inter({
  style: "normal",
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-inter"
})

export const metadata: Metadata = {
  title: "Whisper Ads",
  description: "Whisper is a platform that allows you to monetize your WhatsApp status. Whether you're an advertiser looking to promote your product or an agent looking to earn money, Whisper has got you covered.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${roboto.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
