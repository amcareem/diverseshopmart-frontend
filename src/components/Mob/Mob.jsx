import React from 'react'
import './Mob.css'
import { Link } from 'react-router-dom'
import Rating from 'react-rating-stars-component';


export const Mob = (props) => {
  return (
    <div className="mobile-page">
    
            <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a><Link to='/'>Home</Link></a></li>
                
                <li class="breadcrumb-item active" aria-current="page">Mobiles</li>
            </ol>
            </nav>

            <div class="card">
                <img src={props.image} class="card-img-top" alt=""/>
                <div class="card-body">
                <h5 class="card-title">{props.name}</h5>
                    <p class="card-text">{props.price}</p>
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
                <img src={props.image}  class="card-img-top" alt=""/>
                <div class="card-body">
                <h5 class="card-title">{props.name}</h5>
                    <p class="card-text">{props.price}</p>
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
                <img src={props.image}  class="card-img-top" alt=""/>
                <div class="card-body">
                <h5 class="card-title">{props.name}</h5>
                    <p class="card-text">{props.price}</p>
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
                <img src={props.image}  class="card-img-top" alt=""/>
                <div class="card-body">
                <h5 class="card-title">{props.name}</h5>
                    <p class="card-text">{props.price}</p>
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
                <img src={props.image}  class="card-img-top" alt=""/>
                <div class="card-body">
                <h5 class="card-title">{props.name}</h5>
                    <p class="card-text">{props.price}</p>
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
                <img src={props.image}  class="card-img-top" alt=""/>
                <div class="card-body">
                <h5 class="card-title">{props.name}</h5>
                    <p class="card-text">{props.price}</p>
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
                <img src={props.image}  class="card-img-top" alt=""/>
                <div class="card-body">
                <h5 class="card-title">{props.name}</h5>
                    <p class="card-text">{props.price}</p>
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
                <img src={props.image}  class="card-img-top" alt=""/>
                <div class="card-body">
                <h5 class="card-title">{props.name}</h5>
                    <p class="card-text">{props.price}</p>
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
                <img src={props.image}  class="card-img-top" alt=""/>
                <div class="card-body">
                <h5 class="card-title">{props.name}</h5>
                    <p class="card-text">{props.price}</p>
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
                <img src={props.image}  class="card-img-top" alt=""/>
                <div class="card-body">
                <h5 class="card-title">{props.name}</h5>
                    <p class="card-text">{props.price}</p>
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
                <img src={props.image}  class="card-img-top" alt=""/>
                <div class="card-body">
                    <h5 class="card-title">{props.name}</h5>
                    <p class="card-text">{props.price}</p>
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
                <img src={props.image} class="card-img-top" alt=""/>
                <div class="card-body">
                    <h5 class="card-title">{props.name}</h5>
                    <p class="card-text">{props.price}</p>
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
