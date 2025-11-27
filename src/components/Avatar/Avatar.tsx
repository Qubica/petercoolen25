"use client";

import { useRef } from "react";
import cn from "classnames";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Observer } from "gsap/Observer";
import { useGSAP } from "@gsap/react";

import { animated, useSpring } from "@react-spring/web";

import styles from "./Avatar.module.scss";
import { Mail } from "lucide-react";

gsap.registerPlugin(useGSAP, ScrollTrigger, Observer);

interface Props {
  className?: string;
}

export function Avatar({ className }: Props) {
  const container = useRef<HTMLDivElement>(null);

  const [springStyles, api] = useSpring(() => ({
    y: 0,
    config: {
      mass: 5,
      friction: 50,
      tension: 100,
    },
  }));

  useGSAP(
    () => {
      let targetScrollSpeed = 0;

      Observer.create({
        target: window,
        type: "scroll",
        onChangeY: (self) => {
          targetScrollSpeed = self.deltaY;
        },
      });

      // Create organic easing with gsap ticker
      gsap.ticker.add(() => {
        if (targetScrollSpeed < -100) {
          targetScrollSpeed = -100;
        }

        if (targetScrollSpeed > 100) {
          targetScrollSpeed = 100;
        }

        api.start({ y: -targetScrollSpeed });

        targetScrollSpeed *= 0.9;
        if (targetScrollSpeed < 0.001) targetScrollSpeed = 0;
      });
    },
    { scope: container }
  );

  return (
    <animated.div
      ref={container}
      className={cn(styles.el, className)}
      style={springStyles}
    >
      <a
        href="mailto:petercoolen.com"
        className={styles.link}
        aria-label="Send me an email"
      >
        <Mail />
      </a>
    </animated.div>
  );
}
