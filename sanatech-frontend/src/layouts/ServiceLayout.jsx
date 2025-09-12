import React from 'react'
import Services from '../pages/Services'
import { Outlet } from 'react-router-dom'

const ServiceLayout = () => {
  return (
    <div>
        <Outlet />
    </div>
  )
}

export default ServiceLayout