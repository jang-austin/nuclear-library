import React from "react";
import Button, { ButtonProps } from "../Button";

export interface GrayButtonProps extends Omit<ButtonProps, "variant"> {
  variant?: never; // variant를 제한하여 항상 secondary(gray)로 고정
}

const GrayButton: React.FC<GrayButtonProps> = (props) => {
  return <Button {...props} variant="secondary" />;
};

export default GrayButton;
