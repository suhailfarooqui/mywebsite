import React from 'react'
import {motion} from 'framer-motion'
export default function Login() {
  return (
    <motion.div initial={{height:"0px"}} animate={{height:"300px",transitionDuration:"0.45s",TransitionTimingFunction:"ease-in-out"}} exit={{display:"none"}} className='Navbarbullets'>Login</motion.div>
  )
}
