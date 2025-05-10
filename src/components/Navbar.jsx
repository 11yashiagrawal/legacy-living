'use client';
import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Button from './Button'
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const [activeLink, setActiveLink]=useState('/');
  const [underlineProps, setUnderlineProps] = useState({ left: 0, width: 0 });
  const containerRef = useRef(null);

  useEffect(() => {
    setActiveLink(pathname);
  }, [pathname]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const activeEl = container.querySelector(`[data-path="${pathname}"]`);
    if (activeEl) {
      setUnderlineProps({
        left: activeEl.offsetLeft,
        width: activeEl.offsetWidth,
      });
    }
  }, [pathname]);

  const links=[{label:'Home', path:'/'},
    {label:'About', path:'/about'},
    {label:'Properties', path:'/properties'},
    {label:'Blog', path:'/blog'}
  ]
  return (
    <div className='flex w-screen h-[10vh] rounded-b-3xl shadow-xl p-4 pb-0 pr-8 justify-between sticky top-0 z-50 bg-white box-border'>
      <Link href='/' passHref><Image src='/logo.png' alt='Logo' width={200} height={90} className='cursor-pointer opacity-0' data-aos='zoom-in'/></Link>

      <div className='hidden md:flex space-x-20 items-center text-[var(--primary-color)] text-xl h-[100%] relative' ref={containerRef}>

        {links.map((link,index)=>(
          <div key={link.path} className='flex justify-center items-center h-[100%] opacity-0' style={{ animationDelay: `${index * 0.3}s` }} data-aos='fade-down' data-aos-delay={`${index * 300}`} data-path={link.path}>
            <Link href={link.path} className='hover:-translate-y-1 hover:border-b-[var(--primary-color)] active:-translate-y-4 active:border-b-3 active:border-b-[var(--primary-color)] duration-300 ease'>{link.label}
            </Link>
          </div>
        ))}

        <motion.div
          className='absolute bottom-0 h-[3px] bg-[var(--primary-color)] rounded-full'
          layout
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 30,
            duration: 0.5, // Slow down transition duration to smooth out
          }}
          animate={{
            left: underlineProps.left,
            width: underlineProps.width,
          }}
        />
      </div>

      <div className='md:hidden'>
        <button onClick={() => setIsOpen(!isOpen)} className='text-[var(--primary-color)]' data-aos='fade-down'>
          {isOpen ? (
            <XMarkIcon className="w-6 h-6 m-8" />  // Close icon
          ) : (
            <Bars3Icon className="w-6 h-6 m-8" />  // Hamburger icon
          )}
        </button>
      </div>

      <div className='hidden md:flex space-x-4 items-center'>
        <Button text='Login' bgColor='none' borderColor='border-[var(--primary-color)]' textColor='text-[var(--primary-color)]'/>
        <Button text='Signup' bgColor='bg-[var(--primary-color)]' borderColor='none' textColor='text-white'/>
      </div>

      {isOpen && (
        <div className="absolute top-[10vh] left-0 w-full bg-white shadow-md flex flex-col items-center space-y-4 md:hidden z-10 px-4 py-4" >
          {links.map((link)=>(
            <div key={link.path} className='flex justify-center items-center h-[100%] w-[100%]' data-aos='fade-down' data-aos-delay={`${index*300}`}>
              <Link href={link.path} className='relative' onClick={() => setActiveLink(link.path)}>{link.label}
                <motion.div
                    className='absolute bottom-0 left-0 w-0 h-[2px] bg-[var(--primary-color)] rounded-full'
                    animate={{
                      width: activeLink === link.path ? '100%' : '0%',
                      left: activeLink === link.path ? '0' : '50%',
                    }}
                    transition={{
                      type: 'spring',
                      stiffness: 200,
                      damping: 25,
                      duration: 0.3,
                    }}
                  />
              </Link></div>
          ))}

          <Button text='Login' bgColor='none' borderColor='none' textColor='text-[var(--primary-color)]'/>
          <Button text='Signup' bgColor='bg-[var(--primary-color)]' borderColor='none' textColor='text-white'/>
        </div>
      )}
    </div>
  )
}
export default Navbar