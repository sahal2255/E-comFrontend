import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from '../Pages/user/Home'
const UserRoute = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}/>
      </Routes>
    </div>
  )
}

export default UserRoute
