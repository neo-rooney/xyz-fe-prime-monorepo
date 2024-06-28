import * as React from "react";
import { BoxProps } from "./Box.types";
import { clsx } from "clsx";
import { BaseStyle, StyleSprinkles } from "../../core/style.css";
import { extractSprinkleProps } from "../../utils/properties";
import { vars } from "@xyz/themes";

const Box = (props: BoxProps, ref: React.Ref<HTMLElement>) => {
  const { as = "div", children, className, style, color, bg } = props;

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
        className,
      ]),
      style: {
        ...style,
        color: color && vars.colors.$scale?.[color]?.[700],
        background: bg && vars.colors.$scale?.[bg]?.[100],
      },
    },
    children,
  );
};

const _Box = React.forwardRef(Box);
export { _Box as Box };
