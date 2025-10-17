import type { Metadata } from "next";
import "@/styles/main.scss";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";

export const metadata: Metadata = {
  title: "Peter Coolen - Headless Shopify Developer",
  description:
    "I build headless Shopify stores that give your team creative freedom. Faster launches. Stronger stories. Better results.",
  keywords: [
    "Shopify",
    "Headless",
    "E-commerce",
    "Developer",
    "Next.js",
    "React",
  ],
  authors: [{ name: "Peter Coolen" }],
  openGraph: {
    title: "Peter Coolen - Headless Shopify Developer",
    description: "Shopify experiences that connect brand, story & conversion.",
    type: "website",
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
        <div className="main">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
