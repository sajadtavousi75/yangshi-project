import React,{useState} from 'react'
import {Link} from 'react-router-dom'

import "./Navbar.css"

export default function Navbar() {

  const [isOpen,SetIsOpen]= useState(false)

  const toggleMenue=()=>{
  SetIsOpen(!isOpen)
  }

  return (
    <div className={`navbar ${isOpen ? 'open' : ''}`}>
      <div className="container">
        <div className="navbar-content">
        <div className={`hamburger ${isOpen ? 'open':''}`} onClick={toggleMenue}>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </div>
            <div className="navbar-left">
              <Link to='/'>
                <img src="/images/svgs/LOgo.svg" alt="" className="navbar-logo" />
              </Link>
            </div>
            <div className="navbar-middle">
                <ul className="navbar-middle__list">
                    <li className="navbar-middle__item">
                        <Link to='/gallery' className='navbar-middle__link'>Gallery</Link>
                    </li>
                    <li className="navbar-middle__item">
                    <Link to='/artist' className='navbar-middle__link'>Artist</Link>
                    </li>
                    <li className="navbar-middle__item">
                    <Link to='/aboutUs' className='navbar-middle__link'>About Us</Link>
                    </li>
                </ul>
            </div>
            <div className="navbar-right">
                <a href="" className="navbar-login">Log In</a>
            </div>
            
        </div>
      </div>
    </div>
  )
}
