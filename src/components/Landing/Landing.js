import React from 'react'

import './Landing.css'

export default function Landing() {
  return (
    <section className="landing">
        <div className="container">
            <div className="row landing-content">
                <div className="col-lg-8 col-md-6 landing-des">
                <div className="des-content">
                  IT'S <span className="word-dark">ART</span> TIME
                  <br />
                  <span className='line-botton'><span className="word-dark">ART</span> IS HERE</span>
                </div>
                </div>
                <div className="col-lg-4 col-md-6 landing-img">
                    <img className='landing-logo' src="/images/svgs/Asset 1.svg" alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}
