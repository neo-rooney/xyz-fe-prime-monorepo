import { CSSProperties } from "@vanilla-extract/css";
import { BoxProps } from "../Box";

export type FlexProps = {
  align?: CSSProperties["alignItems"];
  basis?: CSSProperties["flexBasis"];
  direction?: CSSProperties["flexDirection"];
  grow?: CSSProperties["flexGrow"];
  justify?: CSSProperties["justifyContent"];
  shrink?: CSSProperties["flexShrink"];
  wrap?: CSSProperties["flexWrap"];
  gap?: CSSProperties["gap"];
} & BoxProps;
