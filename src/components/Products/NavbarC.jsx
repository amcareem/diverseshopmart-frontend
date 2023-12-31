import React from 'react'
import './NavbarC.css'
import { Link } from 'react-router-dom'

export const NavbarC = () => {
  return (
    <div className='navbarC'>
        
        <ul className='nav-menu'>
          <li>
          <Link to='/mobile'>Mobiles</Link>
            
          </li>
          <li>
          <Link to='/coma'>Computer Accessories</Link>
            
          </li>
          <li>
          <Link to='/frag'>Fragrances</Link>
            
          </li>
          <li>
            Men's Fashion
            <span className="dropdown-indicator"></span>
            <ul className="dropdown">
         
              <li><Link>Clothings</Link></li>
              <li><Link>Footwears</Link></li>

            </ul>
          </li>
          <li>
            Women's Fashion
            <span className="dropdown-indicator"></span>
            <ul className="dropdown">
              <li><Link >Accessories</Link></li>
              <li><Link>Clothings</Link></li>
              <li><Link>Footwears</Link></li>
              <li><Link>Bags</Link></li>
            
            </ul>
          </li>
          <li>
            Watches
            <span className="dropdown-indicator"></span>
            <ul className="dropdown">
              <li><Link>Women's watches</Link></li>
              <li><Link>Men's watches</Link></li>
              
            </ul>
          </li>
          
        </ul>
      </div>

    
  )
}
