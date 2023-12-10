import React from 'react'
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer/Footer'
import { Banner } from '../components/Home/Banner';
import { FlashSale } from '../components/Flash/FlashSale';


export const HomePage = () => {
  return (
    <div className='homepage'>
      <Navbar/>
      <Banner/>
      <FlashSale/>
      <Footer/>
    </div>
  )
}
