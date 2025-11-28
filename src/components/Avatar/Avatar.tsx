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
    scaleX: 1,
    scaleY: 1,
    config: {
      tension: 120,
      friction: 14,
    },
  }));

  useGSAP(
    () => {
      let currentSmoothedValue = 0;

      const deltaYHistory: number[] = [];
      const maxHistoryLength = 5;

      Observer.create({
        target: window,
        type: "scroll",

        onChangeY: (self) => {
          // Just collect the raw deltaY value
          deltaYHistory.push(self.deltaY);

          // Keep only last 10 values
          if (deltaYHistory.length > maxHistoryLength) {
            deltaYHistory.shift();
          }
        },
        onStop: () => {
          deltaYHistory.length = 0; // Clear history on stop
          currentSmoothedValue = 0;
        },
      });

      // Process smoothing in ticker
      gsap.ticker.add(() => {
        if (deltaYHistory.length === 0) {
          // No scroll activity, return to 0

          api.start({ y: 0, scaleX: 1, scaleY: 1 });
          return;
        }

        // Need at least 3 values to remove min/max
        if (deltaYHistory.length < 3) {
          currentSmoothedValue = deltaYHistory[deltaYHistory.length - 1];
        } else {
          // Create temp array and sort
          const tempArray = [...deltaYHistory].sort((a, b) => a - b);

          // Remove highest and lowest values
          tempArray.shift(); // Remove lowest
          tempArray.pop(); // Remove highest

          // Calculate average
          currentSmoothedValue =
            tempArray.reduce((sum, val) => sum + val, 0) / tempArray.length;
        }

        const y = gsap.utils.clamp(
          -100,
          100,
          gsap.utils.mapRange(-100, 100, -100, 100, currentSmoothedValue)
        );

        const scaleX = gsap.utils.clamp(
          0.9,
          1.1,
          gsap.utils.mapRange(0, 100, 1, 0.9, Math.abs(currentSmoothedValue))
        );
        const scaleY = gsap.utils.clamp(
          0.9,
          1.3,
          gsap.utils.mapRange(0, 100, 1, 1.3, Math.abs(currentSmoothedValue))
        );

        api.start({ y: -y, scaleX: scaleX, scaleY: scaleY });
      });
    },
    { scope: container }
  );

  return (
    <div className={cn(styles.el, className)}>
      <animated.div
        className={styles.wrapper}
        ref={container}
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
    </div>
  );
}
