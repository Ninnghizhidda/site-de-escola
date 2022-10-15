import React from "react";
import * as C from "./styles";

const Input = ({ Value, onChange, onClick, type,  Name, autoComplete, placeholder }) => {
  
  return (
    <C.Input
      value={Value}
      onChange={onChange}
      onClick={onClick}
      type={type}
      name={Name}
      autocomplete={autoComplete}
      placeholder={placeholder}
    />
  );
};

export default Input;
