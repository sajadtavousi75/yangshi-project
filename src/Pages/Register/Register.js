import React from 'react'

import './Register.css'


import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import FormRegister from '../../components/FormRegister/FormRegister'

export default function Register() {
  return (
   <>
   <Navbar />
   <section className="main-register">
    <FormRegister />
   </section>
   <Footer />
   </>
  )
}
