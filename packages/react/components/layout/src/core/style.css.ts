import { style } from "@vanilla-extract/css";
import { defineProperties, createSprinkles } from "@vanilla-extract/sprinkles";
import { vars } from "@xyz/themes";

export const BaseStyle = style({
  padding: 0,
  margin: 0,

  // @ts-ignore
  "&:focus-visible": {
    outline: "none",

    boxShadow: vars.box.shadows.outline,
  },
});

const MarginAndPaddingProperties = defineProperties({
  properties: {
    marginTop: vars.box.spacing,
    marginRight: vars.box.spacing,
    marginBottom: vars.box.spacing,
    marginLeft: vars.box.spacing,
    paddingTop: vars.box.spacing,
    paddingRight: vars.box.spacing,
    paddingBottom: vars.box.spacing,
    paddingLeft: vars.box.spacing,
  },
  shorthands: {
    m: ["marginTop", "marginRight", "marginBottom", "marginLeft"],
    mx: ["marginLeft", "marginRight"],
    my: ["marginTop", "marginBottom"],
    mt: ["marginTop"],
    mr: ["marginRight"],
    mb: ["marginBottom"],
    ml: ["marginLeft"],
    p: ["paddingTop", "paddingRight", "paddingBottom", "paddingLeft"],
    px: ["paddingLeft", "paddingRight"],
    py: ["paddingTop", "paddingBottom"],
    pt: ["paddingTop"],
    pr: ["paddingRight"],
    pb: ["paddingBottom"],
    pl: ["paddingLeft"],
  },
});

const BorderStyleProperties = defineProperties({
  properties: {
    borderRadius: vars.box.radii,
  },
});

const BoxShadowStyleProps = defineProperties({
  properties: {
    boxShadow: vars.box.shadows,
  },
});

export const StyleSprinkles = createSprinkles(
  MarginAndPaddingProperties,
  BorderStyleProperties,
  BoxShadowStyleProps,
);
