import React from "react";

export default function Backgroundfix() {
  return (
    <div className="row">
      <div
        className="alex col-12 "
        style={{
          backgroundImage: `url("https://th.bing.com/th/id/R.6673ddd48df22aa42c1ce36482e0c9aa?rik=6dMqWO53eZRSAw&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2f9%2f6%2fa%2f29892.jpg&ehk=%2bVCGcOLnChea3ndY3KTzIgxzzw0OfQRcqP6oAyVtQUg%3d&risl=&pid=ImgRaw&r=0")`,
          display: "flex",
          alignContent:"end",
          flexWrap:"wrap"
        }}
      >
        <div className="fontclass" style={{width:"100vw", textAlign:"center", background:"rgba(0,0,0,0.5)",textDecorationLine:"none",padding:"3px",color:"white",marginTop:"10px"}}><h1>DESIGN</h1></div>
        <div className="fontclass" style={{width:"100vw", textAlign:"center",background:"rgba(0,0,0,0.5)", color:"white",padding:"3px",fontSize:"110%"}}>
        <h3>The design of a website has a direct impact on the user experience. A thoughtful and user-centric design contributes to positive interactions, while a poorly designed website can lead to frustration, confusion, and a high bounce rate. Hence we try our best to provide a user experience he never forget.   </h3>

        </div>
       
      </div>
    </div>
  );
}
