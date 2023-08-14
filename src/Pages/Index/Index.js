import React from 'react'
import Header from '../../components/Header/Header'
import Event from '../../components/Event/Event'
import Articels from '../../components/Articels/Articels'
import Artist from '../../components/Artist/Artist'
import Footer from '../../components/Footer/Footer'
import './Index.css'

export default function Index() {
  return (
    <>
      <Header />
      <section className="main">
        <Event />
        <Articels />
        <Artist />
      </section>
      <Footer />
    </>
  )
}
