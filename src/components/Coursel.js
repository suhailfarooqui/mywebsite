import React from 'react'
import safe from "./images/safe and secure.jpg"
import  speed from "./images/red-bull-f1.jpg"
import responsive from "./images/responsive.mp4"
import ferrari from "./images/ferrarifast.mp4"

import safesecure from "./images/safesecure.mp4"

export default function Coursel() {
  return (<>
  <div className='courseldiv' style={{backgroundImage:responsive}} >  
    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel" data-bs-pause="false" data-bs-interval="6000">
  
  <div class="carousel-inner">
    <div class="carousel-item active">
      {/* <img src={responsive} style={{maxHeight:"750px"}} class="d-block object-fit-cover w-100" alt="..."/> */}
      <video src={responsive} autoPlay muted loop style={{maxHeight:"750px"}} className="d-block object-fit-cover w-100" alt="..."/>
      <div class="carousel-caption fontclass  d-md-block" style={{left:0,bottom:0}} >
        <h1 >RESPONSIVENESS</h1>
        <h3>Meet our responsive tailor made design for every screen to provde the best customer experience</h3>
      </div>
    </div>
    <div class="carousel-item" style={{margin:0,padding:0}}>
      {/* <img src={speed} style={{maxHeight:"750px"}} class="d-block object-fit-cover w-100" alt="..."/> */}
      {/* <video autoPlay={true} loop={true} src={ferrari}></video> */}
     {/* <div>
     <video autoPlay={true} loop={true} src={ferrari} style={{maxHeight:"750px"}} className='d-block object-fit-cover w-100 '/>
      </div>  */}
      <video src={ferrari} autoPlay muted loop style={{maxHeight:"750px"}} className="d-block object-fit-cover w-100" alt="..."/>
      <div class="carousel-caption fontclass  d-md-block" style={{left:0,bottom:0}}>
        <h1>FAST SITE SPEED</h1>
        <h3>Our optimized images, multimedia elements , caching and content delivery networks (CDNs) results in faster loading times and improves site speed.</h3>
      </div>
    </div>
    <div class="carousel-item">
      <video src={safesecure} style={{maxHeight:"750px"}} autoPlay muted loop class="d-block object-fit-cover w-100" alt="..."/>
      <div class="carousel-caption fontclass  d-md-block" style={{left:0,bottom:0}} >
        <h1>SAFETY AND SECURITY</h1>
        <h3>We Implement SSL encryption for data security and regularly update and patch software to prevent vulnerabilities.</h3>
      </div>
    </div>
   
  </div>
  
</div>
</div>
</>)
}
