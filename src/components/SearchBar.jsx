import React from 'react'
import { iconMap } from './IconMap'

const SearchBar = (props) => {
  const Icon=iconMap[props.icon];
  return (
    <div className='w-9/10 border-2 border-[var(--primary-color)] rounded-lg m-10 mb-0 h-10 text-[var(--secondary-color)] p-2 flex justify-between' data-aos='fade-left'>
        <input placeholder='Search for properties, services or blog posts...' className='border-none focus:outline-none focus:ring-0 w-9/10'/>
        {Icon && <Icon className="w-5 h-5 text-[var(--primary-color)]" strokeWidth={2.5}/>}
    </div>
  )
}

export default SearchBar