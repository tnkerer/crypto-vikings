import { Metadata } from "next";
import "../globals.scss";

export const metadata: Metadata = {
  title: "CryptoVikings",
  description: "CryptoVikings official website.",
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
  )
}
