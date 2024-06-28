import { AsElementProps, StyleProps } from "../core/types";
import { CSSProperties } from "@vanilla-extract/css";
import { classes } from "@xyz/themes";

export type TextProps = AsElementProps &
  StyleProps & {
    align?: CSSProperties["textAlign"];
    casing?: CSSProperties["textTransform"];
    decoration?: CSSProperties["textDecoration"];
    fontSize: keyof typeof classes.typography.text;
  };
