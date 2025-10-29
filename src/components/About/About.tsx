import {} from "react";
import cn from "classnames";
import { Section } from "../Section/Section";

import styles from "./About.module.scss";
import { Grid } from "../Grid/Grid";
import { Heading } from "../Heading/Heading";

interface Props {
  className?: string;
}

export function About({ className }: Props) {
  return (
    <Section classNameInner={cn(styles.el, className)} id="about">
      <Grid>
        <div className={styles.aside}>
          <Heading as="h2" className={styles.heading}>
            We believe every interaction is an opportunity to tell your story.
          </Heading>
        </div>

        <div className={styles.content}>
          <p className={styles.intro}>
            We help brands and designers bring their vision to life online. With
            custom storefronts that don&rsquo;t just work, they feel right. We
            obsess over the little things: how it moves, how it flows, how it
            feels to shop. And perfecting funnels that convert.
          </p>

          <p>
            We&rsquo;re especially drawn to premium, story-driven brands — the
            ones that care about beauty, detail, and craft. If that&rsquo;s you,
            we&rsquo;ll get along great.
          </p>

          <p>
            This isn&rsquo;t about flexing code or chasing trends. It&rsquo;s
            about building digital experiences that do your brand justice. And
            make your products feel as good online as they do in real life.
          </p>
        </div>
      </Grid>
    </Section>
  );
}
