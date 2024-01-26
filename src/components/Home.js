import React from 'react'
import {motion} from 'framer-motion'
export default function Home() {
  return (
    <motion.div initial={{opacity:1,height:"300px"}} animate={{opacity:1,height:"0px",transitionDuration:"0.75s",TransitionTimingFunction:"ease-in-out"}} exit={{opacity:1,height:"300px",}} className='Navbarbullets'>Home</motion.div>
  )
}
