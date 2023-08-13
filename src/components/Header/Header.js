import React from 'react'
import Navbar from '../Navbar/Navbar'
import Landing from '../Landing/Landing'

import './Header.css'

export default function Header() {
  return (
    <header className="header">
        <Navbar />
        <Landing />
    </header>
    
  )
}
