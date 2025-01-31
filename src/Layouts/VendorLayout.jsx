import React from 'react'
import { Outlet } from "react-router-dom"; // To render nested routes

const VendorLayout = ({children}) => {
  return (
    <div>
      <main className="p-4">
        {children || <Outlet />} {/* Renders either children or Outlet */}
      </main>
    </div>
  )
}

export default VendorLayout
