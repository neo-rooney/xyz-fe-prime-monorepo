import * as React from "react";
import { BaseStyle, StyleSprinkles } from "../core/style.css";
import { vars } from "@xyz/themes";
import { clsx } from "clsx";
import { extractSprinkleProps } from "../utils/properties";
import { HeadingProps } from "./Typography.types";
import { headingStyle } from "./Typography.css";

const Heading = (props: HeadingProps, ref: React.Ref<HTMLElement>) => {
  const {
    as = "h1",
    color = "gray",
    bg,
    children,
    style,
    className,
    fontSize,
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
        headingStyle({
          fontSize,
        }),
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

const _Heading = React.forwardRef(Heading);
export { _Heading as Heading };
