import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Dash from '../Pages/admin/Dash'
import AdminLayout from '../Layouts/AdminLayout'
const AdminRoute = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<AdminLayout />}>
        <Route index element={<Dash />}/>

        </Route>
      </Routes>
    </div>
  )
}

export default AdminRoute
