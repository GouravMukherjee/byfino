import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import { siteConfig } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: "Custom Suits & Bespoke Tailoring in Los Gatos | Fino",
  description:
    "Fino is Los Gatos's premier bespoke tailoring atelier. Custom suits for weddings, galas, and corporate life. Serving San Jose, Saratoga, Palo Alto & the Bay Area. Book your consultation.",
  keywords:
    "custom suits Los Gatos, bespoke tailoring Los Gatos, custom suits San Jose, wedding suits Bay Area, bespoke suit Silicon Valley, tailored suits Saratoga, custom tailor Campbell",
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
