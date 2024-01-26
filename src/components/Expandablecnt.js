import React from "react";

export default function Expandablecnt(props) {
  return (
    <>
      <div
        className="expandingcnt"
        style={{ height: "500px",  }}
      >
        {props.expandarr.map((v, i) => {
          return (
            <div
              className="expandingitem col-sm-10 col-md-8"
              style={{
                height: "100%",
                position: "relative",
               cursor:"pointer",
                color: "white",
                backgroundImage: `url(${v.bgimg})`,
                
              }}
            >
              <a href={v.bgimg}><img src={v.bgimg} style={{height:"100%",width:"100%",overflow:"hidden",objectFit:"cover"}}/></a>
            </div>
          );
        })}
      </div>
    </>
  );
}
