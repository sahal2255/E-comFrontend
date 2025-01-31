import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/user/Home";
import UserLayout from "../Layouts/UserLayout";
const UserRoute = () => {
  return (
      <Routes>
        <Route path="/" element={<UserLayout />} >
        <Route index element={<Home />} />
        </Route>
      </Routes>
  );
};

export default UserRoute;
