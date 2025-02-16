import React from 'react';
import { useSelector } from 'react-redux';
const AdminNavbar = () => {

  const admin=useSelector(state=>state.admin.admin)
  console.log('admin data in navbar',admin)
  return (
    <div className='min-h-20 p-4 rounded-full '>
      <div className='flex justify-end items-center'>
        <div className='flex items-center space-x-4'>
          <div className='bg-white text-gray-800 font-bold rounded-full w-10 h-10 flex items-center justify-center'>
            {admin.email[0]}
          </div>
          <div className='text-white hidden md:block'>{admin.email}</div>
        </div>
      </div>
    </div>
  );
}

export default AdminNavbar;
