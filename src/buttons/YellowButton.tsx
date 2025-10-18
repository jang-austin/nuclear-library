import React from "react";
import Button, { ButtonProps } from "../Button";

export interface YellowButtonProps extends Omit<ButtonProps, "variant"> {
  variant?: never; // variant를 제한하여 항상 warning(yellow)로 고정
}

const YellowButton: React.FC<YellowButtonProps> = (props) => {
  return <Button {...props} variant="warning" />;
};

export default YellowButton;
