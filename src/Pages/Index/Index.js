import React from 'react'
import Header from '../../components/Header/Header'
import Event from '../../components/Event/Event'
import './Index.css'

export default function Index() {
  return (
    <>
      <Header />
      <section className="main">
        <Event />
      </section>
    </>
    
  )
}
