"use server";

export async function JsonLd() {
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
        "@id": "https://petercoolen.com/#webpage",
        url: "https://petercoolen.com/",
        name: "Meaningful Interactions. Build Memorable Brands",
        headline: "Meaningful interactions build memorable brands",
        description:
          "Peter is a creative developer crafting emotive, high-performance digital experiences, From expressive brand sites to custom Shopify builds and interactive campaigns.",
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
          "I build digital experiences that move, literally and emotionally. I collaborate with designers and brands to craft websites people feel, not just click.",
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
        slogan: "Memorable Interactions. Meaningful Impact.",
      },
      {
        "@type": "OfferCatalog",
        "@id": "https://petercoolen.com/#services",
        name: "What We Build — We Build Together",
        itemListElement: [
          {
            "@type": "Offer",
            name: "E-commerce — Custom Shopify",
            itemOffered: {
              "@type": "Service",
              serviceType: "Custom Shopify development",
              provider: { "@id": "https://petercoolen.com/#person" },
              description:
                "Tailor-made Shopify solutions for speed, creative freedom, and growth: faster launches, smoother updates, and a store that finally feels like you.",
            },
          },
          {
            "@type": "Offer",
            name: "Corporate — Expressive Brand Sites",
            itemOffered: {
              "@type": "Service",
              serviceType: "Creative development for brand websites",
              provider: { "@id": "https://petercoolen.com/#person" },
              description:
                "Interactive, seamless, performance-focused brand experiences that bring design and story to life and make a lasting impression.",
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
                "Multi-market Shopify Plus storefront built for speed and engagement with instant search, localized campaigns, and integrated loyalty and recipe features.",
            },
          },
          {
            "@type": "ListItem",
            position: 2,
            item: {
              "@type": "CreativeWork",
              name: "The Laundry Story — Headless Shopify",
              description:
                "Headless Shopify architecture for creative freedom and performance. Modular storytelling, elegant design, and effortless subscriptions for a conversion-focused journey.",
            },
          },
          {
            "@type": "ListItem",
            position: 3,
            item: {
              "@type": "CreativeWork",
              name: "Eusexua — Shopify Hydrogen for FKA twigs’ The Eleven",
              description:
                "Hydrogen architecture engineered with iiNDYVERSE combining livestream performance, blockchain minting, and seamless transactions to turn live art into a collectible digital experience.",
            },
          },
        ],
      },
      {
        "@type": "CreativeWork",
        "@id": "https://petercoolen.com/#cta",
        name: "Let’s craft something people remember",
        text: "Clean builds, clear communication, and craftsmanship you can depend on. Reach out to discuss your next project.",
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
