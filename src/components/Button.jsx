import React from 'react'

const Button = (props) => {
  return (
    <button className={`${props.bgColor=='none'?"":props.bgColor} ${props.textColor} ${props.borderColor=='none'?"":props.borderColor} border-1 p-4 w-1/2 h-1/2 flex items-center justify-center box-border rounded-md`}>{props.text}</button>
  )
}

export default Button