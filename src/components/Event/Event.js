import React from 'react'

import './Event.css'

export default function Event() {
  return (
    <div className='events'>
      <div className="container">
        <div className="row events-content">
            <div className="col-lg-6 event-des">
                <h1 className="event-des__title">Events</h1>
                <div className="event-information">
                  <h1>JOIN US</h1>
                  <h3>lectus vestibulummattis ullamcorper</h3>
                  <h1>00/00</h1>
                </div>
                <div className="event-information">
                  <h1>JOIN US</h1>
                  <h3>lectus vestibulummattis ullamcorper</h3>
                  <h1>00/00</h1>
                </div>
            </div>
            <div className="col-lg-6 event-img">
                <img src="/images/pexels-anni-roenkae-2517443.png" alt="" />
                <h1 className='text-hover'>Events
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, non!
                </h1>
            </div>
        </div>
      </div>
    </div>
  )
}
