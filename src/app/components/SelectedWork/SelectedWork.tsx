import {} from "react";
import cn from "classnames";
import { Section } from "../Section/Section";

import { Grid } from "../Grid/Grid";
import { Heading } from "../Heading/Heading";
import Image from "next/image";

import styles from "./SelectedWork.module.scss";
import { ButtonPrimary } from "../ButtonPrimary/ButtonPrimary";

interface Props {
  className?: string;
}

export function SelectedWork({ className }: Props) {
  return (
    <Section classNameInner={cn(styles.el, className)} id="work">
      <Grid>
        <div className={styles.aside}>
          <Heading as="h2" className={styles.heading}>
            Trusted by brands that move fast.
          </Heading>
        </div>

        <div className={styles.item1}>
          <div className={styles.itemAside}>
            <Image
              className={styles.logo}
              src="/assets/brands/logo-orangefit.svg"
              alt="Logo Orangefit"
              width={200}
              height={44}
            />

            <p>
              Orangefit is a multilingual Shopify Plus platform built for speed
              and engagement. Instant search, localized campaigns, and
              integrated loyalty and recipe features create a connected,
              community-driven shopping experience.
            </p>

            <a href="https://www.orangefit.nl">
              <ButtonPrimary label="View Project" />
            </a>
          </div>

          <Image
            className={styles.media}
            src="/assets/brands/thumbnail-orangefit.jpg"
            alt=""
            width={600}
            height={600}
          />
        </div>
        <div className={styles.item2}>
          <div className={styles.itemAside}>
            <Image
              className={styles.logo}
              src="/assets/brands/logo-the-laundry-story.png"
              alt="Logo The Laundry Story"
              width={634}
              height={192}
            />

            <p>
              The Laundry Story runs on a headless Shopify architecture crafted
              for creative freedom and performance. Modular storytelling,
              elegant design, and effortless subscriptions deliver a seamless,
              conversion-focused journey.
            </p>

            <a href="https://www.thelaundrystory.nl">
              <ButtonPrimary label="View Project" />
            </a>
          </div>

          <Image
            className={styles.media}
            src="/assets/brands/thumbnail-the-laundry-story.png"
            alt=""
            width={2048}
            height={2048}
          />
        </div>

        <div className={styles.item3}>
          <div className={styles.itemAside}>
            <Image
              className={styles.logo}
              src="/assets/brands/logo-eusexua.svg"
              alt="Logo Eusexua"
              width={200}
              height={41}
            />

            <p>
              Eusexua runs on a Hydrogen architecture engineered with iiNDYVERSE
              for FKA twigs’ The Eleven. It combines livestream performance,
              blockchain-based minting, and seamless transactions to turn live
              art into a collectible digital experience.
            </p>

            <a href="https://eusexua.fkatwi.gs">
              <ButtonPrimary label="View Project" />
            </a>
          </div>

          <Image
            className={styles.media}
            src="/assets/brands/thumbnail-eusexua.jpg"
            alt=""
            width={600}
            height={600}
          />
        </div>
      </Grid>
    </Section>
  );
}
