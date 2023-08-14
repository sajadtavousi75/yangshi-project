import React from 'react'

import './Footer.css'

export default function Footer() {
  return (
    <div className='footer'>
      <div className="container">
        <div className="row footer-content">
            <div className="col-lg-4 footer-content__link">
              <ul className="footer-content__link-list">
                <li className="footer-content__link-item">About Us</li>
                <li className="footer-content__link-item">Terms Of Services</li>
                <li className="footer-content__link-item">Privacy Policy</li>
              </ul>
            </div>
            <div className="col-lg-4 footer-content__logo">
              <img src="/images/svgs/Logo footer.svg" alt="" />
            </div>
            <div className="col-lg-4 footer-content__social">
              <h3 className='information'>Call : <span className="number">09137375094</span></h3>
              <h3 className='information'>Email : <span className="email">sajad.tavoosi75@gmail.com</span></h3>
              <div className="social-icon">
                <div className="icon">
                    <img src="/images/svgs/instagram.svg" alt="" />
                </div>
                <div className="icon">
                    <img src="/images/svgs/pinterest.svg" alt="" />
                </div>
                <div className="icon">
                    <img src="/images/svgs/linkedin.svg" alt="" />
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}
