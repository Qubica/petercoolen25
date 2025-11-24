"use server";

export async function JsonLdSystem() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://petercoolen.com/#website",
        url: "https://petercoolen.com/",
        name: "Peter Coolen Creative Developer",
        inLanguage: "en",
        sameAs: [
          "https://www.linkedin.com/in/peter-coolen/",
          "https://medium.com/@petercoolen",
        ],
      },
      {
        "@type": "WebPage",
        "@id": "https://petercoolen.com/headless-shopify/#webpage",
        url: "https://petercoolen.com/headless-shopify/",
        name: "Where every click feels like your brand",
        headline: "Where every click feels like your brand",
        description:
          "Peter is a creative developer helping brands move beyond the ordinary with headless Shopify. He crafts digital journeys that feel alive, authentic, and unmistakably yours—where every detail sparks emotion and builds connection.",
        inLanguage: "en",
        about: {
          "@id": "https://petercoolen.com/#person",
        },
      },
      {
        "@type": "Person",
        "@id": "https://petercoolen.com/#person",
        name: "Peter Coolen",
        jobTitle: "Creative Developer",
        description:
          "I help brands create digital experiences that feel alive and authentic. My focus is on meaningful interactions, emotional resonance, and building memorable brands with headless Shopify.",
        url: "https://petercoolen.com/",
        email: "info@petercoolen.com",
        telephone: "+31657546027",
        worksFor: {
          "@id": "https://petercoolen.com/#brand",
        },
        knowsAbout: [
          "Creative development",
          "Web animations",
          "Interactive campaigns",
          "Shopify custom development",
          "E-commerce performance",
          "Headless commerce",
          "Brand websites",
        ],
      },
      {
        "@type": "Organization",
        "@id": "https://petercoolen.com/#brand",
        name: "Peter Coolen Creative Developer",
        url: "https://petercoolen.com/",
        founder: {
          "@id": "https://petercoolen.com/#person",
        },
        contactPoint: [
          {
            "@type": "ContactPoint",
            contactType: "sales",
            email: "info@petercoolen.com",
            telephone: "+31657546027",
            availableLanguage: ["en", "nl"],
          },
        ],
        identifier: [
          {
            "@type": "PropertyValue",
            propertyID: "KVK",
            value: "84017848",
          },
          {
            "@type": "PropertyValue",
            propertyID: "BTW",
            value: "NL003908092B27",
          },
        ],
        slogan: "Where every click feels like your brand.",
      },
      {
        "@type": "OfferCatalog",
        "@id": "https://petercoolen.com/#services",
        name: "How I help brands grow",
        itemListElement: [
          {
            "@type": "Offer",
            name: "Headless Shopify Stores",
            itemOffered: {
              "@type": "Service",
              serviceType: "Custom headless Shopify development",
              provider: { "@id": "https://petercoolen.com/#person" },
              description:
                "Bespoke Shopify builds for brands that want more than a template. Fast, flexible, and designed to feel unmistakably yours.",
            },
          },
          {
            "@type": "Offer",
            name: "Expressive Brand Sites",
            itemOffered: {
              "@type": "Service",
              serviceType: "Creative development for brand websites",
              provider: { "@id": "https://petercoolen.com/#person" },
              description:
                "Interactive, seamless, and performance-focused experiences that bring your story and values to life.",
            },
          },
        ],
        url: "https://petercoolen.com/#services",
      },
      {
        "@type": "ItemList",
        "@id": "https://petercoolen.com/#work",
        name: "Selected Work",
        itemListOrder: "http://schema.org/ItemListOrderAscending",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            item: {
              "@type": "CreativeWork",
              name: "Orangefit — Shopify Plus Storefront",
              description:
                "Custom Shopify Plus storefront built for speed and engagement. Instant search, localized campaigns, and integrated loyalty programs for a connected shopping experience.",
            },
          },
          {
            "@type": "ListItem",
            position: 2,
            item: {
              "@type": "CreativeWork",
              name: "The Laundry Story — Headless Shopify",
              description:
                "Headless Shopify architecture for creative freedom and high performance. Modular storytelling, elegant design, and seamless subscriptions for a conversion-focused journey.",
            },
          },
          {
            "@type": "ListItem",
            position: 3,
            item: {
              "@type": "CreativeWork",
              name: "Eusexua — Shopify Hydrogen for FKA twigs’ The Eleven",
              description:
                "Shopify Hydrogen and custom integrations for a unique digital experience. Live performance, blockchain minting, and seamless transactions turn art into a collectible journey.",
            },
          },
        ],
      },
      {
        "@type": "CreativeWork",
        "@id": "https://petercoolen.com/#cta",
        name: "Let’s build your flagship store",
        text: "Ready to create a digital home that feels unmistakably yours? Clean builds, clear communication, and craftsmanship you can depend on. Reach out to discuss your next project.",
        creator: { "@id": "https://petercoolen.com/#person" },
        inLanguage: "en",
        potentialAction: {
          "@type": "CommunicateAction",
          target: ["info@petercoolen.com", "tel:+31657546027"],
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
      }}
    />
  );
}
