import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar() {
  return (<>
    <nav className="navbar bg-dark" data-bs-theme="dark"  style={{margin:"0px",padding:"0px",left:"0",top:"0" }}>
  <div className="container-fluid gy-0 " style={{backgroundColor:"pink",color:"black",height:"100%", paddingLeft:"5%",paddingRight:"5%",fontFamily:"cursive"}}>
    <Link className="navbar-brand hovernavbar" to="/">Home</Link>
    <Link className="navbar-brand hovernavbar" to="/About">About</Link>
    <Link className="navbar-brand hovernavbar" to="/Contact">Contact</Link>
    <Link className="navbar-brand hovernavbar" to="/Login">Login</Link>
  </div>
</nav>
    </>)
}
