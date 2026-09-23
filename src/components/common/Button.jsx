import React from 'react'

const Button = ({children,onClick,className}) => {
  return (
    <button onClick={onClick} className={`rounded-lg px-[17px] py-3 ${className}`}>
      {children}
    </button>
  )
}

export default Button
