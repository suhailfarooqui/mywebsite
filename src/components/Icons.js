import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import { faFlask } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function Icons() {
  return (
    <>
      <div
        className="row"
        style={{
          background: "rgb(0,0,0,0.9)",
          padding:"10px"
          
        }}
      >
        <div className="col-12  col-lg-4 col-md-6 " >
      <div className="jjj"><h1>ADDRESS</h1></div>
      <div className="jjj" ><p>4th floor, E-508 
        
        Jaitpur ext-2, Jaitpur<br/>
        New Delhi-110044 <br/>
        Mobile:- 8368483359<br/>
        Email:- suhailnpti@gmail.com
        </p></div>
        </div>

        <div className="col-12 col-md-6 col-lg-4 iconscenter">
        <br/>
            <h4>FIND US</h4>
            <br/>
        <iframe style={{width:"80%",height:"80%"}} src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d569.5323025019273!2d77.33479958727344!3d28.513318007484227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sjaitpur%20ext%202%20khaddA%20COLONY!5e0!3m2!1sen!2sin!4v1699031611421!5m2!1sen!2sin"   allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

        <div className="col-12 col-md-6 col-lg-4 ">
            <br/>
            <br/>
           <h4 className="iconscenter">Follow us</h4>
           
           <br/>
            
         <div className="iconscenter">
          <a href="https://www.facebook.com/rangeroverfam">
            <FontAwesomeIcon
              icon={faFlask}
              beat
              size="2xl"
              style={{ cursor: "pointer", color: "white", padding: "10px" }}
              ></FontAwesomeIcon>
          </a>
          <FontAwesomeIcon
            icon={faFacebook}
            beat
            style={{ color: "white", padding: "10px" }}
            size="2xl"
            />
          <a href="https://www.instagram.com/amrita_amme/">
            <FontAwesomeIcon
              icon={faInstagram}
              beat
              size="2xl"
              style={{ color: "white", padding: "10px" }}
              />
          </a>
          </div>
        </div>
      </div>
    </>
  );
}


