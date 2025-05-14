'use client';
import React from 'react'
import { useRouter } from 'next/navigation'
import { useUser } from '@/context/context';
import { useContext } from 'react';

const Button = (props) => {
  const router=useRouter();
  const {formOpen, setFormOpen}=useUser();

  const handleClick=()=>{
    {props.text=='signup'?router.push('/signup'):router.push('/login')}
    setFormOpen(!formOpen)
    console.log(formOpen)
  }

  return (
    <button className={`${props.bgColor=='none'?"":props.bgColor} ${props.textColor} ${props.borderColor=='none'?"":props.borderColor} border-1 p-4 w-1/2 h-1/2 flex items-center justify-center box-border rounded-md before:opacity-0`} data-aos='zoom-in'onClick={handleClick}>{props.text}</button>
  )
}

export default Button