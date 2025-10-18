import React, { useState } from "react";
import Button, { ButtonProps } from "./Button";

export interface ApiButtonProps extends Omit<ButtonProps, "onClick"> {
  apiUrl?: string;
  onApiResponse?: (data: any) => void;
  onApiError?: (error: Error) => void;
  loadingText?: string;
}

const ApiButton: React.FC<ApiButtonProps> = ({
  apiUrl = "https://foo.com",
  onApiResponse,
  onApiError,
  loadingText = "Loading...",
  children,
  variant = "primary",
  ...buttonProps
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleApiCall = async () => {
    if (isLoading) return;

    setIsLoading(true);

    try {
      const response = await fetch(apiUrl, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      onApiResponse?.(data);
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error : new Error("Unknown error occurred");
      onApiError?.(errorMessage);
      console.error("API call failed:", errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button
      {...buttonProps}
      variant={variant}
      onClick={handleApiCall}
      disabled={isLoading || buttonProps.disabled}
    >
      {isLoading ? loadingText : children}
    </Button>
  );
};

export default ApiButton;
