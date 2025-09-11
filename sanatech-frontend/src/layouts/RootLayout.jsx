import React from 'react'
import {Link, Outlet } from 'react-router-dom'
import Navbar from '../components/staticComponents/Navbar'
import Footer from '../components/staticComponents/Footer'

const RootLayout = () => {
  return (
    <div>
        <Navbar />
        <div className='min-h-screen'>
            <Outlet />
        </div>
        <Footer />
    </div>
  )
}

export default RootLayout