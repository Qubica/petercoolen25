import {} from "react";
import cn from "classnames";
import { Section } from "../Section/Section";

import styles from "./WhatIDeliver.module.scss";
import { Grid } from "../Grid/Grid";
import { Heading } from "../Heading/Heading";
import { ButtonPrimary } from "../ButtonPrimary/ButtonPrimary";

interface Props {
  className?: string;
}

export function WhatIDeliver({ className }: Props) {
  return (
    <Section
      className={styles.el}
      classNameInner={cn(styles.inner, className)}
      id="promise"
    >
      <div className={styles.background} />
      <div className={styles.background2} />

      <Grid>
        <div className={styles.aside}>
          <Heading as="h2" className={styles.heading}>
            Get a Store That&rsquo;s Built For Your Brand.
          </Heading>
        </div>

        <div className={styles.content}>
          <p className={styles.intro}>
            Most storefronts start with a template and ask your brand to fit in.
            We do the opposite. We build around your brand, exactly as
            it&rsquo;s meant to show up.
          </p>

          <p>
            Every detail is crafted to reflect the identity you&rsquo;ve
            invested in. From the way the homepage flows, to how the product
            story unfolds, to the micro-interactions that make it feel alive.
            Nothing gets lost in translation. No compromises on layout, story,
            or experience. If it&rsquo;s in your design system, it&rsquo;s in
            the final build. Just as intended.
          </p>

          <p>
            The result is a store that feels cohesive from first scroll to
            checkout. It builds trust, deepens engagement, and gives your team
            control without breaking the design. No more developer bottlenecks.
            No more &ldquo;we can&rsquo;t do that.&rdquo; Just a storefront that
            feels unmistakably you, and works as well as it looks.
          </p>

          <a href="mailto:info@petercoolen.com">
            <ButtonPrimary label="Build my store" />
          </a>
        </div>
      </Grid>
    </Section>
  );
}
