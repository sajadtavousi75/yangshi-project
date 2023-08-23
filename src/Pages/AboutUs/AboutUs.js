import React from 'react'

import './AboutUs.css'

import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import AboutUsContent from '../../components/AboutUsContent/AboutUsContent'

export default function AboutUs() {
  return (
    <>
    <Navbar />
    <section className="main-aboutUs">

    <AboutUsContent />
    </section>
    <Footer />
    </>
  )
}
