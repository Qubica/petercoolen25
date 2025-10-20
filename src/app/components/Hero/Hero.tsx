import {} from "react";
import cn from "classnames";
import { Section } from "../Section/Section";
import { Grid } from "../Grid/Grid";

import styles from "./Hero.module.scss";
import { Heading } from "../Heading/Heading";

interface Props {
  className?: string;
}

export function Hero({ className }: Props) {
  return (
    <Section classNameInner={cn(styles.el, className)}>
      <Grid>
        <Heading as="h1" className={styles.heading}>
          Shopify experiences that
          <br />
          connect brand, story & conversion.
        </Heading>

        <p className={styles.subheading}>
          We build Headless Shopify stores that give your team creative freedom.
          <br />
          <em>Faster launches. Stronger stories. Better results.</em>
        </p>

        <div className={styles.footer}>
          <a href="#work">See what we can do for you</a>
        </div>
      </Grid>
    </Section>
  );
}
