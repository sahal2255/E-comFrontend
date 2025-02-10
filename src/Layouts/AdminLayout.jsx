import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import AdminNavbar from "../components/admin/AdminNavbar";
import AdminSidebar from '../components/admin/AdminSidebar';
import { BiMenu, BiX } from "react-icons/bi"; // BiX is the close icon

const AdminLayout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <header className="w-full fixed bg-amber-900 shadow-lg z-50 flex items-center justify-between md:justify-end px-4">
        <div className="md:hidden">
          {isOpen ? (
            <BiX 
              className="text-white text-3xl cursor-pointer" 
              onClick={toggleSidebar}
            />
          ) : (
            <BiMenu 
              className="text-white text-3xl cursor-pointer" 
              onClick={toggleSidebar}
            />
          )}
        </div>
        <AdminNavbar />
      </header>
      
      <div className="flex">
        {isOpen && (
          <div className="fixed w-1/2 inset-0 z-40 bg-amber-900 bg-opacity-75 md:hidden">
            <div className="h-full pt-20  bg-amber-900">
              <AdminSidebar />
            </div>
          </div>
        )}
        <div className="w-1/4 hidden md:block pt-20">
          <AdminSidebar />
        </div>
        <div className="w-full pt-20 md:w-3/4 p-4 max-h-screen overflow-y-auto">
          {children || <Outlet />}
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
