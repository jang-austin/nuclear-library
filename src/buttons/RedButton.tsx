import React from "react";
import Button, { ButtonProps } from "../Button";

export interface RedButtonProps extends Omit<ButtonProps, "variant"> {
  variant?: never; // variant를 제한하여 항상 danger(red)로 고정
}

const RedButton: React.FC<RedButtonProps> = (props) => {
  return <Button {...props} variant="danger" />;
};

export default RedButton;
