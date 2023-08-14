import React from 'react'

import './Artist.css'

export default function Artist() {
  return (
    <div className='artist'>
      <div className="container">
        <div className="artist-content">
            <h1 className="artist-content__title">Artists</h1>
            <div className="row artist-content__boxes">
                <div className="col-lg-4 artist-content__box">
                    <img src="/images/Layer 1.png" alt="" className="artist-content__box-img" />
                    <h1 className="artist-content__box-name">Artist</h1>
                    <p className="artist-content__box-des">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium perspiciatis quasi nihil blanditiis doloribus quae?.</p>
                </div>
                <div className="col-lg-4 artist-content__box">
                    <img src="/images/Layer 2.png" alt="" className="artist-content__box-img" />
                    <h1 className="artist-content__box-name">Artist</h1>
                    <p className="artist-content__box-des">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias hic laudantium consectetur optio reiciendis voluptas?</p>
                </div>
                <div className="col-lg-4 artist-content__box">
                    <img src="/images/Layer 3.png" alt="" className="artist-content__box-img" />
                    <h1 className="artist-content__box-name">Artist</h1>
                    <p className="artist-content__box-des">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores nihil non corrupti. Cumque, praesentium totam.</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
