import React from 'react'
import Navbar from "../shared/navbar/Navbar"
import { Outlet } from 'react-router-dom'
import Footer from '../shared/footer/Footer'

const RootLayout = () => {
  return (
    <div>
        <Navbar />
        <main>
            <Outlet/>
        </main>
        <Footer />
     
    </div>
  )
}

export default RootLayout