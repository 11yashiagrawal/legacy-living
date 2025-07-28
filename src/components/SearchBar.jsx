import React from 'react'
import { iconMap } from './IconMap'

const SearchBar = (props) => {
  const Icon=iconMap[props.icon];
  return (
    <div className='w-[calc(100%-16px)] md:w-[calc(100%-80px)] border-2 border-[var(--primary-color)] rounded-lg mb-0 mt-4 md:mt-10 ml-4 md:ml-10 mr-4 md:mr-10 h-10 text-[var(--secondary-color)] p-2 flex justify-between' data-aos='fade-left'>
        <input placeholder='Search for properties, services or blog posts...' className='border-none focus:outline-none focus:ring-0 w-full flex-1'/>
        {Icon && <Icon className="w-5 h-5 text-[var(--primary-color)]" strokeWidth={2.5}/>}
    </div>
  )
}

export default SearchBar