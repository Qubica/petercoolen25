import {} from "react";
import cn from "classnames";
import { Section } from "../Section/Section";

import styles from "./HowWeWork.module.scss";
import { Grid } from "../Grid/Grid";
import { Heading } from "../Heading/Heading";

interface Props {
  className?: string;
}

export function HowWeWork({ className }: Props) {
  return (
    <Section classNameInner={cn(styles.el, className)}>
      <Grid>
        <div className={styles.aside}>
          <Heading as="h2" className={styles.heading}>
            Flexible collaboration that fits your team
          </Heading>
        </div>

        <div className={styles.content}>
          <p className={styles.intro}>
            Every brand comes with its own setup. Whether you&rsquo;ve got a
            designer on board or need one brought in, we adapt to fit your
            needs.
          </p>
        </div>

        <div className={styles.item1}>
          <Heading as="h3">For brands with in-house designers</Heading>
          <p>
            You work with an in-house designer. We collaborate directly with
            them to translate the vision into code without compromise. No
            bloated builds. No broken layouts. Just clean, accurate execution.
          </p>
        </div>

        <div className={styles.item2}>
          <Heading as="h3">For brands without designers</Heading>
          <p>
            No designer? No problem. We partner with a tight-knit network of
            top-tier creatives. We&rsquo;ll match you with someone who gets your
            vibe, and we&rsquo;ll lead the process to ensure everything stays
            sharp, seamless, and aligned.
          </p>
        </div>

        <div className={styles.item3}>
          <Heading as="h3">For agencies and designers</Heading>
          <p>
            You&rsquo;re an agency ordesigner looking to bring your vision to
            life. We partner to build out your concepts without compromise.
            We&rsquo;ll handle the technical side, so you can focus on what you
            do best: designing great experiences.
          </p>
        </div>
      </Grid>
    </Section>
  );
}
