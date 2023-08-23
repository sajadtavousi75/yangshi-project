import React, { useState } from 'react'

import './ArtistContent.css'

import { dataArtist } from '../Datas/Datas'

export default function ArtistContent() {

    const[artist,setArtist]=useState(dataArtist)
  return (
    <div className='artist-page'>
        <div className="container">
            <div className="artist-content-page">
                <div className="artist-boxes">
                    <div className="row artist-box">
                        {artist.map((data)=>(
                        <>
                        <div className="col-lg-4 artist-box__img">
                        <img src={data.image} alt="" />
                    </div>
                    <div className="col-lg-8 artist-box__des">
                        <h1 className="artist-box__name">{data.name}</h1>
                        <p className="artist-box__text">{data.des}</p>
                    </div>
                        </>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
