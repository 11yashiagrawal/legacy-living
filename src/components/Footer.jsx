import Link from 'next/link'
import React from 'react'
import { iconMap } from './IconMap'

const Footer = () => {
  const Facebook=iconMap['facebook']
  const Instagram=iconMap['instagram']
  const Linkedin=iconMap['linkedin']
  return (
    <div className='mt-20 bg-[var(--primary-color)] flex flex-wrap justify-center p-4 md:p-20 gap-8 md:gap-20 lg:gap-80 pb-5 bottom-0 w-full' data-aos='fade-down'>
      <div className='text-center'>
        <p className='text-white font-bold'>Quick Links</p> <br/><br/>
        <Link href='/about' className='text-teal-400'>About Us</Link><br/>
        <Link href='/properties' className='text-teal-400'>Blog</Link><br/>
        <Link href='/blog' className='text-teal-400'>Privacy Policy</Link><br/>
        <Link href='/privacy' className='text-teal-400'>Terms of Service</Link><br/>
      </div>
      <div className='text-center'>
      <p className='text-white font-bold'>Contact Us</p><br/><br/>
        <p className='text-[var(--secondary-color)]'>Email: contact@legacyliving.com</p>
        <p className='text-[var(--secondary-color)]'>Phone: +1 234 567 890</p><br /><br /><br /><br />
        <p className='text-[var(--secondary-color)]'>© 2025 Legacy Living. All rights reserved</p>
      </div>
      <div>
        <p className='text-white font-bold'>Follow Us</p> <br /><br />
        <div className="flex text-teal-400 gap-5">
          <Facebook size={24}/>
          <Linkedin size={24}/>
          <Instagram size={24}/>
        </div>
      </div>
    </div>
  )
}

export default Footer