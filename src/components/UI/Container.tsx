import React, { JSX } from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  fluid?: boolean;
  as?: keyof JSX.IntrinsicElements;
}

const Container: React.FC<ContainerProps> = ({
  children,
  className = "",
  fluid = false,
  as: Tag = "div",
  ...props
}) => {
  return (
    <Tag
      className={`
        ${fluid ? "w-full" : "container mx-auto"}
        px-4
        ${className}
      `}
      {...props}
    >
      {children}
    </Tag>
  );
};

export default Container;
