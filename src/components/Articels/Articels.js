import React from 'react'

import './Articels.css'

export default function Articels() {
  return (
    <div className='articel'>
      <div className="container">
        <div className="row articel-content">
            <div className="col-lg-6  articel-content__des">
                <h1 className="articel-content__title">Articels</h1>
                <p className="articel-content__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quis, necessitatibus minima eum officiis voluptate? Officiis commodi recusandae harum magni.</p>
                <button>Detils</button>
            </div>
            <div className="col-lg-6  articel-content__img">
                <img src="/images/_cobalt blue_ by Antarctic Spring _ Digital painting portrait, Digital portrait art, Portrait art 1.png" alt="" />
            </div>
        </div>
      </div>
    </div>
  )
}
