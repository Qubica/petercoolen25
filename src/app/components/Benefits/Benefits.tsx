import {} from "react";
import cn from "classnames";
import { Section } from "../Section/Section";

import styles from "./Benefits.module.scss";
import { Grid } from "../Grid/Grid";
import { Heading } from "../Heading/Heading";

interface Props {
  className?: string;
}

export function Benefits({ className }: Props) {
  return (
    <Section classNameInner={cn(styles.el, className)}>
      <Grid>
        <div className={styles.item1}>
          <Heading as="h3" className={styles.value}>
            20%
          </Heading>
          <p className={styles.unit}>increase in conversions</p>
        </div>

        <div className={styles.item2}>
          <Heading as="h3" className={styles.value}>
            15%{" "}
          </Heading>
          <p className={styles.unit}>growth in revenue</p>
        </div>

        <div className={styles.item3}>
          <Heading as="h3" className={styles.value}>
            50%
          </Heading>
          <p className={styles.unit}>reduction in time-to-market</p>
        </div>

        <p className={styles.content}>
          Based on:{" "}
          <a href="https://gitnux.org/headless-commerce-statistics/">
            Headless Commerce Statistics 2025
          </a>
        </p>
      </Grid>
    </Section>
  );
}
