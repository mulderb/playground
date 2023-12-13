import * as React from "react";

interface ButtonProps {
  label: string;
  type: "submit" | "button";
  action: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({ label, action, type = "submit" }) => (
  <button onClick={action} type={type}>
    {label}
  </button>
);

export default Button;
