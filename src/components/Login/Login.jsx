import React from 'react';
import './Login.css'
import { Link } from 'react-router-dom';

export const Login = () => {
  return (
    <div class="login-container">
    <h1 class="login-title">Login</h1>
    <form class="login-form">
      <div class="form-group">
        <input type="email" id="email" v-model="loginDetails.email" placeholder="Email" required/>
        
      </div>

      <div class="form-group">
        <input type="text" id="username" v-model="loginDetails.username" placeholder="Username" required/>
      
      </div>

      <div class="form-group">
        <input type="password" id="password" v-model="loginDetails.password" placeholder="Password" required/>
       
      </div>

      <div class="form-group">
        <select id="role" v-model="loginDetails.role" required>
          <option value="" disabled>Select your role</option>
          <option value="admin">Admin</option>
          <option value="buyer">Buyer</option>
          <option value="seller">Seller</option>
        </select>
      </div>

      <div class="form-group">
        <button type="submit" class="login-btn">Login</button>
      </div>

      <div class="additional-options">
        <p>Don't have an account? <a><Link to='/signup'>Sign up</Link></a></p>
        <p><a><Link to='/reset'>Forgot your password?</Link></a></p>
      </div>
    </form>
  </div>
  );
};
