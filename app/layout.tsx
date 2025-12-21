import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import WhatsAppButton from "@/components/whatsapp-button";

export const metadata: Metadata = {
  metadataBase: new URL('https://dreamhomeinfrastructures.com'),
  title: {
    default: "Dream Home Infrastructures | Construction & Interior Design in Hyderabad",
    template: "%s | Dream Home Infrastructures"
  },
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
    "GHMC approved contractors",
    "house construction hyderabad",
    "apartment builders hyderabad",
  ],
  authors: [{ name: "Dream Home Infrastructures" }],
  creator: "Dream Home Infrastructures",
  publisher: "Dream Home Infrastructures",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Dream Home Infrastructures | Construction & Interior Design",
    description:
      "Building your dreams into reality. Trusted construction and interior design company in Hyderabad since 2012. GHMC Licensed.",
    type: "website",
    locale: "en_IN",
    url: "https://dreamhomeinfrastructures.com",
    siteName: "Dream Home Infrastructures",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dream Home Infrastructures - Construction & Interior Design",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dream Home Infrastructures | Hyderabad Construction Company",
    description: "Building your dreams into reality since 2012. Residential, Commercial & Villa Construction.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your Google Search Console verification code here
    // google: 'your-google-verification-code',
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
        <WhatsAppButton />
      </body>
    </html>
  );
}
