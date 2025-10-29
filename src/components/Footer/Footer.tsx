import {} from "react";
import cn from "classnames";
import { Section } from "../Section/Section";

import styles from "./Footer.module.scss";
import { Grid } from "../Grid/Grid";
import { ButtonPrimary } from "../ButtonPrimary/ButtonPrimary";

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
          <div className={styles.item}>
            Want to create something great together?
            <a href="mailto:info@petercoolen.com">
              <ButtonPrimary label="Let's work together" />
            </a>
          </div>

          <div className={styles.item}>
            <ul>
              <li>
                <a href="/about">Challenge</a>
              </li>
              <li>
                <a href="/services">Promise</a>
              </li>
              <li>
                <a href="/contact">Value</a>
              </li>
              <li>
                <a href="/contact">Work</a>
              </li>
              <li>
                <a href="/contact">About</a>
              </li>
              <li>
                <a href="/contact">FAQ</a>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.content}>
          <div className={styles.itemLogo}>
            Peter Coolen
            <br />
            Creative Developer
          </div>
          <div className={styles.item}>
            <a href="/terms">Terms & Conditions</a>
          </div>
          <div className={styles.item}>
            <a href="/terms">Privacy Policy</a>
          </div>
          {/* <div className={styles.item}>KVK: 84017848</div>
          <div className={styles.item}>BTW: NL003908092B27</div> */}
          <div className={styles.item}>©2025 Peter Coolen</div>
        </div>
      </Grid>
    </Section>
  );
}
