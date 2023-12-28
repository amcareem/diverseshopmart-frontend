import React from 'react'
import './Mob.css'
import { Link } from 'react-router-dom'
import redmiphn from '../../assets/redmiphn.png'
import Rating from 'react-rating-stars-component';
import oppophn from '../../assets/oppophn.webp'
import samsungphn from '../../assets/samsungphn.png'
import sparkphn from '../../assets/sparkphn.jpg'

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
                <img src={sparkphn} class="card-img-top" alt=""/>
                <div class="card-body">
                    <h5 class="card-title">Tecno Spark 10C-4GB RAM | TRCSL</h5>
                    <p class="card-text">LKR. 56,000 </p>
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
                <img src={redmiphn} class="card-img-top" alt=""/>
                <div class="card-body">
                    <h5 class="card-title">Xioami Redmi Note 9</h5>
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
                <img src={redmiphn} class="card-img-top" alt=""/>
                <div class="card-body">
                    <h5 class="card-title">Xioami Redmi Note 9</h5>
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
                <img src={redmiphn} class="card-img-top" alt=""/>
                <div class="card-body">
                    <h5 class="card-title">Xioami Redmi Note 9</h5>
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
                <img src={redmiphn} class="card-img-top" alt=""/>
                <div class="card-body">
                    <h5 class="card-title">Xioami Redmi Note 9</h5>
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
                <img src={redmiphn} class="card-img-top" alt=""/>
                <div class="card-body">
                    <h5 class="card-title">Xioami Redmi Note 9</h5>
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
                <img src={redmiphn} class="card-img-top" alt=""/>
                <div class="card-body">
                    <h5 class="card-title">Xioami Redmi Note 9</h5>
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
                <img src={redmiphn} class="card-img-top" alt=""/>
                <div class="card-body">
                    <h5 class="card-title">Xioami Redmi Note 9</h5>
                    <p class="card-text">LKR. 56,000 </p>
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
                <img src={redmiphn} class="card-img-top" alt=""/>
                <div class="card-body">
                    <h5 class="card-title">Xioami Redmi Note 9</h5>
                    <p class="card-text">LKR. 56,000 </p>
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
   
        
  
    </div>

  )
}
