import React,{useState} from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import GalleryBox from '../../components/GalleryBox/GalleryBox'

import dataGallery from '../../components/Datas/Datas'

import './Gallery.css'

export default function Gallery() {

  

  return (
   <>
   <Navbar />
   <section className="main-gallery">
    
   <GalleryBox />
   </section>
   <Footer />
   </>
  )
}
