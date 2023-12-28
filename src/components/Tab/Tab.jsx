import React from 'react'
import './Tab.css'
import { Link } from 'react-router-dom'
import tab1 from '../../assets/tab/tab1.webp'
import Rating from 'react-rating-stars-component';
import tab2 from '../../assets/tab/tab2.webp'
import tab3 from '../../assets/tab/tab3.jpeg'
import tab4 from '../../assets/tab/tab4.webp'
import tab7 from '../../assets/tab/tab7.webp'
import tab5 from '../../assets/tab/tab5.webp'
import tab6 from '../../assets/tab/tab6.webp'
import tab8 from '../../assets/tab/tab8.webp'
import tab9 from '../../assets/tab/tab9.webp'



export const Tab = () => {
  return (
    <div className="tab">
    
            <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a><Link to='/'>Home</Link></a></li>
                <li class="breadcrumb-item"><a>Gadgets</a></li>
                <li class="breadcrumb-item active" aria-current="page">Tablets</li>
            </ol>
            </nav>

            <div class="card">
                <img src={tab1} class="card-img-top" alt=""/>
                <div class="card-body">
                    <h5 class="card-title">
Samsung Galaxy Tab A7 Lite LTE 3GB RAM 32GB</h5>
                    <p class="card-text">LKR. 39,500 </p>
                    <Rating
                        count={5}
                        size={24}
                        value={5} 
                        activeColor="#f00"
                        inactiveColor="#ddd"
                        edit={false} 
                    />
                </div>
            </div>

            <div class="card">
                <img src={tab2} class="card-img-top" alt=""/>
                <div class="card-body">
                    <h5 class="card-title">
12" COLOUR LCD Writing (lwtk) Tablet for Kids 12 Inch,</h5>
                    <p class="card-text">LKR. 3,250 </p>
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
                <img src={tab3} class="card-img-top" alt=""/>
                <div class="card-body">
                    <h5 class="card-title">
TCL Tab 10 FHD 4G 3GB RAM 64GB - 1 Year Singer Warranty</h5>
                    <p class="card-text">LKR. 43,000 </p>
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
                <img src={tab4} class="card-img-top" alt=""/>
                <div class="card-body">
                    <h5 class="card-title">
DOOGEE T10 (8+7GB Ram/128GB Rom)</h5>
                    <p class="card-text">LKR. 63,500 </p>
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
                <img src={tab5} class="card-img-top" alt=""/>
                <div class="card-body">
                    <h5 class="card-title">
OCTA Sanetra 3GB + 32GB 10.1inch Tablet </h5>
                    <p class="card-text">LKR. 59,690 </p>
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
                <img src={tab6} class="card-img-top" alt=""/>
                <div class="card-body">
                    <h5 class="card-title">Green Lion Learning Tablet 8" | 2GB 64GB | Wi-Fi & SIM</h5>
                    <p class="card-text">LKR. 25,990 </p>
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
                <img src={tab7} class="card-img-top" alt=""/>
                <div class="card-body">
                    <h5 class="card-title">
Samsung Galaxy Tab A8 Lte Cellular And Wifi 3GB RAM 32GB</h5>
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
                <img src={tab8} class="card-img-top" alt=""/>
                <div class="card-body">
                    <h5 class="card-title">

                    Apple iPad 9th Generation 10.2" Wifi only 2021 64GB Space Gray</h5>
                    <p class="card-text">LKR. 114,000 </p>
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
                <img src={tab9} class="card-img-top" alt=""/>
                <div class="card-body">
                    <h5 class="card-title">Redmi Pad | 6GB RAM | 128GB ROM</h5>
                    <p class="card-text">LKR. 99,500 </p>
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
