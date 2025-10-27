import {} from "react";
import cn from "classnames";
import Image from "next/image";
import { Section } from "../Section/Section";
import { Grid } from "../Grid/Grid";

import styles from "./LogoMarquee.module.scss";
import { Heading } from "../Heading/Heading";

interface Props {
  className?: string;
}

const logos = [
  { name: "Shopify", src: "/assets/logos/shopify.svg" },
  { name: "Next.js", src: "/assets/logos/nextjs.svg" },
  { name: "DatoCMS", src: "/assets/logos/datocms.svg" },
  { name: "Klaviyo", src: "/assets/logos/klaviyo.svg" },
  { name: "Algolia", src: "/assets/logos/algolia.svg" },
  { name: "Yotpo", src: "/assets/logos/yotpo.svg" },
  { name: "Vercel", src: "/assets/logos/vercel.svg" },
  { name: "Netlify", src: "/assets/logos/netlify.svg" },
  { name: "OpenAI", src: "/assets/logos/openai.svg" },
];

export function LogoMarquee({ className }: Props) {
  return (
    <Section classNameInner={cn(styles.el, className)}>
      <Grid>
        <Heading as="h2" className={styles.heading}>
          Built with best-in-class tools
        </Heading>

        <div className={styles.marquee}>
          <div className={styles.marqueeTrack}>
            {/* First set of logos */}
            {logos.map((logo, index) => (
              <div key={`first-${index}`} className={styles.logoItem}>
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={100}
                  height={40}
                  className={styles.logo}
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {logos.map((logo, index) => (
              <div key={`second-${index}`} className={styles.logoItem}>
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={100}
                  height={40}
                  className={styles.logo}
                />
              </div>
            ))}
          </div>
        </div>
      </Grid>
    </Section>
  );
}
