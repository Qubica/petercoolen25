"use client";
import { useState } from "react";
import { setCookieConsent } from "@/app/lib/client-cookie-utils";

import styles from "./CookieBanner.module.scss";
import { Ban, Cookie } from "lucide-react";

interface CookieBannerProps {
  showBanner: boolean;
}

export function CookieBanner({ showBanner }: CookieBannerProps) {
  // const [showSettings, setShowSettings] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  if (!showBanner) return null;

  const handleAcceptAll = () => {
    setIsProcessing(true);
    setCookieConsent({
      essential: true,
      analytics: true,
      consentGiven: true,
    });
    setIsProcessing(false);
  };

  const handleRejectAll = () => {
    setIsProcessing(true);
    setCookieConsent({
      essential: true,
      analytics: false,
      consentGiven: true,
    });
    setIsProcessing(false);
  };

  // if (showSettings) {
  //   return (
  //     <CookieSettings
  //       onBack={() => setShowSettings(false)}
  //       onClose={() => setShowSettings(false)}
  //     />
  //   );
  // }

  return (
    <div className={styles.el}>
      <div>
        <p className={styles.paragraph}>
          This site uses cookies to keep the experience fast, secure, and
          pleasantly sweet.
        </p>
        <div className={styles.buttons}>
          <button
            className={styles.button}
            onClick={handleRejectAll}
            disabled={isProcessing}
          >
            <span>Reject</span>
            {/* <Ban /> */}
          </button>
          <button
            className={styles.buttonPrimary}
            onClick={handleAcceptAll}
            disabled={isProcessing}
          >
            <span>Accept</span>
            <Cookie />
          </button>
        </div>
        {/* <button onClick={() => setShowSettings(true)} disabled={isProcessing}>
          Cookie Settings
        </button> */}
      </div>
    </div>
  );
}
