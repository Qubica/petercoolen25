import {} from "react";
import cn from "classnames";
import { Section } from "../Section/Section";
import { Grid } from "../Grid/Grid";

import styles from "./Hero.module.scss";
import { Heading } from "../Heading/Heading";
import { ButtonPrimary } from "../ButtonPrimary/ButtonPrimary";

interface Props {
  className?: string;
}

export function Hero({ className }: Props) {
  return (
    <Section className={styles.el} classNameInner={cn(styles.inner, className)}>
      <div className={styles.background} />

      <Grid>
        <Heading as="h1" className={styles.heading}>
          Shopify experiences <br />
          that connect brand, <br />
          story & conversion.
        </Heading>

        <p className={styles.subheading}>
          We build Headless Shopify stores that give your team creative freedom.
          Faster launches. Stronger stories. Better results.
        </p>

        <div className={styles.footer}>
          <a href="#work">
            <ButtonPrimary label="See what we can do for you" />
          </a>
        </div>

        <div className={styles.benefits}>
          <span>Increase conversions</span>
          <span>Grow revenue</span>
          <span>Reduce time-to-market</span>
        </div>
      </Grid>
    </Section>
  );
}
