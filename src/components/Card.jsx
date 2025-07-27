import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Card = (props) => {
  console.log('card component called')
  
  const handleCardClick = () => {
    if (props.onCardClick && props.property) {
      props.onCardClick(props.property);
    }
  };

  return (
    <div 
      className={`bg-white rounded-2xl shadow-2xl flex flex-col justify-center items-center space-y-3 max-w-[400px] p-4 ${props.readmore=='true'?'text-left':'text-center'} ${props.lr=='true'?'relative':''} ${props.property ? 'cursor-pointer hover:shadow-3xl hover:scale-105 transition-all duration-300' : ''}`} 
      data-aos='fade-down'
      onClick={handleCardClick}
    >
        {props.img && <Image src={props.img} alt='home' width={3} height={2} layout='responsive' className='rounded-md'/>}
        {props.text1 && <p className='text-2xl font-bold text-[var(--primary-color)]'>{props.text1}</p>}
        {props.text2 && <p className='text-lg italic text-gray-800'>{props.text2}</p>}
        {props.role && <p className='text-[var(--secondary-color)] font-bold'>{props.role}</p>}
        {props.readmore=='true'?<><br /><br /><br /></>:null}
        {props.readmore=='true'?<Link href="#" className='text-[var(--secondary-color)] font-semibold'>Read More</Link>:null}
    </div>
  )
}

export default Card