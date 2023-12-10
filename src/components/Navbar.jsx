import logo from '../assets/logo.jpg'
import React,{useState} from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'


export const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand"><img src={logo} alt=''/></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page"><Link className='link-1'>Home</Link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link"><Link className='link-1' to='/about'>Products</Link></a>
        </li>
        
        <li class="nav-item">
          <a class="nav-link"><Link className='link-1' to='/about'>About Us</Link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link"><Link className='link-1'>Log In</Link></a>
        </li>
        
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
  )
}
