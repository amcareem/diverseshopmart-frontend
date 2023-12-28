import React from 'react'
import './NavbarC.css'
import { Link } from 'react-router-dom'

export const NavbarC = () => {
  return (
    <div className='navbarC'>
        
        <ul className='nav-menu'>
          <li>
          <Link to='/mobile'>Gadgets</Link>
            <span className="dropdown-indicator"></span>
            <ul className="dropdown">
              <li><Link to='/mobile'>Mobiles</Link></li>
              <li><Link to='/tablet'>Tablets</Link></li>
              <li><Link to='/laptop'>laptops</Link></li>
              
            </ul>
          </li>
          <li>
            Electronic Accessories
            <span className="dropdown-indicator"></span>
            <ul className="dropdown">
            
              <li><Link to='/mobileaccessories'>Mobile Accessories</Link></li>
              <li><Link to='/audio'>Audio</Link></li>
             
              <li><Link to='/computeraccessories'>Computer Accessories</Link></li>

            </ul>
          </li>
          <li>
            Health & Beauty
            <span className="dropdown-indicator"></span>
            <ul className="dropdown">
              
              <li><Link to='/fragrances'>Fragrances</Link></li>
              <li><Link to='/skincare'>Skin care</Link></li>
          
            </ul>
          </li>
          <li>
            Men's Fashion
            <span className="dropdown-indicator"></span>
            <ul className="dropdown">
         
              <li><Link to='/mencloth'>Clothings</Link></li>
              <li><Link to='/menfw'>Footwears</Link></li>

            </ul>
          </li>
          <li>
            Women's Fashion
            <span className="dropdown-indicator"></span>
            <ul className="dropdown">
              <li><Link to='/womacc'>Accessories</Link></li>
              <li><Link to='/womcloth'>Clothings</Link></li>
              <li><Link to='/womfw'>Footwears</Link></li>
              <li><Link to='/wombag'>Bags</Link></li>
            
            </ul>
          </li>
          <li>
            Watches
            <span className="dropdown-indicator"></span>
            <ul className="dropdown">
              <li><Link to='/womwatch'>Women's watches</Link></li>
              <li><Link to='/menwatch'>Men's watches</Link></li>
              
            </ul>
          </li>
          
        </ul>
      </div>

    
  )
}
