import { styled, keyframes } from "../../styles";
import * as Checkbox from "@radix-ui/react-checkbox";

export const CheckBoxContainer = styled(Checkbox.Root, {
  width: "$6",
  height: "$6",
  backgroundColor: "$gray900",
  borderRadius: "$xs",
  lineHeight: 0,
  cursor: "pointer",
  overflow: "hidden",
  display: "flex",
  boxSizing: "border-box",
  justifyContent: "center",
  alignItems: "center",
  border: "2px solid $gray900",
  '&[data-state="checked"]': {
    border: "2px solid $ignite300",
  },
  '&:focus, &[data-state="checked"]': {
    border: "2px solid $ignite300",
  },
});

const SlideIn = keyframes({
  from: {
    transform: "translateY(-100%)",
  },
  to: {
    transform: "translateY(0)",
  },
});
const SlideOut = keyframes({
  from: {
    transform: "translateY(0)",
  },
  to: {
    transform: "translateY(-100%)",
  },
});

export const CheckBoxIndicator = styled(Checkbox.Indicator, {
  width: "$4",
  height: "$4",
  color: "$white",

  '&[data-state="checked"]': {
    animation: `${SlideIn} 200ms ease-out`,
  },
  '&[data-state="unchecked"]': {
    animation: `${SlideOut} 200ms ease-out`,
  },
});
