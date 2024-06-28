import * as React from "react";
import { vars } from "@xyz/themes";
import { DividerProps } from "./Divider.types";

const Divider = (props: DividerProps, ref: React.Ref<HTMLHRElement>) => {
  const {
    color = "gray",
    variant = "solid",
    size = 1,
    orientation = "horizontal",
  } = props;

  const borderStyle =
    orientation === "horizontal"
      ? {
          width: "100%",
          height: 0,
          borderWidth: `0 0 ${size}px 0`,
        }
      : {
          height: "100%",
          width: 0,
          borderWidth: `0 0 0 ${size}px`,
        };

  return (
    <hr
      {...props}
      ref={ref}
      style={{
        margin: 0,
        borderStyle: variant,
        borderColor: color && vars.colors.$scale?.[color]?.[200],
        ...borderStyle,
        ...props.style,
      }}
    />
  );
};

const _Divider = React.forwardRef(Divider);
export { _Divider as Divider };
