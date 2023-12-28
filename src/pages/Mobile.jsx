import React from 'react'
import { Navbar } from '../components/Navbar'
import { NavbarC } from '../components/Products/NavbarC'
import { Mob } from '../components/Mob/Mob'
import { Footer } from '../components/Footer/Footer'

export const Mobile = () => {
  return (
    <div>
        <Navbar/>
        <NavbarC/>
        <Mob/>
        <Footer/>
    </div>
  )
}
