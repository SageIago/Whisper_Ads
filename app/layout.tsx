import type { Metadata } from "next";
import "./globals.css";
import {Roboto, Inter} from "next/font/google"


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
  description: "Unlock the Power of WhatsApp Marketing. Advertise to thousands or monetize your status updates with Whisper.io.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
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
