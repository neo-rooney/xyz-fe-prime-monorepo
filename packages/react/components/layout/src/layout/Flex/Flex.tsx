import * as React from "react";
import { clsx } from "clsx";
import { vars } from "@xyz/themes";
import { BaseStyle, StyleSprinkles } from "../../core/style.css";
import { extractSprinkleProps } from "../../utils/properties";
import { FlexProps } from "./Flex.types";

const Flex = (props: FlexProps, ref: React.Ref<HTMLElement>) => {
  const {
    as = "div",
    color,
    bg,
    align,
    basis,
    direction,
    grow,
    justify,
    shrink,
    wrap,
    gap,
    children,
  } = props;

  return React.createElement(
    as,
    {
      ...props,
      ref,
      className: clsx([
        BaseStyle,
        StyleSprinkles(
          extractSprinkleProps(props, Array.from(StyleSprinkles.properties)),
        ),
        props.className,
      ]),
      style: {
        display: "flex",
        alignItems: align,
        justifyContent: justify,
        flexDirection: direction,
        flexWrap: wrap,
        flexGrow: grow,
        flexShrink: shrink,
        flexBasis: basis,
        gap,
        color: color && vars.colors.$scale?.[color]?.[700],
        background: bg && vars.colors.$scale?.[bg]?.[100],
        ...props.style,
      },
    },
    children,
  );
};

const _Flex = React.forwardRef(Flex);
export { _Flex as Flex };
