import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Dash from '../Pages/vendor/Dash'
const VendorRoute = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Dash />}/>
      </Routes>
    </div>
  )
}

export default VendorRoute
