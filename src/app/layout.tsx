import type { Metadata } from "next";
import "./globals.css";
import "./fonts.css";

export const metadata: Metadata = {
  title: "Nails By Kate",
  description:
    "Profesjonell neglservice med kreative design og kvalitetsprodukter. Book time for manikyr, pedikyr og neglekunst hos Katerina.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-brand-CreamPink font-primary">
      <body className={` antialiased flex justify-center`}>{children}</body>
    </html>
  );
}
