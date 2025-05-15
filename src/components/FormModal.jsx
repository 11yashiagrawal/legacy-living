import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

export default function FormModal({ onClose, formType, onSwitchForm }) {
  const router = useRouter();
  const [users, setUsers] = useState([]);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // const [notification, setNotification] = useState('');
  const [email, setEmail] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const validatePassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d]).{8,}$/;
    return regex.test(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formType==='login'){
      if (!username || !password) {
        toast.error('Please fill in all fields.');
        return;
      }

      const user = users.find(
        (user) => user.username === username && user.password === password
      );
      if (!user) {
        toast.error('Invalid username or password.');
        return;
      }

      toast.success('Login successful!');
      onClose();
      router.push('/');
    }

    if (formType === 'signup') {
      if (!username || !password || !email || !confirmPassword) {
        toast.error('Please fill in all fields.');
        return;
      }

      if (!validatePassword(password)) {
        toast.error(
          'Password must be at least 8 characters long, contain an uppercase letter, a lowercase letter, a number, and a special character.'
        );
        return;
      }

      const existingUser = users.find((user) => user.username === username);
      if (existingUser) {
        toast.error('Username already exists.');
        return;
      }

      if (password!==confirmPassword) {
        toast.error('Password and Confirmed Password must be same.');
      }
      
      
      setUsers([...users, { 'email': email, 'username': username, 'password': password }]);
      toast.success('Signup successful!');
      console.log(users)
      onClose();
      router.push('/');
    }
  }

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
                      <input type="email" placeholder='E-mail' onChange={(e)=>setEmail(e.target.value)} className="w-full px-4 py-2 rounded bg-white/50 backdrop-blur-sm border border-teal-500 text-[var(--primary-color)] placeholder-teal-500 focus:outline-none focus:ring-2 focus:ring-[var(--secondary-color)]"/><br />
                  </>
                :null}
                <input type="text" placeholder='Username' onChange={(e)=>setUsername(e.target.value)} className="w-full px-4 py-2 rounded bg-white/50 backdrop-blur-sm border border-teal-500 text-[var(--primary-color)] placeholder-teal-500 focus:outline-none focus:ring-2 focus:ring-[var(--secondary-color)]" /><br />
                <input type="password" placeholder='Password' onChange={(e)=>setPassword(e.target.value)} className="w-full px-4 py-2 rounded bg-white/50 backdrop-blur-sm border border-teal-500 text-[var(--primary-color)] placeholder-teal-500 focus:outline-none focus:ring-2 focus:ring-[var(--secondary-color)]" /><br />
                {formType=='signup'
                  ?<>
                      <input type="password" placeholder='Confirm Password' onChange={(e)=>setConfirmPassword(e.target.value)} className="w-full px-4 py-2 rounded bg-white/50 backdrop-blur-sm border border-teal-500 text-[var(--primary-color)] placeholder-teal-500 focus:outline-none focus:ring-2 focus:ring-[var(--secondary-color)]" /><br />
                  </>
                :null}
                <button type='submit' className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300" onClick={handleSubmit}>Submit</button>
                {/* {console.log(notification)} */}
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
  