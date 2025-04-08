import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "link";
  size?: "small" | "medium" | "large";
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  className?: string;
}

/**
 * Reusable Button component with various style variants
 */
const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "medium",
  disabled = false,
  className = "",
  icon,
  iconPosition = "right",
  onClick,
  ...props
}) => {
  // Style variants
  const variants = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white",
    secondary: "bg-gray-700 hover:bg-gray-600 text-white",
    outline: "border border-gray-700 text-gray-300 hover:bg-gray-800",
    link: "text-blue-400 hover:text-blue-300 underline",
  };

  // Size variants
  const sizes = {
    small: "px-3 py-1 text-sm",
    medium: "px-6 py-2",
    large: "px-8 py-3 text-lg",
  };

  // Disabled styles
  const disabledStyles = disabled ? "opacity-70 cursor-not-allowed" : "";

  return (
    <button
      className={`
        ${variants[variant]} 
        ${sizes[size]} 
        ${disabledStyles}
        rounded-md 
        font-medium 
        transition-colors 
        flex 
        items-center 
        justify-center
        ${className}
      `}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {icon && iconPosition === "left" && <span className="mr-2">{icon}</span>}
      {children}
      {icon && iconPosition === "right" && <span className="ml-2">{icon}</span>}
    </button>
  );
};

export default Button;
