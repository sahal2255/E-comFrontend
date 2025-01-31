import React from "react";
import UserNavbar from "../components/usercomponent/UserNavbar";
import { Outlet } from "react-router-dom"; // To render nested routes

const UserLayout = ({ children }) => {
  return (
    <div>
      <UserNavbar />
      <main className="p-4">
        {children || <Outlet />} {/* Renders either children or Outlet */}
      </main>
    </div>
  );
};

export default UserLayout;
