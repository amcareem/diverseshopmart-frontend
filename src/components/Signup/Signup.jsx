import React from 'react'
import './Signup.css'

export const Signup = () => {
  return (
    <div className='signup-modal'>
        <div className="signup-modal-content">
      <h1 className="signup-modal-title">Marketplace Signup</h1>
      <div className="role-buttons mb-3">
        <button className="me-3">Buyer Signup</button>
        <button>Seller Signup</button>
      </div>

      <form className="signup-form">

        <div className="form-group">
          <input type="text" placeholder='name' required/>
        </div>

        <div className="form-group">
          <input type="email" placeholder='Email' required/>
        </div>

        <div className="form-group">
          <input type="password"  placeholder='password' required/>
        </div>

        <div className="form-group">
          <input type="text" placeholder='store name'/>
        </div>

        <div className="form-group">

          <textarea placeholder='Store Description'></textarea>

          <textarea placeholder='Store Description' className="form-control w-100"></textarea>

        </div>

     
        <div className="form-group">
          <input placeholder='Preferences' type="text"/>
        </div>

        <div className="form-group">
          <button type="submit" className="signup-btn">Sign Up</button>
        </div>
      </form>

    </div>
    </div>
  )
}
