import React from 'react'

import "./Navbar.css"

export default function Navbar() {
  return (
    <div className='navbar'>
      <div className="container">
        <div className="navbar-content">
            <div className="navbar-left">
                <img src="/images/svgs/LOgo.svg" alt="" className="navbar-logo" />
            </div>
            <div className="navbar-middle">
                <ul className="navbar-middle__list">
                    <li className="navbar-middle__item">
                        <a href="" className="navbar-middle__link">Gallery</a>
                    </li>
                    <li className="navbar-middle__item">
                        <a href="" className="navbar-middle__link">Artist</a>
                    </li>
                    <li className="navbar-middle__item">
                        <a href="" className="navbar-middle__link">About Us</a>
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
