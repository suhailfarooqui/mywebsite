import React from 'react'

export default function Fadingcnt(props) {
  return (
    <div className="fadingcnt fontclass row gx-0" >
   <div class="fadingitem col-12 col-md-6" data-aos="fade-left" style={{backgroundImage:`url(${props.img1})`}}>
   <div ><p><h1 className="colorsspan">
    <span>C</span>
    <span>O</span>
    <span>L</span>
    <span>O</span>
    <span>R</span>
    <span>S</span>
    </h1><br/><h3>Colors play a crucial role in the visual appeal of a website. Well-chosen color combinations can create a visually pleasing and harmonious design that attracts and holds the user's attention.
      </h3></p></div>
   </div>
      
    
   <div class="fadingitem col-12 col-md-6" data-aos="fade-right" style={{backgroundImage:`url(${props.img2})`}}>
   <div ><p><h1>lorem</h1><br/><h3>ajsdlfjlasjdf</h3></p></div>
   </div>
  </div>
  )
}
