import React from 'react'

import './Login.css'

import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import FormLogin from '../../components/FormLogin/FormLogin'

export default function Login() {
  return (
    <>
    <Navbar />
    <section className="main-login">
      <FormLogin />
    </section>
    <Footer />
    </>
    
  )
}
