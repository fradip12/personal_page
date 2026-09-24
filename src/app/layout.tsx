import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fradipta Alqaiyum — Software Engineer",
  description:
    "Mobile engineer building Flutter & native apps — now exploring AI. 6+ years shipping hotel, supply-chain and AI travel products.",
  icons: {
    icon: "/images/logo.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
