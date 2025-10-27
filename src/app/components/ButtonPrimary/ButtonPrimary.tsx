import {} from "react";
import cn from "classnames";
import { Section } from "../Section/Section";

import styles from "./ButtonPrimary.module.scss";

interface Props {
  className?: string;
  label?: React.ReactNode;
}

export function ButtonPrimary({ className, label }: Props) {
  return <span className={cn(styles.el, className)}>{label}</span>;
}
