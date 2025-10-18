import React from "react";
import Button, { ButtonProps } from "../Button";

export interface PinkButtonProps extends Omit<ButtonProps, "variant"> {
  variant?: never; // variant를 제한하여 항상 pink로 고정
}

const PinkButton: React.FC<PinkButtonProps> = (props) => {
  return <Button {...props} variant="pink" />;
};

export default PinkButton;
