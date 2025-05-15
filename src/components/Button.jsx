'use client';
import React from 'react'
// import { useRouter } from 'next/navigation'

const Button = ({bgColor, textColor, borderColor, text, onClick}) => {
  // const router=useRouter();

  // const handleClick=()=>{
  //   {text=='signup'?router.push('/signup'):router.push('/login')}
  // }
  return (
    <button className={`${bgColor=='none'?"":bgColor} ${textColor} ${borderColor=='none'?"":borderColor} border-1 p-4 w-1/2 h-1/2 flex items-center justify-center box-border rounded-md before:opacity-0`} data-aos='zoom-in'onClick={()=>{console.log('button clicked');onClick();}}>{text}</button>
  )
}

export default Button