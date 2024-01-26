import React from 'react'
import {Route,Routes,useLocation} from 'react-router-dom'
import About from './About'
import Kkk from './Kkk'
import Login from './Login'
import { AnimatePresence } from 'framer-motion'
export default function AnimatedRoutes() {
  const location=useLocation();
  return (
    <AnimatePresence>
    <Routes location={location} key={location.pathname}>
      
      <Route exact path='/'  ></Route>
      <Route exact path='/about' element={<About/>} ></Route>
      <Route exact path='/contact' element={<Kkk/>} ></Route>
      <Route exact path='/login' element={<Login/>} ></Route>
    
      </Routes>
      </AnimatePresence>
  )
}
