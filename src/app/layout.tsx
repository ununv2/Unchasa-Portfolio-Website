import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Unchasa Portfolio",
  description: "Portfolio website for Unchasa Chen",
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
