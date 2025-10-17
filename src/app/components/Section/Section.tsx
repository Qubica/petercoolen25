import {} from "react";
import cn from "classnames";

import styles from "./Section.module.scss";

interface Props {
  id?: string;
  className?: string;
  classNameInner?: string;
  children?: React.ReactNode;
}

export function Section({ className, classNameInner, children, id }: Props) {
  return (
    <div className={cn(styles.el, className)} id={id}>
      <div className={cn(styles.inner, classNameInner)}>{children}</div>
    </div>
  );
}
