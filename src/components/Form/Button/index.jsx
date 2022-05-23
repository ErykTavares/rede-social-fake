import React from "react";
import { ButtonStyle } from "./style";

const Button = ({ children, type, onClick, width, height, className }) => {
  return (
    <ButtonStyle
      className={className}
      type={type}
      onClick={onClick}
      width={width}
      height={height}
    >
      {children}
    </ButtonStyle>
  );
};

export default Button;
