import { Metadata } from "next";
// import { CookieSettingsPage } from "@/components/cookie-consent/cookie-settings-page";

export const metadata: Metadata = {
  title: "Cookie Settings",
  description: "Manage your cookie preferences",
};

export default function Page() {
  return (
    <div className="container mx-auto py-8">
      {/* Consent state is handled entirely in the client component */}
      {/* <CookieSettingsPage currentConsent={null} /> */}
    </div>
  );
}
