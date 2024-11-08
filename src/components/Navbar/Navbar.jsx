import React from 'react'
import './Navbar.css'
import {Link} from 'react-scroll'
import logo from '../../assets/logo.png'
import contact from '../../assets/contact.png'


function Navbar() {
  return (
    <>
   <nav className="navbar">
    <img src={logo} alt="logo" className='logo'/>
    <div className="desktopMenu">
       <Link className='menulist'>Home</Link>
       <Link className='menulist'>About</Link>
       <Link className='menulist'>Portfolio</Link>
       <Link className='menulist'>Clients</Link>
    </div>
<button className="desktopMenutton">
   <img  className='desktopMenuImage' src={contact} alt="" />
   Contact Me
</button>
   </nav>
   </>
  )
}

export default Navbar