import React from 'react'
import { Navbar } from '../components/Navbar'
import { Products } from '../components/Products/Products'
import { Footer } from '../components/Footer/Footer'


export const ProductPage = () => {
  return (
    <div>
        <Navbar/>
        <Products/>
        <Footer/>
    </div>
  )
}
