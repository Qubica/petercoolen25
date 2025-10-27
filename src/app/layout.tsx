import type { Metadata } from "next";
import "@/styles/main.scss";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Figtree, Inter, Lato, Open_Sans } from "next/font/google";

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
        <div className="main">
          {/* <Header /> */}
          {children}
          {/* <Footer /> */}
        </div>
      </body>
    </html>
  );
}
