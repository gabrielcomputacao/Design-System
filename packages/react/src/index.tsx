import { styled } from "./styles";
import { ComponentProps } from "react";

export const Button = styled("button", {
  fontFamily: "$default",
  backgroundColor: "$ignite500",
  borderRadius: "$md",
  padding: "$1 $4",
  border: 0,
  color: "$white",
  fontWeight: "$bold",

  variants: {
    size: {
      small: {
        fontSize: 14,
        padding: "$2 $4",
      },
      big: {
        fontSize: 16,
        padding: "$3 $6",
      },
    },
  },

  defaultVariants: {
    size: "small",
  },
});

export type ButtonProps = ComponentProps<typeof Button>;
