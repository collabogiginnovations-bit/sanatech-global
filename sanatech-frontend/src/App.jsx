import { useState } from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'

import './App.css'
import RootLayout from './layouts/RootLayout';
import Home from './pages/Home';
import About from './pages/About';
import Policies from './pages/policies';
import Contact from './pages/contact';
import CivilWorks from './pages/Services/CivilEng';
import Solar from './pages/Services/Solar';
import ServiceLayout from './layouts/ServiceLayout';
import Services from './pages/Services';
import NotFound from './pages/NotFound';
import Communication from './pages/Services/Communication';
import Leasing from './pages/Services/Leasing';
import Mechanic from './pages/Services/Mechanic';
import Electrical from './pages/Services/Electrical';
import AdminLogin from './pages/admin/AdminLogin';
import AdminLayout from './layouts/AdminLayout';
import EditService from './pages/admin/dashboard/EditService';
import AdminHome from './pages/admin/dashboard/AdminHome';
import HideDashboard from './pages/admin/dashboard/HideDashboard';
import AddServices from './pages/admin/dashboard/AddServices';
import EditServicesLayout from './layouts/EditServicesLayout';
import DeleteServicePage from './pages/admin/dashboard/DeleteServicePage';
import IndividualServiceEditPage from './pages/admin/dashboard/IndividualServiceEditPage';
import ServiceDetails from './pages/ServiceDetails';



const adminPath = import.meta.env.VITE_ADMIN_PATH?.replace(/^\//, '') || 'admin-very-secret';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<RootLayout />} >
          <Route index element={<Home />} />
          <Route path='services' element={<ServiceLayout />}>
            <Route index element={<Services />} />
            <Route path='civil' element={<CivilWorks />} />
            <Route path='solar' element={<Solar />} />
            <Route path='communication' element={<Communication />} />
            <Route path='leasing-ancillary' element={<Leasing />} />
            <Route path='mechanical' element={<Mechanic />} />
            <Route path='electrical' element={<Electrical />} />

            {/* 👇 NEW catch-all for DB services */}
            <Route path=":slug" element={<ServiceDetails />} />
          </Route>
          <Route path='about' element={<About />} />
          <Route path='policies' element={<Policies />} />
          <Route path='contact' element={<Contact />} />




          <Route path='*' element={<NotFound />} />


        </Route>

        <Route path="admin" element={<AdminLayout />}>
          <Route index element={<AdminLogin />} />
          <Route path="hidedashboard" element={<HideDashboard />}>
            <Route index element={<AdminHome />} />
            <Route path="edit" element={<EditServicesLayout />}>
              {/* Default route shows the services list */}
              <Route index element={<EditService />} />

              {/* Add, Edit, Delete Routes */}
              <Route path="add" element={<AddServices />} />
              <Route path="edit/:id" element={<IndividualServiceEditPage />} />
              <Route path="delete/:id" element={<DeleteServicePage />} />
            </Route>
          </Route>
        </Route>

      </Route>

    )
  )

  return (
    <RouterProvider router={router} />


  )
}

export default App
