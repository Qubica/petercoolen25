import type { Metadata } from "next";
import "@/styles/main.scss";
import { Inter } from "next/font/google";
import { BannerController } from "../components/CookieConstent/BannerController";
import { GA4Consent } from "../components/Analytics/Ga4Consent";
import { Avatar } from "@/components/Avatar/Avatar";

export const metadata: Metadata = {
  title: "Peter Coolen Creative Developer",
  description:
    "I'm a creative developer who builds digital experiences that move, literally and emotionally. In collaboration with designers and brands, I craft the kind of websites people feel, not just click.",
  keywords: [
    "Shopify",
    "Headless",
    "E-commerce",
    "Developer",
    "Hydrogen",
    "Creative",
    "Web animations",
    "Next.js",
    "React",
  ],
  authors: [{ name: "Peter Coolen" }],
  openGraph: {
    title: "Peter Coolen Creative Developer",
    description: "Meaningful interactions build memorable brands",
    type: "website",
  },
};

// Initialize the Figtree font
const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <div className="main">{children}</div>

        <Avatar />

        <BannerController />
        {/* Analytics will load on client only if allowed */}
        {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS && (
          <GA4Consent gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
        )}
      </body>
    </html>
  );
}
