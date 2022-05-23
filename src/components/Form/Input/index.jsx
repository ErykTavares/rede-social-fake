import React from "react";
import { InputStyle } from "./style";

const Input = ({
  type,
  placeholder,
  autocomplete,
  value,
  onChange,
  error,
  onBlur,
  width
}) => {
  return (
    <InputStyle width={width}>
      <label>
        <h4>{placeholder}</h4>
        <input
            type={type}
            nome={placeholder}
            id={placeholder}
            autoComplete={autocomplete}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
        />
      </label>
      {error ? <p className="error">{error}</p> : null}
    </InputStyle>
  );
};

export default Input;
