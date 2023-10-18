import React from 'react'

const Button = ({texto, tipo, func, classe}) => {
  return (
    <>
        <button className={classe} type={tipo} onClick={func}>{texto}</button>
    </>
  )
}

export default Button