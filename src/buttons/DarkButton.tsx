import React from "react";
import Button, { ButtonProps } from "../Button";

export interface DarkButtonProps extends Omit<ButtonProps, "variant"> {
  variant?: never; // variant를 제한하여 항상 dark로 고정
}

const DarkButton: React.FC<DarkButtonProps> = (props) => {
  return <Button {...props} variant="dark" />;
};

export default DarkButton;
