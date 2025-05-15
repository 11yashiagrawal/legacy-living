import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';

export default function FormModal({ onClose, formType, onSwitchForm }) {
  useEffect(() => {
    // Save previous overflow state
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';  // Disable scroll

      return () => {
        document.body.style.overflow = originalStyle;  // Restore scroll on unmount
      };
    }, []);
    return (
      <div className="fixed inset-0 z-50 bg-teal-200/20 flex justify-center items-center p-5" data-aos='zoom-in'>
        <div className="bg-teal-300/20 backdrop-blur-md rounded-2xl border border-teal-100/20 shadow-xl p-6 md:p-8 w-full max-w-lg space-y-12">
          <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.2 }}
          // className="bg-teal-300/20 backdrop-blur-md rounded-2xl border border-teal-100/20 shadow-xl p-6 md:p-8 w-full max-w-lg space-y-12"
          >
            <button onClick={onClose} className="absolute top-4 right-4 font-semibold text-[var(--primary-color)] text-2xl">✕</button>
            <AnimatePresence mode="wait">
              <motion.div
                key={formType}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.3 }}
                className='space-y-12'
              >
                <h2 className="text-2xl font-semibold text-center text-[var(--primary-color)]">{formType=='signup'?'Create a New Account':'Login to your Account'}</h2>
                {formType=='signup'
                  ?<>
                      <input type="email" placeholder='E-mail' className="w-full px-4 py-2 rounded bg-white/50 backdrop-blur-sm border border-teal-500 text-white placeholder-teal-500 focus:outline-none focus:ring-2 focus:ring-[var(--secondary-color)]"/><br />
                  </>
                :null}
                <input type="text" placeholder='Username' className="w-full px-4 py-2 rounded bg-white/50 backdrop-blur-sm border border-teal-500 text-white placeholder-teal-500 focus:outline-none focus:ring-2 focus:ring-[var(--secondary-color)]" /><br />
                <input type="password" placeholder='Password' className="w-full px-4 py-2 rounded bg-white/50 backdrop-blur-sm border border-teal-500 text-white placeholder-teal-500 focus:outline-none focus:ring-2 focus:ring-[var(--secondary-color)]" /><br />
                {formType=='signup'
                  ?<>
                      <input type="password" placeholder='Confirm Password' className="w-full px-4 py-2 rounded bg-white/50 backdrop-blur-sm border border-teal-500 text-white placeholder-teal-500 focus:outline-none focus:ring-2 focus:ring-[var(--secondary-color)]" /><br />
                  </>
                :null}
                <button type='submit' className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300" onClick={onClose}>Submit</button>
                {formType=='login'
                  ?<>
                    <p className='text-center text-[var(--primary-color)] font-bold'>Don't have an account?  <button
                        onClick={() => onSwitchForm('signup')}
                        className='text-white font-medium hover:underline'
                      >
                        Signup Now
                      </button></p>
                  </>
                  :<>
                    <p className='text-center text-[var(--primary-color)] font-bold'>Already have an account?  <button
                        onClick={() => onSwitchForm('login')}
                        className='text-white font-medium hover:underline'
                      >
                        Login
                      </button></p>
                  </>
                }
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    );
  }
  