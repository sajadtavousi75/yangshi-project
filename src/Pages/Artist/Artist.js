import React from 'react'

import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import ArtistContent from '../../components/ArtisrContent/ArtistContent'

import './Artist.css'

export default function Artist() {
  return (
    <>
    <Navbar />
    <section className="main-artist">

    <ArtistContent />
    </section>
    <Footer />
    </>
  )
}
