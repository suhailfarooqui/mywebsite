import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar"
import Topheader from './components/Topheader';
import Coursel from './components/Coursel';
import Backgroundfix from './components/Backgroundfix';
import Fadingcnt from './components/Fadingcnt';
import Fadingcnt2 from './components/Fadingcnt2';
import OverlayHalf from './components/OverlayHalf';
// import aaa from './aaa.jpg'
import navigationcompass from './navigationcompass.jpg'
import Icons from './components/Icons';
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import About from './components/About';
import Allcmp from './components/About';
import Navbarnew from './components/Navbarnew'
import aaa from "./components/images/aaa.jpg"
import color from "./components/images/color2.jpg"
import simplicity2 from "./components/images/simplicity2.jpg"
import simplicity1 from "./components/images/simplebg.jpg"
import Dropdown from './components/Dropdown';
import Kkk from './components/Kkk';
import Login from './components/Login';
import AnimatedRoutes from './components/AnimatedRoutes';
import Lottie from 'lottie-react';
import ferrari from "./components/images/ferrarifast.mp4"
import navigateoverlay from "./components/images/navigate.png"
import caligraphy from "./components/images/caligraphy.jpg"

import Contactus from "./components/cnt.json"
// import Contactuslotte from "./components/Animation - 1705938213413.json"
import Contactuslotte from "./components/cnt.json"
import Lotteanimation from './components/Lotteanimation';
import Animationdiv from './components/Animationdiv';
function App() {
  
  
  const showcontactpage=()=>{
    var contactpage=document.getElementById("contactpageid")
    return contactpage.classList.add("active")
  }
  const hidecontactpage=()=>{
    var contactpage=document.getElementById("contactpageid")
    return contactpage.classList.remove("active")
 }
  const courseldata=[{
    name:"responsive",
    discription:""
  }]
  const overlayhalfdata=[{
     name:"NAVIGATION",
     bgimg:navigationcompass,
     overlayimg:navigateoverlay,
     link:"https://th.bing.com/th/id/R.32079ff5fa0b188d51aa863b1d6736dc?rik=DzJgHg0VZn7BRw&pid=ImgRaw&r=0",
     discription:"Users will get easy navigation to the various components of the site and it is easy for them to find for which custoemr is looking for"
  },
  {
    name:"SIMPLICITY",
     bgimg:simplicity1,
     overlayimg:simplicity2,
     link:"https://th.bing.com/th/id/R.32079ff5fa0b188d51aa863b1d6736dc?rik=DzJgHg0VZn7BRw&pid=ImgRaw&r=0",
     discription:"Our webcontent and design are simple and easy to understandable for various types of users."
  },
  
]
  return (<>
    <Topheader/>
    <BrowserRouter>
    
    <Navbarnew/>
    <AnimatedRoutes/>
    </BrowserRouter>
    <Coursel/>
    
    <Backgroundfix/>
    
    <Fadingcnt img2={caligraphy} img1={color}/>
    <Fadingcnt2/>
    
    <Animationdiv/>
    <div className='contactusanimation'  style={{position:"fixed",zIndex:"3",top:"40vh",cursor:"pointer",display:"flex"}}>
    <Lottie style={{display:"flex",overflow:"visible",left:"-100px"}} onClick={showcontactpage} animationData={Contactus} />
</div>

<div id='contactpageid' className='contactpage' ><button className='btn btn-close btn-sucess' style={{float:'right',padding:"10px",color:"red"}} onClick={hidecontactpage}></button></div> 
    <OverlayHalf OverlayHalfImg={overlayhalfdata}/>
    <Icons/>
  
    </>);
}

export default App;
