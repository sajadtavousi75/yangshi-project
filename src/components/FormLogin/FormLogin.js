import React from 'react'

import './FormLogin.css'

export default function FormLogin() {
  return (
    <div className='login'>
      <div className="container">
        <div className="login-content">
            <form className='login-form' action="#">
                <div className="login-form__title">
                    <h1>Hello...</h1>
                    <p>Enter The Information</p>
                </div>
                <div className="login-form__email">
                    <input type="text" className="login-form__email-input" placeholder='Email' />
                </div>
                <div className="login-form__password">
                    <input type="password" className="login-form__password-input" placeholder='Password' />
                </div>
                <h1 className="forgot-password">Forgot Password?</h1>
                <button className="login-form__btn">Log In</button>
            </form>
        </div>
      </div>
    </div>
  )
}
