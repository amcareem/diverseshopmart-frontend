import React from 'react'
import './Frag.css'
import { Link } from 'react-router-dom'
import frag1 from '../../assets/frag/frag1.webp'
import Rating from 'react-rating-stars-component';
import frag2 from '../../assets/frag/frag2.webp'
import frag3 from '../../assets/frag/frag3.webp'
import frag4 from '../../assets/frag/frag4.webp'
import frag5 from '../../assets/frag/frag5.webp'
import frag6 from '../../assets/frag/frag6.webp'
import frag7 from '../../assets/frag/frag7.webp'
import frag8 from '../../assets/frag/frag8.webp'
import frag9 from '../../assets/frag/frag9.webp'
import frag10 from '../../assets/frag/frag10.webp'
import frag11 from '../../assets/frag/frag11.webp'
import frag12 from '../../assets/frag/frag12.webp'
import frag13 from '../../assets/frag/frag13.webp'



export const Frag = () => {
  return (
    <div className="frag">
    
            <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a><Link to='/'>Home</Link></a></li>
                <li class="breadcrumb-item"><a>Gadgets</a></li>
                <li class="breadcrumb-item active" aria-current="page">Mobile Accessories</li>
            </ol>
            </nav>

            <div class="card">
                <img src={frag1} class="card-img-top" alt=""/>
                <div class="card-body">
                    <h5 class="card-title">Enchanteur Eau de Cologne 100ml - Romantic</h5>
                    <p class="card-text">LKR. 1,150 </p>
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
                <img src={frag2} class="card-img-top" alt=""/>
                <div class="card-body">
                    <h5 class="card-title">
Axe Black Body Spray For Men 150Ml 100% Authentic</h5>
                    <p class="card-text">LKR. 600 </p>
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
                <img src={frag3} class="card-img-top" alt=""/>
                <div class="card-body">
                    <h5 class="card-title">
Stainless steel Agarbatti Stand Incense Sticks Holder </h5>
                    <p class="card-text">LKR. 699 </p>
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
                <img src={frag4} class="card-img-top" alt=""/>
                <div class="card-body">
                    <h5 class="card-title">AXE Signature Intense Ticket Body Spray - 17ml</h5>
                    <p class="card-text">LKR. 190 </p>
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
                <img src={frag5} class="card-img-top" alt=""/>
                <div class="card-body">
                    <h5 class="card-title">
Gold Lady Perfume for women - 22ml</h5>
                    <p class="card-text">LKR. 700</p>
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
                <img src={frag6} class="card-img-top" alt=""/>
                <div class="card-body">
                    <h5 class="card-title">
OGG Napolean 120ml Perfume Body Spray for Men's 100%</h5>
                    <p class="card-text">LKR. 1,599 </p>
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
                <img src={frag7} class="card-img-top" alt=""/>
                <div class="card-body">
                    <h5 class="card-title">Dubai Gold Rollerball Attar Perfume Oil for men - 3ml</h5>
                    <p class="card-text">LKR. 1,596 </p>
                    <Rating
                        count={5}
                        size={24}
                        value={3} 
                        activeColor="#f00"
                        inactiveColor="#ddd"
                        edit={false} 
                    />
                </div>
            </div>

            <div class="card">
                <img src={frag8} class="card-img-top" alt=""/>
                <div class="card-body">
                    <h5 class="card-title">Royal Marriage Perfume - 120ml</h5>
                    <p class="card-text">LKR. 890 </p>
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
                <img src={frag9} class="card-img-top" alt=""/>
                <div class="card-body">
                    <h5 class="card-title">
Chocolate Musk Perfume - 6ml Rich French Chocolate Fragrance </h5>
                    <p class="card-text">LKR. 430 </p>
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
                <img src={frag10} class="card-img-top" alt=""/>
                <div class="card-body">
                    <h5 class="card-title">
Yardley Imperial Jasmine Perfume 125ml by Yardley London </h5>
                    <p class="card-text">LKR. 970 </p>
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
                <img src={frag11} class="card-img-top" alt=""/>
                <div class="card-body">
                    <h5 class="card-title">
VIP for Men Perfume 100ml - Parfums Prestige for Men </h5>
                    <p class="card-text">LKR. 1,449 </p>
                    <Rating
                        count={5}
                        size={24}
                        value={3} 
                        activeColor="#f00"
                        inactiveColor="#ddd"
                        edit={false} 
                    />
                </div>
            </div>

            <div class="card">
                <img src={frag12} class="card-img-top" alt=""/>
                <div class="card-body">
                    <h5 class="card-title">VIP For Men Perfume BN 22ml</h5>
                    <p class="card-text">LKR. 789 </p>
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
                <img src={frag13} class="card-img-top" alt=""/>
                <div class="card-body">
                    <h5 class="card-title">
Adidas Ice Cool - Attar Roll On Perfume Oil for Men - 3ml</h5>
                    <p class="card-text">LKR. 189 </p>
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
