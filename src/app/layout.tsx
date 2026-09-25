import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fradipta Alqaiyum — Software Engineer (Mobile)",
  description:
    "Mobile engineer for Flutter and SwiftUI — now exploring AI orchestration to accelerate development. 6+ years shipping hotel, supply-chain and AI travel products.",
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
