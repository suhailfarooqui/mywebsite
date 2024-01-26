import React from 'react'
import {motion} from 'framer-motion'
export default function Kkk() {
  return (
    <motion.div initial={{height:"0px"}} animate={{height:"300px",transitionDuration:"0.75s",TransitionTimingFunction:"ease-in-out"}} exit={{display:"none"}} className='Navbarbullets'>Kkk</motion.div>
  )
}
