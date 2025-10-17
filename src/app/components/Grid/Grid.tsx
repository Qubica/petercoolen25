import {} from "react";
import cn from "classnames";

import styles from "./Grid.module.scss";

interface Props {
  className?: string;
  children?: React.ReactNode;
}

export function Grid({ className, children }: Props) {
  return <div className={cn(styles.el, className)}>{children}</div>;
}
