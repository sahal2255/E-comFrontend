import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Dash from '../Pages/admin/Dash';
import AdminLayout from '../Layouts/AdminLayout';
import AdminLogin from '../Pages/admin/AdminLogin';


const AdminRoute = () => {

  return (
    <Routes>
      <Route path="/login" element={<AdminLogin />  } />
      <Route path="/" element={<AdminLayout />}>
        <Route index element={<Dash />} />
      </Route>
    </Routes>
  );
};

export default AdminRoute;
