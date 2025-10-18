import React from "react";
import Button, { ButtonProps } from "../Button";

export interface BlueButtonProps extends Omit<ButtonProps, "variant"> {
  variant?: never; // variant를 제한하여 항상 primary(blue)로 고정
}

const BlueButton: React.FC<BlueButtonProps> = (props) => {
  return <Button {...props} variant="primary" />;
};

export default BlueButton;
