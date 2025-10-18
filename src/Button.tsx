import React from "react";

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark"
    | "purple"
    | "pink";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = "primary",
  size = "medium",
  disabled = false,
  className = "",
}) => {
  const buttonStyle: React.CSSProperties = {
    fontWeight: 500,
    borderRadius: "0.5rem",
    transition: "all 0.2s",
    outline: "none",
    border: "none",
    cursor: disabled ? "not-allowed" : "pointer",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    opacity: disabled ? 0.5 : 1,
    transform: disabled ? "none" : "scale(1)",
  };

  const sizeStyles: Record<string, React.CSSProperties> = {
    small: { padding: "0.375rem 0.75rem", fontSize: "0.875rem" },
    medium: { padding: "0.5rem 1rem", fontSize: "1rem" },
    large: { padding: "0.75rem 1.5rem", fontSize: "1.125rem" },
  };

  const variantStyles: Record<string, React.CSSProperties> = {
    primary: { backgroundColor: "#2563eb", color: "white" },
    secondary: { backgroundColor: "#4b5563", color: "white" },
    success: { backgroundColor: "#059669", color: "white" },
    danger: { backgroundColor: "#dc2626", color: "white" },
    warning: { backgroundColor: "#eab308", color: "white" },
    info: { backgroundColor: "#0891b2", color: "white" },
    light: { backgroundColor: "#f3f4f6", color: "#1f2937" },
    dark: { backgroundColor: "#1f2937", color: "white" },
    purple: { backgroundColor: "#9333ea", color: "white" },
    pink: { backgroundColor: "#db2777", color: "white" },
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!disabled) {
      e.currentTarget.style.transform = "scale(1.05)";
    }
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!disabled) {
      e.currentTarget.style.transform = "scale(1)";
    }
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!disabled) {
      e.currentTarget.style.transform = "scale(0.95)";
    }
  };

  const handleMouseUp = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!disabled) {
      e.currentTarget.style.transform = "scale(1.05)";
    }
  };

  return (
    <button
      style={{
        ...buttonStyle,
        ...sizeStyles[size],
        ...variantStyles[variant],
      }}
      className={className}
      onClick={onClick}
      disabled={disabled}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      {children}
    </button>
  );
};

export default Button;
