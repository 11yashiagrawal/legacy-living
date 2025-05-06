import React from 'react'
import Image from 'next/image'

const Hero = (props) => {
  return (
    <div className='relative w-screen h-[100vh] rounded-2xl p-10 shadow-2xl mt-10'>
      <Image src={props.img} alt='heroimage' fill priority className='brightness-75 rounded-2xl'/>
      <div className="absolute inset-0 bg-teal-100 bg-opacity-10 mix-blend-multiply pointer-events-none rounded-2xl"></div>
      <div className="relative z-10 flex flex-col md:flex-row justify-between items-center h-full p-10 gap-10">
        <div className="text-white text-center md:text-left space-y-6 max-w-2xl">
          {props.tagline1 && <h1 className='text-6xl md:text-8xl font-bold'>{props.tagline1}</h1>}
          {props.tagline2 && <h1 className='text-5xl md:text-7xl font-bold pl-6'>{props.tagline2}</h1>}
          {props.tagline3 && <h1 className='text-5xl md:text-7xl font-bold pl-12'>{props.tagline3}</h1>}
        </div>

        {props.form=='true'?
                  <form className="bg-teal-300/10 backdrop-blur-md border border-teal-100/20 shadow-xl p-6 md:p-8 rounded-xl w-full max-w-md space-y-6">
                  <h2 className="text-2xl font-semibold text-center text-white">Contact Us</h2>
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full px-4 py-2 rounded bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-teal-400"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-2 rounded bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-teal-400"
                  />
                  <textarea
                    placeholder="Message"
                    rows="4"
                    className="w-full px-4 py-2 rounded bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-teal-400"
                  />
                  <button
                    type="submit"
                    className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
                  >
                    Submit
                  </button>
                </form>:null}
        
      </div>
    </div>
  )
}

export default Hero