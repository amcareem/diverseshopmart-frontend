import React from 'react'
import './Mob.css'
import { Link } from 'react-router-dom'
import redmiphn from '../../assets/redmiphn.png'
import Rating from 'react-rating-stars-component';
import oppophn from '../../assets/oppophn.webp'
import samsungphn from '../../assets/samsungphn.png'
import sparkphn from '../../assets/sparkphn.jpg'
import samsunga04 from '../../assets/samsunga04.jpeg'
import nokia from '../../assets/nokia.webp'
import samsungmo4 from '../../assets/samsungmo4.jpeg'
import zte from '../../assets/zte.jpeg'
import redmi3 from '../../assets/redmi3.jpeg'
import redmiphn2 from '../../assets/redmiphn2.jpeg'
import nokia2 from '../../assets/nokia2.webp'
import nokia3 from '../../assets/nokia3.webp'


export const Mob = () => {
  return (
    <div className="mobile-page">
    
            <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a><Link to='/'>Home</Link></a></li>
                <li class="breadcrumb-item"><a>Gadgets</a></li>
                <li class="breadcrumb-item active" aria-current="page">Mobiles</li>
            </ol>
            </nav>

            <div class="card">
                <img src={redmiphn} class="card-img-top" alt=""/>
                <div class="card-body">
                    <h5 class="card-title">Xioami Redmi Note 9|128 GB</h5>
                    <p class="card-text">LKR. 56,000 </p>
                    <Rating
                        count={5}
                        size={24}
                        value={4} 
                        activeColor="#f00"
                        inactiveColor="#ddd"
                        edit={false} 
                    />
                </div>
            </div>

            <div class="card">
                <img src={oppophn} class="card-img-top" alt=""/>
                <div class="card-body">
                    <h5 class="card-title">Oppo A57|4GB RAM</h5>
                    <p class="card-text">LKR. 74,000 </p>
                    <Rating
                        count={5}
                        size={24}
                        value={5} // You can set the initial value dynamically based on your product rating
                        activeColor="#f00"
                        inactiveColor="#ddd"
                        edit={false} 
                    />
                </div>
            </div>

            <div class="card">
                <img src={samsungphn} class="card-img-top" alt=""/>
                <div class="card-body">
                    <h5 class="card-title">Samsung A14</h5>
                    <p class="card-text">LKR. 62,000 </p>
                    <Rating
                        count={5}
                        size={24}
                        value={4} // You can set the initial value dynamically based on your product rating
                        activeColor="#f00"
                        inactiveColor="#ddd"
                        edit={false} 
                    />
                </div>
            </div>

            <div class="card">
                <img src={nokia} class="card-img-top" alt=""/>
                <div class="card-body">
                    <h5 class="card-title">Nokia 105/106 Dual Sim 4th Edition With Daraz Warranty</h5>
                    <p class="card-text">LKR. 9,500 </p>
                    <Rating
                        count={5}
                        size={24}
                        value={4} 
                        activeColor="#f00"
                        inactiveColor="#ddd"
                        edit={false} 
                    />
                </div>
            </div>

            <div class="card">
                <img src={sparkphn} class="card-img-top" alt=""/>
                <div class="card-body">
                    <h5 class="card-title">Tecno Spark 10C-4GB RAM | TRCSL</h5>
                    <p class="card-text">LKR. 84,000 </p>
                    <Rating
                        count={5}
                        size={24}
                        value={4} // You can set the initial value dynamically based on your product rating
                        activeColor="#f00"
                        inactiveColor="#ddd"
                        edit={false} 
                    />
                </div>
            </div>

            <div class="card">
                <img src={samsunga04} class="card-img-top" alt=""/>
                <div class="card-body">
                    <h5 class="card-title">Samsung A04e mobile 3/32</h5>
                    <p class="card-text">LKR. 43,000 </p>
                    <Rating
                        count={5}
                        size={24}
                        value={2} 
                        activeColor="#f00"
                        inactiveColor="#ddd"
                        edit={false} 
                    />
                </div>
            </div>

            

            <div class="card">
                <img src={samsungmo4} class="card-img-top" alt=""/>
                <div class="card-body">
                    <h5 class="card-title">Samsung M04 4/64 Brand New</h5>
                    <p class="card-text">LKR. 76,000 </p>
                    <Rating
                        count={5}
                        size={24}
                        value={4} 
                        activeColor="#f00"
                        inactiveColor="#ddd"
                        edit={false} 
                    />
                </div>
            </div>

            <div class="card">
                <img src={nokia2} class="card-img-top" alt=""/>
                <div class="card-body">
                    <h5 class="card-title">Nokia BM10 Mini Mobile</h5>
                    <p class="card-text">LKR. 26,000</p>
                    <Rating
                        count={5}
                        size={24}
                        value={4} 
                        activeColor="#f00"
                        inactiveColor="#ddd"
                        edit={false} 
                    />
                </div>
            </div>

            <div class="card">
                <img src={zte} class="card-img-top" alt=""/>
                <div class="card-body">
                    <h5 class="card-title">ZTE Blade V50 Design 4 + 10GB RAM 256GB</h5>
                    <p class="card-text">LKR. 45,000</p>
                    <Rating
                        count={5}
                        size={24}
                        value={4} 
                        activeColor="#f00"
                        inactiveColor="#ddd"
                        edit={false} 
                    />
                </div>
            </div>

            <div class="card">
                <img src={redmiphn2} class="card-img-top" alt=""/>
                <div class="card-body">
                    <h5 class="card-title">Redmi Note 12 - 8GB RAM, AMOLED Display</h5>
                    <p class="card-text">LKR. 56,000 </p>
                    <Rating
                        count={5}
                        size={24}
                        value={4} 
                        activeColor="#f00"
                        inactiveColor="#ddd"
                        edit={false} 
                    />
                </div>
            </div>

            <div class="card">
                <img src={redmi3} class="card-img-top" alt=""/>
                <div class="card-body">
                    <h5 class="card-title">Xiaomi Redmi 12C 6GB RAM</h5>
                    <p class="card-text">LKR. 78,000 </p>
                    <Rating
                        count={5}
                        size={24}
                        value={4} 
                        activeColor="#f00"
                        inactiveColor="#ddd"
                        edit={false} 
                    />
                </div>
            </div>


            <div class="card">
                <img src={nokia3} class="card-img-top" alt=""/>
                <div class="card-body">
                    <h5 class="card-title">
OriginaI Nokia 206 Dual Sim Mobile - Made in Vietnam</h5>
                    <p class="card-text">LKR. 6,850</p>
                    <Rating
                        count={5}
                        size={24}
                        value={4} 
                        activeColor="#f00"
                        inactiveColor="#ddd"
                        edit={false} 
                    />
                </div>
            </div>
   
        
  
    </div>

  )
}
