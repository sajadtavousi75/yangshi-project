import React,{useState} from 'react'

import './GalleryBox.css'

import {dataGallery} from '../Datas/Datas'

export default function GalleryBox(props) {
    const[gallery,setGallery]=useState(dataGallery)
  return (
    <div className='gallery'>
      <div className="container">
        <div className="row gallery-content">
            {gallery.map((data)=>(
            <div className="col-lg-6 gallery-box">
                <img src={data.image} alt="" className="gallery-box__img" />
                <button className="gallery-box__btn">Show More Details</button>
            </div>
                ))}
            
        </div>
      </div>
    </div>
  )
}
