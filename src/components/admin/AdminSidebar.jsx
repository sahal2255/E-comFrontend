import React from "react";
import { Link } from "react-router-dom";
import { Menu, LayoutDashboard, Users, LogOut } from "lucide-react";

const AdminSidebar = () => {
  return (
    <div className="h-full flex flex-col bg-amber-800 text-white shadow-lg">
      <nav className="mt-4 space-y-2">
        <Link to="/admin" className="flex items-center gap-2 p-4 hover:bg-gray-700 transition">
          <LayoutDashboard size={24} />
           <span>Dashboard</span>
        </Link>

        <Link to="/admin" className="flex items-center gap-2 p-4 hover:bg-gray-700 transition">
          <Users size={24} />
          <span>Manage Users</span>
        </Link>

        <button className="mt-auto p-4 flex items-center gap-2 hover:bg-red-600 transition">
          <LogOut size={24} />
          <span>Logout</span>
        </button>
      </nav>
    </div>
  );
};

export default AdminSidebar;
