"use client";

import { Heart } from "lucide-react";
import styles from "./page.module.scss";

export default function CreativeDeveloperLanding() {
  return (
    <div>
      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.section}>
          <h1 className={styles.heading1}>
            Meaningful interactions <br />
            build memorable brands
          </h1>
          <p className={styles.paragraph}>
            I&apos;m Peter, a creative developer who builds digital experiences
            that move, literally and emotionally. In collaboration with
            designers and brands, I craft the kind of websites people feel, not
            just click.
          </p>
          <h2 className={styles.heading3}>Emotion in every Interaction</h2>
          <p className={styles.paragraph}>
            Emotion is a powerful factor in human decision-making, perception,
            and behavior. Well-crafted interactions build trust, attention, and
            loyalty. They turn visitors into customers, and customers into fans.
            When it feels right, it performs better.
          </p>
        </section>

        {/* Collaboration Section */}
        <section className={styles.section}>
          <h2 className={styles.heading2}>
            For those who
            <br />
            demand more
          </h2>
          <p className={styles.paragraph}>
            I work with brands that refuse to blend in, and designers who care
            as much about feeling as they do about form. I work with those who
            see their digital presence as an important moment to tell their
            story, share their values, and sell their product.
          </p>

          <h2 className={styles.heading3}>Built, not fitted</h2>
          <p className={styles.paragraph}>
            Templates are fast, but they all feel the same. Most brands outgrow
            them. The story, the detail and the emotion gets lost in the
            structure. You can’t build distinction from a preset. <br />
            That’s why I build from the ground up. Every element is crafted to
            fit the brand. And every animation is designed to evoke emotion.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading2}>
            What We Build <br />
            We Build Together
          </h2>
          <div>
            <p className={styles.paragraph}>
              Together we will build a digital experience where design,
              interaction, and performance come together. From expressive brand
              websites to custom Shopify stores, interactive campaigns, and
              digital platforms. Everything is crafted to feel distinct,
              intentional, and alive. Every detail matters, from the way it
              moves to how it works behind the scenes.
            </p>

            <h3 className={styles.heading3}>E-commerce</h3>
            <p className={styles.paragraph}>
              For growing brands, standard Shopify themes eventually become a
              bottleneck. They slow teams down, limit creative control, and make
              every new campaign harder to launch. What starts as a design issue
              quickly becomes a growth problem.
            </p>
            <p className={styles.paragraph}>
              I create tailor-made Shopify solutions that give your brand
              freedom to move. Custom builds that fit your vision, your team,
              and your goals. Faster launches, smoother updates, and a store
              that finally feels like you.
            </p>

            <h3 className={styles.heading3}>Corporate</h3>
            <p className={styles.paragraph}>
              Most corporate sites look alike, polished but forgettable. They
              tell people what a brand does but never show who it is. The
              emotion gets lost in static layouts, and the story never fully
              reaches the screen.
            </p>
            <p className={styles.paragraph}>
              I build expressive brand experiences that bring design and story
              to life. Interactive, seamless, and performance-focused. Crafted
              to move with intention and make a lasting impression.
            </p>

            <div className={styles.buttonRow}>
              <a
                href="mailto:info@petercoolen.com"
                className={styles.buttonPrimary}
              >
                <div>Let&apos;s work together</div>
                <span className={styles.buttonPrimaryIcon}>
                  <Heart />
                </span>
              </a>
              {/* <a href="#work" className={styles.buttonSecondary}>
              See my work
            </a> */}
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading2}>
            Trusted by brands <br />
            that move fast
          </h2>

          <p className={styles.paragraph}>
            <a href="https://www.orangefit.nl" className={styles.link}>
              Orangefit
            </a>{" "}
            is a multi-market Shopify Plus storefront built for speed and
            engagement. Instant search, localized campaigns, and integrated
            loyalty and recipe features create a connected, community-driven
            shopping experience.
          </p>

          <p className={styles.paragraph}>
            <a href="https://www.thelaundrystory.nl" className={styles.link}>
              The Laundry Story
            </a>{" "}
            runs on a headless Shopify architecture crafted for creative freedom
            and performance. Modular storytelling, elegant design, and
            effortless subscriptions deliver a seamless, conversion-focused
            journey.
          </p>

          <p className={styles.paragraph}>
            <a href="https://www.eusexua.com" className={styles.link}>
              Eusexua
            </a>{" "}
            runs on a Shopify Hydrogen architecture engineered with iiNDYVERSE
            for FKA twigs’ The Eleven. It combines livestream performance,
            blockchain-based minting, and seamless transactions to turn live art
            into a collectible digital experience.
          </p>
        </section>

        {/* Footer */}
        <footer className={styles.section}>
          <h2 className={styles.heading2}>
            Let’s craft something
            <br />
            people remember.
          </h2>
          <div>
            <p className={styles.paragraph}>
              You already know what great design looks like. Now you need it
              built with the same precision.
              <br />
              Someone who understands the nuance, protects the details, and
              brings it to life exactly as intended.
            </p>
            <p className={styles.paragraph}>
              I work as a true partner; thoughtful, proactive, and unafraid to
              speak up when it makes the work stronger.
              <br />
              Clean builds, clear communication, and craftsmanship you can
              depend on. Project after project.
            </p>

            <p className={styles.paragraph}>
              Reach out if you&rsquo;d like to discuss your next project.
              <br />
              Phone: &emsp;
              <a href="tel:+31657546027" className={styles.link}>
                +31657546027
              </a>
              <br />
              Mail: &emsp;&emsp;
              <a href="mailto:info@petercoolen.com" className={styles.link}>
                info@petercoolen.com
              </a>
            </p>

            <div className={styles.buttonRow}>
              <a
                href="mailto:info@petercoolen.com"
                className={styles.buttonPrimary}
              >
                <div>Let&apos;s work together</div>
                <span className={styles.buttonPrimaryIcon}>
                  <Heart />
                </span>
              </a>
            </div>
          </div>
        </footer>

        <section className={styles.section}>
          <p className={styles.paragraphSmall}>
            © 2025 Peter Coolen Creative Developer
            <br />
            Memorable Interactions. Meaningful Impact.
            <br />
            <br />
            Kvk: &emsp; 84017848
            <br />
            Btw: &emsp; NL003908092B27
          </p>
        </section>
      </main>

      <div className={styles.aboutFixed}>
        <a href="mailto:info@petercoolen.com" className={styles.buttonPrimary}>
          <div>Let&apos;s work together</div>
          <span className={styles.buttonPrimaryIcon}>
            <Heart />
          </span>
        </a>
      </div>
    </div>
  );
}
