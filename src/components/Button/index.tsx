import React from "react";

interface ButtonProps {
  children?: React.ReactNode;
  label?: string;
}

const Button: React.FC<ButtonProps> = ({ label, children }) => {
  return (
    <button className="text-primary border px-8 py-2 rounded-md">
      {children ? children : label}
    </button>
  );
};
export default Button;
