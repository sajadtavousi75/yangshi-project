import React from 'react'
import { Link } from 'react-router-dom'

import './FormRegister.css'

export default function FormRegister() {
  return (
    <div className='login'>
      <div className="container">
        <div className="login-content">
            <form className='login-form' action="#">
                <div className="login-form__title">
                    <h1>Hello...</h1>
                    <p>Enter The Information</p>
                </div>
                <div className="login-form__username">
                    <input type="text" className="login-form__username-input" placeholder='User Name' />
                </div>
                <div className="login-form__phone">
                    <input type="number" className="login-form__phone-input" placeholder='Phone' />
                </div>
                <div className="login-form__email">
                    <input type="text" className="login-form__email-input" placeholder='Email' />
                </div>
                <div className="login-form__password">
                    <input type="password" className="login-form__password-input" placeholder='Password' />
                </div>
                <button className="login-form__btn">Register</button>
                <h1>I Have An Acount: <Link to='/login'>Login</Link></h1>
            </form>
        </div>
      </div>
    </div>
  )
}
