import React from 'react';
import { StyleInput } from './input.styles';

const Input = ({ tipo, valor, placeholder, func, nome}) => {
  return (
    <StyleInput 
      type={tipo}
      name={nome}
      value={valor}
      placeholder={placeholder}
      required
      onChange={func}>
    </StyleInput>
  );
};

export default Input;