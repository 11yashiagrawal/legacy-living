import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Card = (props) => {
  return (
    <div className={`bg-white rounded-2xl shadow-2xl flex flex-col justify-center items-center space-y-3 max-w-[400px] p-4 ${props.readmore=='true'?'text-left':'text-center'} ${props.lr=='true'?'relative':''}`}>
        {props.img && <Image src={props.img} alt='home' width={3} height={2} layout='responsive' className='rounded-md'/>}
        <p className='text-2xl font-bold text-[var(--primary-color)]'>{props.text1}</p>
        {props.role && <p className='text-[var(--secondary-color)] font-bold'>{props.role}</p>}
        <p className='italic'>{props.text2}</p>
        {props.readmore=='true'?<><br /><br /><br /></>:null}
        {props.readmore=='true'?<Link href="#" className='text-[var(--secondary-color)] font-semibold'>Read More</Link>:null}
    </div>
  )
}

export default Card