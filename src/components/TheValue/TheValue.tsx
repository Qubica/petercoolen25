import {} from "react";
import cn from "classnames";
import { Section } from "../Section/Section";

import styles from "./TheValue.module.scss";
import { Grid } from "../Grid/Grid";
import { Heading } from "../Heading/Heading";

interface Props {
  className?: string;
}

export function TheValue({ className }: Props) {
  return (
    <Section classNameInner={cn(styles.el, className)} id="value">
      <Grid>
        <div className={styles.aside}>
          <Heading as="h2" className={styles.heading}>
            Expect to Unlock your brand’s full potential
          </Heading>
          <div className={styles.content}>
            <p className={styles.intro}>
              Start to remove friction and flatten bottlenecks. <br />
              Build a store that actually works the way your brand and team do.
            </p>
          </div>
        </div>

        <div className={styles.item1}>
          <Heading as="h3">Increased Conversion</Heading>

          <p>
            When your storefront looks, feels, and functions like your brand,
            people trust it faster. Headless Shopify stores consistently see
            conversion lifts of 20–30% because the experience is seamless — from
            first scroll to checkout. Every pixel works harder, every visitor
            feels understood.
          </p>
        </div>
        <div className={styles.item2}>
          <Heading as="h3">Revenue Growth</Heading>

          <p>
            Headless doesn’t just make things prettier. It makes them perform.
            By turning existing traffic into higher-value customers, brands
            often see 15–25% revenue growth without spending more on ads. It’s
            efficiency, not expansion, driving the gain.
          </p>
        </div>
        <div className={styles.item3}>
          <Heading as="h3">Faster Launches</Heading>

          <p>
            Creative ideas shouldn’t wait in a queue. A headless setup frees
            marketing teams to launch campaigns, product drops, and landing
            pages in half the time. Fewer handoffs. Less back-and-forth. More
            speed between inspiration and impact.
          </p>
        </div>

        <div className={styles.item4}>
          <Heading as="h3">Faster Creative Iteration</Heading>

          <p>
            Small changes shouldn’t break your store. Headless gives you a
            flexible, component-based system. So testing, learning, and evolving
            your experience happens three times faster. That agility compounds:
            faster learning equals faster growth.
          </p>
        </div>
        <div className={styles.item5}>
          <Heading as="h3">Lower Maintenance Costs</Heading>

          <p>
            By decoupling the front and back ends, updates become lighter,
            faster, and safer. You’re no longer rebuilding the whole house just
            to move a wall. Less developer dependency, fewer rebuilds, lower
            long-term costs.
          </p>
        </div>
        <div className={styles.item6}>
          <Heading as="h3">Increased Customer Retention</Heading>

          <p>
            When every touchpoint feels familiar and frictionless, customers
            return. A headless architecture keeps your design, story, and
            experience consistent across every channel; store, app, and
            campaign. That consistency builds trust that brings people back.
            More speed between inspiration and impact.
          </p>
        </div>
      </Grid>
    </Section>
  );
}
