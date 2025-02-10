import React from 'react';

const AdminNavbar = () => {
  return (
    <div className='min-h-20 p-4 rounded-full '>
      <div className='flex justify-end items-center'>
        <div className='flex items-center space-x-4'>
          <div className='bg-white text-gray-800 font-bold rounded-full w-10 h-10 flex items-center justify-center'>
            S
          </div>
          <div className='text-white hidden md:block'>Admin</div>
        </div>
      </div>
    </div>
  );
}

export default AdminNavbar;
