import { ElementType } from "react";
import cn from "classnames";
import { Figtree } from "next/font/google";

import styles from "./Heading.module.scss";

// Initialize the Figtree font
const figtree = Figtree({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-figtree",
});

interface Props {
  as: ElementType;
  children?: React.ReactNode;
  className?: string;
}

export function Heading({ className, as, children }: Props) {
  const Tag = as;

  return (
    <Tag className={cn(styles.el, figtree.className, className)}>
      {children}
    </Tag>
  );
}
