import {} from "react";
import cn from "classnames";
import * as Accordion from "@radix-ui/react-accordion";
import { Section } from "../Section/Section";

import styles from "./FAQ.module.scss";
import { Grid } from "../Grid/Grid";
import { Heading } from "../Heading/Heading";

interface Props {
  className?: string;
}

export function FAQ({ className }: Props) {
  return (
    <Section classNameInner={cn(styles.el, className)} id="faq">
      <Grid>
        <div className={styles.aside}>
          <p className={styles.eyebrow}>Frequently asked questions</p>

          <Heading as="h2" className={styles.heading}>
            Let&rsquo;s cut the noise
          </Heading>
        </div>

        <div className={styles.content}>
          <Accordion.Root
            type="single"
            collapsible
            className={styles.accordion}
          >
            <Accordion.Item value="item-1" className={styles.accordionItem}>
              <Accordion.Trigger className={styles.trigger}>
                <Heading as="h3">
                  What does &ldquo;headless&rdquo; actually mean?
                </Heading>
              </Accordion.Trigger>
              <Accordion.Content className={styles.accordionContent}>
                <div className={styles.contentInner}>
                  <p>
                    Headless means your Shopify store isn&rsquo;t limited by
                    themes or templates. The Shopify backend still handles
                    products, orders, and checkout — but the frontend is fully
                    custom-built, giving you complete control over design,
                    performance, and storytelling.
                  </p>
                </div>
              </Accordion.Content>
            </Accordion.Item>

            <Accordion.Item value="item-2" className={styles.accordionItem}>
              <Accordion.Trigger className={styles.trigger}>
                <Heading as="h3">Is this right for my brand?</Heading>
              </Accordion.Trigger>
              <Accordion.Content className={styles.accordionContent}>
                <div className={styles.contentInner}>
                  <p>
                    If your brand already has a clear identity and you care
                    deeply about how it&rsquo;s expressed online, yes. I build
                    for teams who&rsquo;ve outgrown templates — not for stores
                    chasing &ldquo;quick and cheap,&rdquo; but for those chasing
                    precision, speed, and creative freedom.
                  </p>
                </div>
              </Accordion.Content>
            </Accordion.Item>

            <Accordion.Item value="item-3" className={styles.accordionItem}>
              <Accordion.Trigger className={styles.trigger}>
                <Heading as="h3">
                  Can you also help out on an existing build?
                </Heading>
              </Accordion.Trigger>
              <Accordion.Content className={styles.accordionContent}>
                <div className={styles.contentInner}>
                  <p>
                    Yes. I often step into existing codebases — cleaning up
                    technical debt, improving performance, fixing integrations,
                    or finishing what another dev or agency started. Whether
                    it&rsquo;s headless, Hydrogen, or a hybrid setup, I can help
                    get it back on track.
                  </p>
                </div>
              </Accordion.Content>
            </Accordion.Item>

            <Accordion.Item value="item-4" className={styles.accordionItem}>
              <Accordion.Trigger className={styles.trigger}>
                <Heading as="h3">
                  Can you help me with a Shopify Liquid build?
                </Heading>
              </Accordion.Trigger>
              <Accordion.Content className={styles.accordionContent}>
                <div className={styles.contentInner}>
                  <p>
                    Absolutely. While I specialize in headless, I still take on
                    Liquid-based projects when the goal is to refine, optimize,
                    or extend an existing theme. Sometimes headless isn&rsquo;t
                    the right move yet — I&rsquo;ll help you make that call
                    based on your brand&rsquo;s stage and goals.
                  </p>
                </div>
              </Accordion.Content>
            </Accordion.Item>

            <Accordion.Item value="item-5" className={styles.accordionItem}>
              <Accordion.Trigger className={styles.trigger}>
                <Heading as="h3">How long does a project take?</Heading>
              </Accordion.Trigger>
              <Accordion.Content className={styles.accordionContent}>
                <div className={styles.contentInner}>
                  <p>
                    Most builds take 6–10 weeks depending on complexity,
                    integrations, and whether design is already in place.
                  </p>
                </div>
              </Accordion.Content>
            </Accordion.Item>

            <Accordion.Item value="item-6" className={styles.accordionItem}>
              <Accordion.Trigger className={styles.trigger}>
                <Heading as="h3">
                  Do I need to go headless from day one?
                </Heading>
              </Accordion.Trigger>
              <Accordion.Content className={styles.accordionContent}>
                <div className={styles.contentInner}>
                  <p>
                    Not necessarily. Some brands start hybrid — Shopify frontend
                    with custom sections — and evolve to headless once growth
                    demands it. I can help you assess what makes sense now
                    versus later.
                  </p>
                </div>
              </Accordion.Content>
            </Accordion.Item>

            <Accordion.Item value="item-7" className={styles.accordionItem}>
              <Accordion.Trigger className={styles.trigger}>
                <Heading as="h3">
                  Can you work with our existing designer or agency?
                </Heading>
              </Accordion.Trigger>
              <Accordion.Content className={styles.accordionContent}>
                <div className={styles.contentInner}>
                  <p>
                    Absolutely. I often collaborate directly with in-house teams
                    or creative studios. The goal is simple: translate your
                    design perfectly into code, without compromise.
                  </p>
                </div>
              </Accordion.Content>
            </Accordion.Item>

            <Accordion.Item value="item-8" className={styles.accordionItem}>
              <Accordion.Trigger className={styles.trigger}>
                <Heading as="h3">
                  What&rsquo;s included in a typical build?
                </Heading>
              </Accordion.Trigger>
              <Accordion.Content className={styles.accordionContent}>
                <div className={styles.contentInner}>
                  <p>
                    A custom Shopify frontend (React/Next.js or Hydrogen), CMS
                    setup (usually DatoCMS), seamless Shopify integration, and
                    any third-party tools you rely on — Klaviyo, Algolia, Yotpo,
                    Firmhouse, etc. Plus documentation and training for your
                    team.
                  </p>
                </div>
              </Accordion.Content>
            </Accordion.Item>

            <Accordion.Item value="item-9" className={styles.accordionItem}>
              <Accordion.Trigger className={styles.trigger}>
                <Heading as="h3">Do you offer ongoing support?</Heading>
              </Accordion.Trigger>
              <Accordion.Content className={styles.accordionContent}>
                <div className={styles.contentInner}>
                  <p>
                    Yes — post-launch retainers cover updates, optimization, and
                    new feature development. You&rsquo;ll never be locked out of
                    your own system, but you&rsquo;ll always have expert support
                    when you need it.
                  </p>
                </div>
              </Accordion.Content>
            </Accordion.Item>

            <Accordion.Item value="item-10" className={styles.accordionItem}>
              <Accordion.Trigger className={styles.trigger}>
                <Heading as="h3">How much does it cost?</Heading>
              </Accordion.Trigger>
              <Accordion.Content className={styles.accordionContent}>
                <div className={styles.contentInner}>
                  <p>
                    Every build is custom, but most projects start from 15k.
                    After the fit call, you&rsquo;ll get a transparent breakdown
                    — no surprises.
                  </p>
                </div>
              </Accordion.Content>
            </Accordion.Item>

            <Accordion.Item value="item-11" className={styles.accordionItem}>
              <Accordion.Trigger className={styles.trigger}>
                <Heading as="h3">
                  What happens during the 15-min fit call?
                </Heading>
              </Accordion.Trigger>
              <Accordion.Content className={styles.accordionContent}>
                <div className={styles.contentInner}>
                  <p>
                    No pitch, no pressure. We&rsquo;ll talk about your current
                    setup, goals, and challenges — and see if going headless
                    makes sense for your brand right now. You&rsquo;ll walk away
                    with clarity either way.
                  </p>
                </div>
              </Accordion.Content>
            </Accordion.Item>
          </Accordion.Root>
        </div>
      </Grid>
    </Section>
  );
}
