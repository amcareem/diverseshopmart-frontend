import React from 'react'
import { Navbar } from '../components/Navbar';
import banner1 from '../assets/banner1.png';
import banner2 from '../assets/banner2.jpg';
import banner3 from '../assets/banner3.jpg';
import extension from '../assets/flash/extension.jpg';
import cube from '../assets/flash/cube.jpg';
import { Footer } from '../components/Footer/Footer'



export const HomePage = () => {
  return (
    <div className='homepage'>
      <Navbar/>
      <div className="banner">
      <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={banner1} class="d-block w-100" alt=""/>
    </div>
    <div class="carousel-item">
      <img src={banner2} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={banner3} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
      </div>

      
      <div className="flash-sale">
        <h1>FLASH SALE</h1>
      <div class="card" style="width: 18rem;">
    <img src={extension} class="card-img-top" alt="..."/>
    <div class="card-body">
    <h5 class="card-title">Sunco Wire Extension|8 way </h5>
    <p class="card-text">LKR. 1499</p>
    <a href="#" class="btn btn-primary">Shop</a>
  </div>
</div>

<div class="card" style="width: 18rem;">
    <img src={cube} class="card-img-top" alt="..."/>
    <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>

<div class="card" style="width: 18rem;">
    <img src={} class="card-img-top" alt="..."/>
    <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>

<div class="card" style="width: 18rem;">
    <img src={} class="card-img-top" alt="..."/>
    <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>

<div class="card" style="width: 18rem;">
    <img src="..." class="card-img-top" alt="..."/>
    <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>

<div class="card" style="width: 18rem;">
    <img src="..." class="card-img-top" alt="..."/>
    <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>

<div class="card" style="width: 18rem;">
    <img src="..." class="card-img-top" alt="..."/>
    <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
      </div>
        <Footer/>
    </div>
  )
}
