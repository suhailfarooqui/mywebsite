import React from "react";

export default function Overlay(props) {
  return (
    <div className="row maincontainer" >
        {props.images.map((image,index)=>{
            console.log(index)
            return(<>
           <div className="col-md-4 col-sm-6 col-lg-3 col-12 contain " key={index} style={{backgroundImage:`url(${image.bgimg})`, backgroundSize:"100%"}}>
           <div className="overlay col-12 col-md-4 col-sm-6 col-lg-3 " key={index} style={{backgroundImage:`url(${image.overlayimg})`, backgroundSize:"100%"}}>
             <a href={image.link} className="text">
               {image.name}
             </a>
           </div>
         </div>
         </>)
        })}
      
    </div>
  );
}
