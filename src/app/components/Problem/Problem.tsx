import {} from "react";
import cn from "classnames";
import { Section } from "../Section/Section";

import styles from "./Problem.module.scss";
import { Grid } from "../Grid/Grid";
import { Heading } from "../Heading/Heading";

interface Props {
  className?: string;
}

export function Problem({ className }: Props) {
  return (
    <Section classNameInner={cn(styles.el, className)} id="challenge">
      <Grid>
        <div className={styles.aside}>
          <Heading as="h2" className={styles.heading}>
            Your brand’s potential is stuck in the template.
          </Heading>
        </div>

        <div className={styles.content}>
          <p className={styles.intro}>
            You’ve worked hard to create your brand. Every detail crafted to
            mean something. But the moment it hits your Shopify template, it
            loses its edge. Your store looks like everyone else’s, and that
            sameness costs you. Every visitor who doesn’t feel what makes your
            brand special is a potential sale that never happens. It’s not about
            vanity, it’s about value. When customers can’t connect, they click
            away, and that’s revenue gone before you even know it.
          </p>

          <p>
            What’s worse is how those small compromises pile up. You delay a
            launch because your theme can’t handle the layout you imagined. You
            hold off on an idea because it’ll “break” the template. You run ads
            that send traffic to a page you don’t really love. The truth is,
            every creative limitation becomes a financial one. Staying inside
            the box might feel safe, but it’s quietly expensive.
          </p>
        </div>
      </Grid>
    </Section>
  );
}
