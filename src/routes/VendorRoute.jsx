import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Dash from '../Pages/vendor/Dash'
import VendorLayout from '../Layouts/VendorLayout'
const VendorRoute = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<VendorLayout/>}>
        <Route index element={<Dash />}/>
        </Route>
      </Routes>
    </div>
  )
}

export default VendorRoute
