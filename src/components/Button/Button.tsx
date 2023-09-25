import React, { FC } from "react";

interface ButtonProps {
  className?: string;
  label: string;
  onClick?: () => void;
  [x: string]: any;
}

const Button: FC<ButtonProps> = ({ className, label, onClick, ...rest }) => {
  return (
    <button
      className={`w-full font-lato font-semibold bg-[#541554] rounded-md py-2 hover:opacity-80 ${className}`}
      onClick={onClick}
      {...rest}
    >
      {label}
    </button>
  );
};

export default Button;
