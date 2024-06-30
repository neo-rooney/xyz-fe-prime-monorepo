import * as React from "react";
import { ButtonProps } from "./types";
import { clsx } from "clsx";
import {
  activeColorVariant,
  buttonStyle,
  enableColorVariant,
  hoverColorVariant,
  spanStyle,
  spinnerStyle,
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
    leftIcon,
    rightIcon,
    isLoading,
  } = props;

  const disabled = isDisabled || isLoading;

  const endableColor = vars.colors.$scale[color][500];

  const hoverColor =
    variant === "solid"
      ? vars.colors.$scale[color][600]
      : vars.colors.$scale[color][50];

  const activeColor =
    variant === "solid"
      ? vars.colors.$scale[color][700]
      : vars.colors.$scale[color][100];

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    props.onKeyDown?.(event);

    if (event.key === "Enter" || event.key === "13") {
      event.preventDefault();
      event.currentTarget.click();
    }
  };

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
      data-loading={isLoading}
      onKeyDown={handleKeyDown}
      onClick={() => console.log("AAA")}
      role="button"
    >
      {isLoading && <div className={spinnerStyle({ size })} />}
      {leftIcon && <span className={spanStyle({ size })}>{leftIcon}</span>}
      <span>{children}</span>
      {rightIcon && <span className={spanStyle({ size })}>{rightIcon}</span>}
    </button>
  );
};

const _Button = React.forwardRef(Button);
export { _Button as Button };
