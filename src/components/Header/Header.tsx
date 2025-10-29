import {} from "react";
import cn from "classnames";
import { Section } from "../Section/Section";

import styles from "./Header.module.scss";
import { Grid } from "../Grid/Grid";
import { ButtonPrimary } from "../ButtonPrimary/ButtonPrimary";

interface Props {
  className?: string;
}

export function Header({ className }: Props) {
  return (
    <Section
      className={cn(styles.el, className)}
      classNameInner={cn(styles.inner, className)}
    >
      <Grid>
        <div className={styles.logo}>
          <a className={styles.link} href="#">
            Cool&
          </a>
        </div>

        <div className={styles.navigation}>
          <a className={styles.link} href="#challenge">
            Challenge
          </a>
          <a className={styles.link} href="#promise">
            Promise
          </a>
          <a className={styles.link} href="#value">
            Value
          </a>
          <a className={styles.link} href="#work">
            Work
          </a>
          <a className={styles.link} href="#about">
            About
          </a>
          <a className={styles.link} href="#faq">
            FAQ
          </a>
        </div>

        <div className={styles.cta}>
          <a className={styles.link} href="mailto:info@petercoolen.com">
            <ButtonPrimary label="Contact" />
          </a>
        </div>
      </Grid>
    </Section>
  );
}
