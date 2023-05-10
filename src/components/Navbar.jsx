import React from 'react'
import { Link } from 'react-router-dom'
import  Logo  from "../img/logo.png"

 export const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="container">
        <div className="logo">
          <img src={Logo} alt='' />
        </div>
        <div className="links"></div>
        <Link className='link' to="/?cat=art">
          <h5>ART</h5>
        </Link>
        <Link className='link' to="/?cat=science">
          <h5>SCIENCE</h5>
        </Link>
        <Link className='link' to="/?cat=technology">
          <h5>TECHNOLOGY</h5>
        </Link>
        <Link className='link' to="/?cat=cinema">
          <h5>CINEMA</h5>
        </Link>
        <Link className='link' to="/?cat=design">
          <h5>DESIGN</h5>
        </Link>
        <Link className='link' to="/?cat=food">
          <h5>FOOD</h5>
        </Link>
      </div>
    </div>
  )
}
