import React from 'react'
import {motion} from 'framer-motion'

export default function About() {
  return (<>
    <motion.div  initial={{height:"0px"}} animate={{height:"300px",transitionDuration:"0.4s",TransitionTimingFunction:"ease-in"}} exit={{opacity:1,height:"0px",display:"none"}} className='Navbarbullets' ><p ><h1 style={{display:"flex", justifyContent:"center"}}>Make my webiste</h1><br></br><br></br>lore lasj dfl safas fl asldf jlasj fl  sahdkf hkash f asf haks fhaskdfhash f ashdkf hkashfdkjhaskh fk hasdkfh sadhfsa hf hasfhkh hkh d kfhaks hfhj khkjh h jsalfjla sflasld fjlasjfl asjdlfjasld jfljaslfj aslf aslfjlsdajflksaj fl asjdf ljdasf jalfj lasj</p></motion.div>
    </>)
}
