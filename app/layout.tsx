import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Dream Home Infrastructures | Construction & Interior Design in Hyderabad",
  description:
    "Dream Home Infrastructures is Hyderabad's premier construction and interior design company. We specialize in residential, commercial, and villa construction with over 12 years of experience.",
  keywords: [
    "construction company hyderabad",
    "interior design hyderabad",
    "building contractors",
    "residential construction",
    "commercial construction",
    "villa construction",
    "2D design",
    "3D design",
    "3D walkthrough",
    "dream home infrastructures",
  ],
  authors: [{ name: "Dream Home Infrastructures" }],
  openGraph: {
    title: "Dream Home Infrastructures | Construction & Interior Design",
    description:
      "Building your dreams into reality. Trusted construction and interior design company in Hyderabad since 2012.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-body antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
