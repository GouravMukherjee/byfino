export const siteConfig = {
  name: "Fino — By Fino Bespoke Tailoring",
  shortName: "Fino",
  url: "https://byfino.com",
  phone: "(408) 641-0025",
  phoneRaw: "+14086410025",
  email: "contact@byfino.com",
  address: {
    street: "20 S Santa Cruz Ave, Suite 204b",
    city: "Los Gatos",
    state: "CA",
    zip: "95030",
    full: "20 S Santa Cruz Ave, Suite 204b, Los Gatos, CA 95030",
  },
  hours: "7 Days a Week · By Appointment Only",
  tagline: "Built for the room you're walking into.",
  defaultDescription:
    "Fino is Los Gatos's premier bespoke tailoring atelier. Custom suits for weddings, galas, and corporate life. Serving San Jose, Saratoga, Palo Alto & the Bay Area. Book your consultation.",
  defaultOgImage: "/images/og/homepage.svg",
  areaServed: [
    "Los Gatos, CA",
    "San Jose, CA",
    "Saratoga, CA",
    "Campbell, CA",
    "Palo Alto, CA",
    "Cupertino, CA",
    "Gilroy, CA",
    "Salinas, CA",
    "Silicon Valley, CA",
  ],
};

export function buildMetadata({
  title,
  description,
  canonical,
  ogImage,
  keywords,
}: {
  title: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  keywords?: string;
}) {
  return {
    title,
    description: description ?? siteConfig.defaultDescription,
    keywords,
    alternates: {
      canonical: canonical ?? siteConfig.url,
    },
    openGraph: {
      title,
      description: description ?? siteConfig.defaultDescription,
      url: canonical ?? siteConfig.url,
      siteName: siteConfig.name,
      images: [{ url: ogImage ?? siteConfig.defaultOgImage, width: 1200, height: 630 }],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: description ?? siteConfig.defaultDescription,
      images: [ogImage ?? siteConfig.defaultOgImage],
    },
  };
}
