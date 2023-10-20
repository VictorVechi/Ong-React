import React from 'react';

const Input = ({ tipo, valor, placeholder, func, classe }) => {
  return (
    <>
      <input
        className={classe}
        type={tipo}
        value={valor}
        placeholder={placeholder}
        onChange={func}
      />
    </>
  );
};

export default Input;