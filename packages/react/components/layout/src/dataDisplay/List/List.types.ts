import { vars } from "@xyz/themes";
import { BoxProps } from "../../layout";
import { TextProps } from "../../typography";
import { CSSProperties } from "@vanilla-extract/css";

export type ListProps = {
  variant?: "ordered" | "unordered";
  spacing?: keyof typeof vars.box.spacing;
} & BoxProps;

export type OrderListProps = Omit<ListProps, "variant">;
export type ListItemProps = TextProps;

export type UnorderedListProps = Omit<ListProps, "variant"> & {
  listStyleType?: CSSProperties["listStyleType"];
};
