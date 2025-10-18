import React from "react";
import Button, { ButtonProps } from "../Button";

export interface LightButtonProps extends Omit<ButtonProps, "variant"> {
  variant?: never; // variant를 제한하여 항상 light로 고정
}

const LightButton: React.FC<LightButtonProps> = (props) => {
  return <Button {...props} variant="light" />;
};

export default LightButton;
