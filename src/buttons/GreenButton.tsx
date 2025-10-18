import React from "react";
import Button, { ButtonProps } from "../Button";

export interface GreenButtonProps extends Omit<ButtonProps, "variant"> {
  variant?: never; // variant를 제한하여 항상 success(green)로 고정
}

const GreenButton: React.FC<GreenButtonProps> = (props) => {
  return <Button {...props} variant="success" />;
};

export default GreenButton;
