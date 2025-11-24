import { Heart } from "lucide-react";
import styles from "./page.module.scss";
import { JsonLdShopify } from "../../components/JsonLd/JsonLdShopify";

export default function Landing() {
  return (
    <div>
      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.section}>
          <h1 className={styles.heading1}>
            Where every click <br />
            feels like your brand
          </h1>
          <p className={styles.paragraph}>
            The most memorable brands are built on experiences that resonate. I
            believe the difference is in the details. Those subtle moments that
            spark emotion and make your store feel unforgettable.
            <br />
            I&apos;m Peter, a creative developer who helps brands move beyond
            the ordinary with headless flagship stores and tailor-made
            solutions. My focus is on crafting digital journeys that feel alive,
            authentic, and unmistakably yours.
          </p>
          <h2 className={styles.heading3}>Designing for connection</h2>
          <p className={styles.paragraph}>
            True connection happens when technology and emotion work together.
            With a headless approach, your Shopify store becomes a canvas for
            meaningful interactions. Each one designed to turn your customers
            into loyal fans.
          </p>

          <div className={styles.card}>
            <h2 className={styles.heading3}>
              The importance of your website in the age of Artificial
              Intelligence
            </h2>
            <p className={styles.paragraph}>
              In a world where social media and AI are always shifting, your
              website is the one place you truly own. It’s where your story,
              your values, and your vision come together without compromise.
              Social channels are great for discovery, but your site is where
              curiosity turns into connection, and connection turns into
              loyalty. That’s why I believe investing in your own digital home
              is more important than ever.
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading2}>
            When does going custom make sense?
          </h2>
          <p className={styles.paragraph}>
            Building or rebuilding a custom storefront is a big decision. It is
            not always the answer to every challenge, but when the time is
            right, it unlocks real advantages. A custom build gives you full
            control over your brand experience, performance, and future growth.
            You are no longer limited by Shopify&apos;s constraints.
          </p>
          <h3 className={styles.heading3}>When is it the right move?</h3>
          <p className={styles.paragraph}>
            When your current setup is holding you back. Maybe you cannot launch
            new features, expand internationally, or personalize the experience
            for your customers. A custom storefront can be the key to unlocking
            your next stage of growth. It is also the right call when technical
            limitations are hurting conversions, or when maintaining your old
            system takes more energy than building something new. When your site
            is stitched together with workarounds and you are spending more time
            fixing than improving. Then it is time to consider a custom
            solution.
          </p>
          <h3 className={styles.heading3}>When should you wait?</h3>
          <p className={styles.paragraph}>
            Not every problem needs a full rebuild. If your conversion rate is
            flat, start by testing and optimizing. If your site just looks
            outdated, a design refresh can go a long way. And do not get
            distracted by what competitors are doing or by the latest technology
            trends. The best reason to go custom is when it directly supports
            your business goals and delivers a clear return on investment.
          </p>
          <div className={styles.card}>
            <p className={styles.paragraph}>
              The smartest strategy is to get clear on what your business really
              needs. If you want to talk through your options and figure out the
              best move forward,{" "}
              <a className={styles.link} href="mailto:info@petercoolen.com">
                I’m here to help.
              </a>
            </p>
          </div>
        </section>

        {/* Collaboration Section */}
        <section className={styles.section}>
          <h2 className={styles.heading2}>
            For brands who <br />
            demand more
          </h2>
          <p className={styles.paragraph}>
            I collaborate with ambitious brands and designers who see their
            online store as more than just a sales channel. Together, we create
            platforms that tell your story, showcase your products, and reflect
            your values with every interaction.
          </p>

          <h2 className={styles.heading3}>Custom solutions for growth</h2>
          <p className={styles.paragraph}>
            Off the shelf themes can only take you so far. As your brand grows,
            you need a store that adapts to your vision and business needs. With
            headless Shopify, we build from the ground up, ensuring every
            element supports your goals and delivers a memorable experience.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading2}>
            Build your store <br />
            your way
          </h2>
          <div>
            <p className={styles.paragraph}>
              Let&apos;s create a Shopify store where design, performance, and
              flexibility come together. From immersive landing pages to high
              converting product pages and custom integrations, everything is
              tailored to your needs. Every animation, transition, and feature
              is designed to feel intentional and alive.
            </p>

            <h3 className={styles.heading3}>Ecommerce without limits</h3>
            <p className={styles.paragraph}>
              Standard Shopify themes can slow you down and restrict your
              creativity. With a headless approach, you gain full control over
              your storefront, enabling faster launches, easier updates, and a
              shopping experience that truly represents your brand.
            </p>
            <p className={styles.paragraph}>
              I deliver custom Shopify builds that empower your team, streamline
              workflows, and help you grow without compromise.
            </p>

            <h3 className={styles.heading3}>Enterprise ready</h3>
            <p className={styles.paragraph}>
              Many corporate sites look similar and lack personality. I help you
              create a digital presence that stands out, combining expressive
              design with robust performance. Your story and values come to life
              through interactive features and a seamless user journeys.
            </p>
            <p className={styles.paragraph}>
              Every project is crafted for reliability, scalability, and a
              lasting impression.
            </p>

            <div className={styles.buttonRow}>
              <a
                href="mailto:info@petercoolen.com"
                className={styles.buttonPrimary}
              >
                <div>Let&apos;s build your store</div>
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
            Here are a few examples of how custom solutions have helped them
            stand out and grow.
          </p>

          <div className={styles.card}>
            <p className={styles.paragraph}>
              <a href="https://www.orangefit.nl" className={styles.link}>
                Orangefit
              </a>{" "}
              is a multi-market Shopify Plus storefront built for speed and
              engagement. Instant search, localized campaigns, and integrated
              loyalty and recipe features create a connected, community-driven
              shopping experience.
            </p>
          </div>

          <div className={styles.card}>
            <p className={styles.paragraph}>
              <a href="https://www.thelaundrystory.nl" className={styles.link}>
                The Laundry Story
              </a>{" "}
              runs on a headless Shopify architecture crafted for creative
              freedom and performance. Modular storytelling, elegant design, and
              effortless subscriptions deliver a seamless, conversion-focused
              journey.
            </p>
          </div>

          <div className={styles.card}>
            <p className={styles.paragraph}>
              <a href="https://eusexua.fkatwi.gs" className={styles.link}>
                Eusexua
              </a>{" "}
              runs on a Shopify Hydrogen architecture engineered with iiNDYVERSE
              for FKA twigs’ The Eleven. It combines livestream performance,
              blockchain-based minting, and seamless transactions to turn live
              art into a collectible digital experience.
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className={styles.section}>
          <h2 className={styles.heading2}>
            Ready to transform <br />
            your online presence?
          </h2>
          <div>
            <p className={styles.paragraph}>
              You know what great design looks like. Now let&apos;s build it
              with the same attention to detail and technical excellence. I
              bring your vision to life with clean code, clear communication,
              and a focus on results.
            </p>
            <p className={styles.paragraph}>
              As your partner, I&apos;m proactive, thoughtful, and committed to
              making every project a success. From first concept to final
              launch, you can count on craftsmanship and reliability.
            </p>

            <div className={styles.buttonRow}>
              <a
                href="mailto:info@petercoolen.com"
                className={styles.buttonPrimary}
              >
                <div>Let&apos;s build your store</div>
                <span className={styles.buttonPrimaryIcon}>
                  <Heart />
                </span>
              </a>
            </div>
          </div>
        </footer>

        <section className={styles.section}>
          <p className={styles.paragraph}>
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

      {/* <div className={styles.aboutFixed}>
        <a href="mailto:info@petercoolen.com" className={styles.buttonPrimary}>
          <div>Let&apos;s build your store</div>
          <span className={styles.buttonPrimaryIcon}>
            <Heart />
          </span>
        </a>
      </div> */}

      <JsonLdShopify />
    </div>
  );
}
