import React from 'react'

import './Event.css'

export default function Event() {
  return (
    <div className='events'>
      <div className="container">
        <div className="row events-content">
            <div className="col-lg-6 event-des">
                <h1 className="event-des__title">Events</h1>
                <table>
                  <tr>
                    <td>JOIN US</td>
                    <td>sed lectus vestibulummattis ullamcorper</td>
                    <td>00/00</td>
                  </tr>
                  <tr>
                    <td>JOIN US</td>
                    <td>sed lectus vestibulummattis ullamcorper</td>
                    <td>00/00</td>
                  </tr>
                </table>
            </div>
            <div className="col-lg-6 event-img">
                <img src="/images/pexels-anni-roenkae-2517443.png" alt="" />
            </div>
        </div>
      </div>
    </div>
  )
}
