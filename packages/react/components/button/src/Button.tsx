import * as React from "react";
import { ButtonProps } from "./types";
import { clsx } from "clsx";
import {
  activeColorVariant,
  buttonStyle,
  enableColorVariant,
  hoverColorVariant,
} from "./style.css";
import { vars } from "@xyz/themes";
import { assignInlineVars } from "@vanilla-extract/dynamic";

const Button = (props: ButtonProps, ref: React.Ref<HTMLButtonElement>) => {
  const {
    variant = "solid",
    size = "md",
    color = "gray",
    isDisabled,
    style,
    children,
  } = props;

  const disabled = isDisabled;

  const endableColor = vars.colors.$scale[color][500];

  const hoverColor =
    variant === "solid"
      ? vars.colors.$scale[color][600]
      : vars.colors.$scale[color][50];

  const activeColor =
    variant === "solid"
      ? vars.colors.$scale[color][700]
      : vars.colors.$scale[color][100];

  return (
    <button
      ref={ref}
      {...props}
      className={clsx([
        buttonStyle({
          size,
          variant,
        }),
      ])}
      style={{
        ...assignInlineVars({
          [enableColorVariant]: endableColor,
          [hoverColorVariant]: hoverColor,
          [activeColorVariant]: activeColor,
        }),
        ...style,
      }}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

const _Button = React.forwardRef(Button);
export { _Button as Button };
