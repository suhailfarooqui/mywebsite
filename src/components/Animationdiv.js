import React from 'react'
import Lottie from 'lottie-react'
import changinghouse from "./animations/changinghouse.json"
import chasingonplanet from "./animations/chasingonplanet.json"
import shootingastronaut from "./animations/shootingastronaut.json"
import circusbycomputer from "./animations/circusbycomputer.json"
import houseinwater from "./animations/houseinwater.json"
import treadmill from "./animations/treadmill.json"
export default function Animationdiv() {
  return (
    <div className='container'>

        <div className='row fontclass'>
            <div className='col-12' style={{textAlign:"center",marginTop:"20px",padiing:"10px",color:"white"}}><h1>Animations</h1></div>
            <div className='col-12' style={{textAlign:"center",margin:"5px",padiing:"10px",color:"white"}}><h3>Animations can bring a website to life, making it visually appealing and memorable. Animations play a crucial role in enhancing the user experience on websites by adding dynamic and visually engaging elements. These animated elements can serve various purposes, contributing to both aesthetic appeal and functional efficiency.</h3></div>
            <div className='col-6 col-lg-4  my-2' ><Lottie animationData={changinghouse}></Lottie></div>
            <div className='col-6 col-lg-4  my-2 '><Lottie animationData={chasingonplanet}></Lottie></div>
            <div className='col-6 col-lg-4  my-2'><Lottie animationData={houseinwater}></Lottie></div>
            <div className='col-6 col-lg-4  my-2'><Lottie animationData={treadmill}></Lottie></div>
            <div className='col-6 col-lg-4  my-2'><Lottie animationData={shootingastronaut}></Lottie></div>
            <div className='col-6 col-lg-4  my-2'><Lottie animationData={circusbycomputer}></Lottie></div>
        </div>
    </div>
  )
}
