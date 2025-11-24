import { Heart } from "lucide-react";
import styles from "./page.module.scss";
import { JsonLdSystem } from "@/components/JsonLd/JsonLdSystem";
import Link from "next/link";

export default function Landing() {
  return (
    <div>
      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.section}>
          <h1 className={styles.heading1}>
            One brand. One system. <br />
            Everywhere
          </h1>
          <p className={styles.paragraph}>
            Stop letting templates, plugins, and page builders dilute your
            brand. I build custom digital systems where every interaction speaks
            in a single, unmistakable brand voice.
          </p>

          <p className={styles.paragraph}>
            I help brands and designers move beyond off-the-shelf themes and
            stitched-together plugins, into unified digital experiences that
            feel intentional, coherent, and completely on-brand. The kind of
            experiences people remember and{" "}
            <Link href={"/"} className={styles.link}>
              like to interact with
            </Link>
            .
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading2}>
            Fragmented Tools, Fragmented Brand
          </h2>
          <p className={styles.paragraph}>
            The more tools you add, the less your brand feels like itself.
          </p>
          <p className={styles.paragraph}>
            Most digital stacks grow sideways, not up. A Shopify theme here, a
            page builder there, a plugin for the cart, a popup tool for emails,
            a different system for landing pages. Each one comes with its own
            styles, interactions, and opinions.
          </p>
          <p className={styles.paragraph}>
            Individually, they seem harmless. Together, they quietly erode your
            brand. Buttons look and behave differently across pages. Spacing and
            typography shift from tool to tool. Animations feel random instead
            of intentional. New features “bolt on” instead of blend in.
          </p>
          <h3 className={styles.heading3}>The result?</h3>
          <p className={styles.paragraph}>
            Your site stops feeling like one brand and starts feeling like a
            patchwork of vendors.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading2}>
            When your brand voice fades, so does trust.
          </h2>
          <p className={styles.paragraph}>
            People don’t consciously say, “This plugin doesn’t match the global
            design system.” They just feel that something’s off.
          </p>

          <p className={styles.paragraph}>
            The experience feels less premium. The journey feels less
            considered. The story feels less clear.
          </p>

          <p className={styles.paragraph}>
            That small disconnect shows up as: Lower trust. Lower perceived
            quality. Lower conversion. Fewer people remembering you.
          </p>

          <p className={styles.paragraph}>
            Your brand has spent years defining a unique voice, story, and
            visual language. Templates and plugins weren’t designed for your
            voice. So over time, they mute it.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading2}>You need a system</h2>
          <div>
            <p className={styles.paragraph}>
              You don’t need another plugin but a custom designed system that
              touches everything.
            </p>
            <p className={styles.paragraph}>
              Instead of bending your brand around tools, we flip it. We start
              from your brand, its story, tone, and visual language, and build a
              tailored design & interaction system that powers every part of
              your digital experience.
            </p>

            <p className={styles.paragraph}>
              One set of components. One interaction language. One motion style.
              One typography and spacing rhythm.
            </p>

            <p className={styles.paragraph}>
              From product pages to popups, from cart to content pages:
              everything pulls from the same source of truth.
            </p>

            <p className={styles.paragraph}>
              Your brand stops being interpreted differently by each tool and
              starts expressing itself consistently, everywhere.
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading2}>
            From patchwork <br />
            to precision.
          </h2>
          <h3 className={styles.heading3}>Step 1: Brand Deep Dive</h3>
          <p className={styles.paragraph}>
            We map out how your brand should feel online. Not just colors and
            fonts, but tempo, weight, personality, and emotion. What should a
            scroll, a hover, a tap feel like?
          </p>

          <h3 className={styles.heading3}>Step 2: System Design</h3>
          <p className={styles.paragraph}>
            We translate that into a reusable digital language. Components and
            layouts. Motion principles. States and micro-interactions. Rules for
            spacing, typography, and hierarchy.
          </p>

          <h3 className={styles.heading3}>Step 3: Custom Build</h3>
          <p className={styles.paragraph}>
            I implement the system in a clean, performant build.{" "}
            <Link className={styles.link} href="/bespoke-shopify-solutions">
              Custom Shopify themes
            </Link>{" "}
            or{" "}
            <Link className={styles.link} href="/bespoke-shopify-solutions">
              headless storefronts
            </Link>
            . Brand websites and platforms. Interactive experiences and
            campaigns.
          </p>

          <h3 className={styles.heading3}>Step 4: Extend & Evolve</h3>
          <p className={styles.paragraph}>
            As your brand grows, the system grows with you. New features plug
            into the same foundation. So your brand never becomes a collage
            again.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading2}>
            This is for brands that refuse to look like everyone else.
          </h2>
          <h3 className={styles.heading3}>
            A unified brand system is a good fit if:
          </h3>
          <div>
            <p className={styles.paragraph}>
              You’ve outgrown generic themes and drag-and-drop builders. Your
              site feels mismatched from page to page. Every new feature
              requires wrestling with conflicting tools. You care about
              emotional impact as much as performance. You want someone who
              protects the nuance of your brand instead of overwriting it.
            </p>

            <p className={styles.paragraph}>
              Whether you’re a growing e-commerce brand or a design-driven
              company, this is for you when your digital presence doesn’t fully
              match your brand.
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading2}>What you get</h2>
          <div>
            <p className={styles.paragraph}>
              When everything speaks the same brand language.
            </p>

            <p className={styles.paragraph}>
              <strong>A coherent brand experience</strong> Every touchpoint
              feels like it comes from the same mind.
            </p>

            <p className={styles.paragraph}>
              <strong>A premium perception</strong> Consistency signals care,
              care signals quality, and quality builds trust.
            </p>

            <p className={styles.paragraph}>
              <strong>A flexible foundation</strong> New ideas plug into the
              system instead of requiring duct-taped tools.
            </p>

            <p className={styles.paragraph}>
              <strong>A site that finally “feels like you”</strong> Not like a
              lightly edited version of a template used by thousands.
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading2}>
            Let’s repair the gaps in your brand
          </h2>

          <div>
            <p className={styles.paragraph}>
              If your digital experience doesn’t fully reflect who you are. If
              it’s been slowly pulled apart by templates and plugins. We can fix
              that.
            </p>

            <p className={styles.paragraph}>
              We’ll build a system that brings your brand back to the center of
              everything.
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
        </section>

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
          <div>Let&apos;s work together</div>
          <span className={styles.buttonPrimaryIcon}>
            <Heart />
          </span>
        </a>
      </div> */}

      <JsonLdSystem />
    </div>
  );
}
