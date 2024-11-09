import React, { useState } from 'react'
import './Navbar.css'
import {Link} from 'react-scroll'
import logo from '../../assets/logo.png'
import contact from '../../assets/contact.png'
import menu from '../../assets/menu.png'


function Navbar() {
   const [showMenu,setShowMenu]=useState(false);
  return (
    <>
   <nav className="navbar">
    <img src={logo} alt="logo" className='logo'/>
    <div className="desktopMenu">
       <Link activeClass='active' to="intro" spy="true" smooth="true" offset={-100} duration={500} className='menulist'>Home</Link>
       <Link activeClass='active' to="skills" spy="true" smooth="true" offset={-100} duration={500} className='menulist'>About</Link>
       <Link activeClass='active' to="works" spy="true" smooth="true" offset={-100} duration={500} className='menulist'>Portfolio</Link>
       <Link activeClass='active' to="client" spy="true" smooth="true" offset={-100} duration={500} className='menulist'>Clients</Link>
    </div>
<button className="desktopMenutton" onClick={()=>{
   document.getElementById('contact').scrollIntoView({behavior:'smooth'});
}}>
   <img  className='desktopMenuImage' src={contact} alt="" />
   Contact Me
</button>
<img src={menu} alt="mobMenu" className='mobMenu'onClick={()=>setShowMenu(!showMenu)} />
    <div className="navMenu" style={{display:showMenu?'flex':'none'}} >
       <Link activeClass='active' to="intro" spy="true" smooth="true" offset={-100} duration={500} className='list' onClick={()=>setShowMenu(false)}>Home</Link>
       <Link activeClass='active' to="skills" spy="true" smooth="true" offset={-100} duration={500} className='list' onClick={()=>setShowMenu(false)}>About</Link>
       <Link activeClass='active' to="works" spy="true" smooth="true" offset={-100} duration={500} className='list' onClick={()=>setShowMenu(false)}>Portfolio</Link>
       <Link activeClass='active' to="client" spy="true" smooth="true" offset={-100} duration={500} className='list' onClick={()=>setShowMenu(false)}>Clients</Link>
       <Link activeClass='active' to="contact" spy="true" smooth="true" offset={-100} duration={500} className='list' onClick={()=>setShowMenu(false)}>Contact</Link>
    </div>
   </nav>
   </>
  )
}

export default Navbar