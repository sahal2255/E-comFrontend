import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Dash from '../Pages/admin/Dash'
const AdminRoute = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Dash />}/>
      </Routes>
    </div>
  )
}

export default AdminRoute
