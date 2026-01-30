import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Aadhaar Optimization Analysis | IIT Madras",
  description: "Data-driven analysis of India's Aadhaar system revealing ₹370 Cr inefficiencies with 6 strategic solutions delivering 8-10X ROI",
  keywords: ["Aadhaar", "Digital Identity", "Data Analysis", "IIT Madras", "Government Hackathon"],
  authors: [{ name: "IIT Madras Data Science Team" }],
  openGraph: {
    title: "Aadhaar System Optimization Analysis",
    description: "Revealing ₹370 Crore inefficiencies and roadmap to 8-10X ROI",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Aadhaar Optimization Analysis",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aadhaar System Optimization Analysis",
    description: "Data-driven solutions for India's Digital Identity Infrastructure",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
  }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        {children}
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Report",
              "name": "Aadhaar System Optimization Analysis",
              "description": "Analysis of 110M+ transactions revealing ₹370 Crore inefficiencies",
              "author": {
                "@type": "Organization",
                "name": "IIT Madras Data Science Team"
              },
              "datePublished": "2026-01-31",
              "keywords": "Aadhaar, Digital Identity, Data Analysis, India"
            })
          }}
        />
      </body>
    </html>
  );
}
