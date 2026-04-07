import { siteConfig } from "./seo";

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": `${siteConfig.url}/#business`,
        name: siteConfig.name,
        alternateName: "Fino",
        url: siteConfig.url,
        telephone: siteConfig.phoneRaw,
        email: siteConfig.email,
        image: `${siteConfig.url}/images/og/homepage.svg`,
        priceRange: "$$$",
        address: {
          "@type": "PostalAddress",
          streetAddress: siteConfig.address.street,
          addressLocality: siteConfig.address.city,
          addressRegion: siteConfig.address.state,
          postalCode: siteConfig.address.zip,
          addressCountry: "US",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 37.2358,
          longitude: -121.9624,
        },
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          description: "By appointment only",
        },
        areaServed: siteConfig.areaServed,
        hasMap: "https://maps.google.com/?q=20+S+Santa+Cruz+Ave+Los+Gatos+CA",
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "5",
          reviewCount: "47",
          bestRating: "5",
        },
        sameAs: [
          "https://www.google.com/maps/place/By+Fino",
          "https://www.yelp.com/biz/by-fino-los-gatos",
        ],
      },
      {
        "@type": "ClothingStore",
        "@id": `${siteConfig.url}/#store`,
        name: "Fino Bespoke Tailoring",
        description:
          "Premier bespoke tailoring atelier in Los Gatos, California. Custom suits for weddings, galas, corporate, and casual suiting. Serving the Bay Area.",
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Custom Suit Services",
          itemListElement: [
            {
              "@type": "Offer",
              name: "Custom Wedding Suits",
              description: "Bespoke wedding suits for grooms and groomsmen. Starting at $2,400.",
              price: "2400",
              priceCurrency: "USD",
            },
            {
              "@type": "Offer",
              name: "Bespoke Suits",
              description: "Fully bespoke suits for any occasion. Starting at $2,400.",
              price: "2400",
              priceCurrency: "USD",
            },
          ],
        },
      },
    ],
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function contactPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Book a Consultation — Fino Los Gatos",
    description: "Book a complimentary bespoke consultation at Fino in Los Gatos, CA.",
  };
}
