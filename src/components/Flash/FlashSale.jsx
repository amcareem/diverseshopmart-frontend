import React from 'react'
import extension from '../../assets/flash/extension.jpg';
import cube from '../../assets/flash/cube.jpg';
import sunglass from '../../assets/flash/sunglass.jpg';
import earbuds from '../../assets/flash/earbuds.jpg';

import './FlashSale.css'
import Rating from 'react-rating-stars-component';


export const FlashSale = () => {
  return (
    <div className='flash-sale'>
        <h1>FLASH SALE</h1>
      <div className="card">
    <img src={extension} className="card-img-top" alt="..."/>
    <div className="card-body">
    <h5 className="card-title">Sunco Wire Extension|8 way </h5>
    <p className="card-text"><i>LKR. 1499</i></p>
    <Rating
                        count={5}
                        size={24}
                        value={3} 
                        activeColor="#f00"
                        inactiveColor="#ddd"
                        edit={false} 
                    />
    <a className="btn btn-primary">Shop now</a>
  </div>
</div>

<div className="card">
    <img src={sunglass} className="card-img-top" alt="..."/>
    <div className="card-body">
    <h5 className="card-title">Modern Night Vision Sunglasses </h5>
    <p className="card-text"><i>LKR. 693</i></p>
    <Rating
                        count={5}
                        size={24}
                        value={4} 
                        activeColor="#f00"
                        inactiveColor="#ddd"
                        edit={false} 
                    />
    <a className="btn btn-primary">Shop now</a>
  </div>
</div>

<div className="card">
    <img src={earbuds} className="card-img-top" alt="..."/>
    <div className="card-body">
    <h5 className="card-title">Modern Night Vision Sunglasses </h5>
    <p className="card-text"><i>LKR. 693</i></p>
    <Rating
                        count={5}
                        size={24}
                        value={5} 
                        activeColor="#f00"
                        inactiveColor="#ddd"
                        edit={false} 
                    />
    <a className="btn btn-primary">Shop now</a>
  </div>
</div>

<div className="card">
    <img src={cube} className="card-img-top" alt="..."/>
    <div className="card-body">
    <h5 className="card-title">Rubik Cube | Stickerless</h5>
    <p className="card-text">Rs. 1100 </p>
    <Rating
                        count={5}
                        size={24}
                        value={3} 
                        activeColor="#f00"
                        inactiveColor="#ddd"
                        edit={false} 
                    />
    <a className="btn btn-primary">Shop Now</a>
  </div>
</div>
    </div>
  )
}
