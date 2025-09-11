import { useState } from 'react';
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'

import './App.css'
import RootLayout from './layouts/RootLayout';
import Home from './pages/home';
import Services from './pages/Services';
import About from './pages/about';
import Policies from './pages/policies';
import Contact from './pages/contact';
import CivilWorks from './pages/Services/CivilEng';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />} >
        <Route index element={<Home />} />
        <Route path='services' element={<Services />}>
          <Route path='civil' element={<CivilWorks /> } />
        </Route>
        <Route path='about' element={<About />} />
        <Route path='policies' element={<Policies />} />
        <Route path='contact' element={<Contact />} />
        
      
      </Route>
    )
  )

  return (
    <RouterProvider router={router} />
    
 
  )
}

export default App
