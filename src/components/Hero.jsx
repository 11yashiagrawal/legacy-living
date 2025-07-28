import React, { useState } from 'react'
import Image from 'next/image'

const Hero = (props) => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className='relative w-full h-[100vh] rounded-2xl p-4 md:p-10 shadow-2xl mt-10 overflow-hidden' data-aos='fade-up'>
      <Image src={props.img} alt='heroimage' fill priority className='brightness-75 rounded-2xl blur-xs'/>
      <div className="absolute inset-0 bg-teal-100 bg-opacity-10 mix-blend-multiply pointer-events-none rounded-2xl"></div>
      <div className="relative z-10 flex flex-col md:flex-row justify-between items-center h-full md:p-10 p-0 md:gap-10 gap-5">
        <div className="text-white text-center md:text-left md:space-y-6 space-y-3 max-w-2xl mt-8 md:mt-0">
          {props.tagline1 && <h1 className='text-6xl md:text-8xl font-bold before:opacity-0' data-aos='fade-right'>{props.tagline1}</h1>}
          {props.tagline2 && <h1 className='text-5xl md:text-7xl font-bold pl-6 before:opacity-0' data-aos='fade-right' data-aos-delay='500'>{props.tagline2}</h1>}
          {props.tagline3 && <h1 className='text-5xl md:text-7xl font-bold pl-12 before:opacity-0' data-aos='fade-right' data-aos-delay='1000'>{props.tagline3}</h1>}
          
          {/* Send a Message Button for Mobile */}
          {props.form === 'true' && (
            <div className="md:hidden mt-6">
              <button
                onClick={() => setShowForm(true)}
                className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 shadow-lg"
                data-aos='fade-up'
                data-aos-delay='1500'
              >
                Send a Message
              </button>
            </div>
          )}
        </div>

        {props.form=='true'?
                <form className="hidden md:block bg-teal-300/10 backdrop-blur-md border border-teal-100/20 shadow-xl p-6 md:p-8 rounded-xl w-full max-w-lg space-y-6 opacity-0" data-aos='zoom-in' data-aos-delay='500'>
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

              {/* Mobile Form Popup */}
        {showForm && props.form === 'true' && (
          <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50 md:hidden">
          <div className="bg-teal-300/10 backdrop-blur-md border border-teal-100/20 shadow-xl p-6 m-4 w-full max-w-md max-h-[90vh] overflow-y-auto rounded-xl">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold text-center text-white">Contact Us</h2>
              <button
                onClick={() => setShowForm(false)}
                className="text-white hover:text-teal-300 text-2xl font-bold"
              >
                ×
              </button>
            </div>
            <form className="space-y-6">
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
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default Hero