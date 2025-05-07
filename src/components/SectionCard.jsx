import React from 'react'
import { iconMap } from './IconMap'

const SectionCard = (props) => {
  const Icon=iconMap[props.icon]
  return (
    <div className={`w-90/100 m-8 mt-20 p-8 flex flex-col md:flex-row ${props.reverse=='true'?'md:flex-row-reverse':''} items-center justify-between bg-teal-300/10 backdrop-blur-md border border-teal-500/20 rounded-xl`}>
      <div className={`${props.reverse=='true'?'text-right':'text-left'}`}>
        <p className='text-bolder'>{props.text}</p>
        <p className='text-[var(--primary-color)]'>{props.description}</p>
      </div>
      {Icon && <Icon className='w-8 h-8 text-[var(--primary-color)]'/>}
    </div>
  )
}
export default SectionCard