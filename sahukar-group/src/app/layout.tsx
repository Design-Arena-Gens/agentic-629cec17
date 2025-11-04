import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Sahukar Group | All Problem, One Solution",
  description:
    "Sahukar Group delivers premium personal and business services across Indore and beyond. Trusted solutions across housing, finance, legal, and technology.",
  keywords: [
    "Sahukar Group",
    "business services",
    "Indore professional services",
    "Krishna Sahukar",
    "corporate solutions",
  ],
  authors: [{ name: "Sahukar Group" }],
  openGraph: {
    title: "Sahukar Group | All Problem, One Solution",
    description:
      "From home to business, Sahukar Group delivers trustworthy, end-to-end services under one roof.",
    url: "https://agentic-629cec17.vercel.app",
    siteName: "Sahukar Group",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} font-sans antialiased`}>
        <div className="bg-grid">
          <div className="bg-radial-overlay" />
          <div className="relative flex min-h-screen flex-col">{children}</div>
        </div>
      </body>
    </html>
  );
}
