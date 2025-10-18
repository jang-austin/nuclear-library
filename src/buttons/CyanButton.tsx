import React from "react";
import Button, { ButtonProps } from "../Button";

export interface CyanButtonProps extends Omit<ButtonProps, "variant"> {
  variant?: never; // variant를 제한하여 항상 info(cyan)로 고정
}

const CyanButton: React.FC<CyanButtonProps> = (props) => {
  return <Button {...props} variant="info" />;
};

export default CyanButton;
