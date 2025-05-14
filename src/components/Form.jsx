'use client';
import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const Form = ({type}) => {
    const router=useRouter();

    const handleSubmit=(e)=>{
        e.preventDefault();
        router.push('/')
    }

  return (
    <div className='flex justify-center items-center p-5'>
        <form className='bg-teal-600/20 backdrop-blur-md rounded-2xl border border-teal-100/20 shadow-xl p-6 md:p-8 w-full max-w-lg space-y-12'>
            <h2 className="text-2xl font-semibold text-center text-[var(--primary-color)]">{type=='signup'?'Signup':'Login'}</h2>
            {type=='signup'
            ?<>
                <input type="email" placeholder='E-mail' className="w-full px-4 py-2 rounded bg-white/50 backdrop-blur-sm border border-teal-500 text-white placeholder-teal-500 focus:outline-none focus:ring-2 focus:ring-[var(--secondary-color)]"/><br />
            </>
            :null}
            <input type="text" placeholder='Username' className="w-full px-4 py-2 rounded bg-white/50 backdrop-blur-sm border border-teal-500 text-white placeholder-teal-500 focus:outline-none focus:ring-2 focus:ring-[var(--secondary-color)]" /><br />
            <input type="password" placeholder='Password' className="w-full px-4 py-2 rounded bg-white/50 backdrop-blur-sm border border-teal-500 text-white placeholder-teal-500 focus:outline-none focus:ring-2 focus:ring-[var(--secondary-color)]" /><br />
            {type=='signup'
            ?<>
                <input type="password" placeholder='Confirm Password' className="w-full px-4 py-2 rounded bg-white/50 backdrop-blur-sm border border-teal-500 text-white placeholder-teal-500 focus:outline-none focus:ring-2 focus:ring-[var(--secondary-color)]" /><br />
            </>
            :null}
            <button type='submit' className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300" onClick={handleSubmit}>Submit</button>
            {type=='login'
            ?<>
                <p className='text-center text-[var(--primary-color)] font-bold'>Don't have an account?  <Link href='/signup' className='text-[var(--secondary-color)] font-medium hover:underline'>Signup Now</Link></p>
            </>
            :<>
                <p className='text-center text-[var(--primary-color)] font-bold'>Already have an account?  <Link href='/login' className='text-[var(--secondary-color)] font-medium hover:underline'>Login</Link></p>
            </>}
        </form>
    </div>
  )
}

export default Form