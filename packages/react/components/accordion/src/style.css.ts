import { style } from "@vanilla-extract/css";
import { vars } from "@xyz/themes";

const resetStyle = style({
  margin: 0,
  padding: 0,
  border: 0,
  background: "none",
});

export const accordionStyle = style([resetStyle]);

export const accordionItemStyle = style([
  resetStyle,
  {
    width: "100%",
    borderTop: `1px solid ${vars.colors.$scale.gray[300]}`,

    // @ts-ignore
    "&:last-of-type": {
      borderBottom: `1px solid ${vars.colors.$scale.gray[300]}`,
    },
  },
]);
