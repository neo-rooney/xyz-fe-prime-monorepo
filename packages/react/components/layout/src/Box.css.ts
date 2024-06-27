import { vars } from "@xyz/themes";
import { style } from "@vanilla-extract/css";

export const boxStyles = style({
  width: "100px",
  height: "100px",
  backgroundColor: vars.colors.$scale.blue[500],
});
