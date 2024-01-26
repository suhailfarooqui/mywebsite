import React from 'react'

export default function OverlayHalf(props) {
    

  return (<>
   <div className="row  lastcontainer" style={{marginTop:"30px"}}>
    {props.OverlayHalfImg.map((v,i)=>{
        return(<>
        <div className="col-12 col-md-6 contain2"  key={i} style={{backgroundImage:`url(${v.bgimg})` , backgroundSize:"100%"}}>
        <div className="overlay" key={i} style={{backgroundImage:`url(${v.overlayimg})`, backgroundSize:"100%" , display:"flex",flexWrap:"wrap"}}>
          <div className="contentsajal linktext fontclass" >

         
            <h1>{v.name}</h1>
          
          <h3>{v.discription}</h3>
        </div>
        </div>
      </div>
      </> )
    })}
      </div>
      
    
    </>)
}
