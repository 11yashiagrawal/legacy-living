import React from 'react'
import { iconMap } from './IconMap'

const SectionCard = (props) => {
  const Icon=iconMap[props.icon]
  return (
    <div className={`w-[calc(100%-16px)] md:w-[calc(100%-64px)] mt-20 ml-4 md:ml-8 mr-4 md:mr-8 p-4 md:p-8 flex flex-col md:flex-row ${props.reverse=='true'?'md:flex-row-reverse':''} items-center justify-between bg-teal-300/10 backdrop-blur-md border border-teal-500/20 rounded-xl`} data-aos='zoom-in'>
      <div className={`${props.reverse=='true'?'text-right':'text-left'} flex-1 mr-4 md:mr-8`}>
        <p className='text-bolder text-lg md:text-xl font-bold mb-2'>{props.text}</p>
        <p className='text-[var(--primary-color)] text-sm md:text-base'>{props.description}</p>
      </div>
      {Icon && <Icon className='w-8 h-8 text-[var(--primary-color)]'/>}
    </div>
  )
}
export default SectionCard