import {} from "react";
import cn from "classnames";
import { Section } from "../Section/Section";

import styles from "./Footer.module.scss";
import { Grid } from "../Grid/Grid";

interface Props {
  className?: string;
}

export function Footer({ className }: Props) {
  return (
    <Section
      className={cn(styles.el, className)}
      classNameInner={cn(styles.inner, className)}
    >
      <Grid>
        <div className={styles.content}>
          <div className={styles.item}>Peter Coolen Creative Developer</div>
          <div className={styles.item}>info@petercoolen.com</div>
          <div className={styles.item}>KVK: 84017848</div>
          <div className={styles.item}>BTW: NL003908092B27</div>
          <div className={styles.item}>
            <a href="/terms">Terms & Conditions</a>
          </div>
        </div>
      </Grid>
    </Section>
  );
}
