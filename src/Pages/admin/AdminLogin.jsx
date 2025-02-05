import React from 'react';
import { useForm } from "react-hook-form";
import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordFill } from "react-icons/ri";
import { AdminLoginServiceFun } from '../../services/adminservices/AdminLoginService';

const AdminLogin = () => {
  const { register, formState: { errors }, handleSubmit } = useForm();
  const onSubmit = async(data) => {
    try {
        const response=await AdminLoginServiceFun(data)
    } catch (error) {
        
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-4 bg-white rounded-xl shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-800">Admin Login</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="flex flex-col">
            <label className="mb-1 text-gray-600" htmlFor="mail">Email</label>
            <div className="relative">
              <input 
                {...register("mail", { required: "Email Address is required" })} 
                aria-invalid={errors.mail ? "true" : "false"} 
                className={`p-2 rounded border w-full ${errors.mail ? 'border-red-500' : 'border-gray-300'}`} 
                placeholder="Enter your email"
              />
              <AiOutlineMail className="absolute top-2.5 right-3 text-gray-500" />
            </div>
            {errors.mail && <p role="alert" className="text-red-500 text-sm mt-1">{errors.mail?.message}</p>}
          </div>

          <div className="flex flex-col">
            <label className="mb-1 text-gray-600" htmlFor="password">Password</label>
            <div className="relative">
              <input 
                type="password"
                {...register("password", { required: "Password is required" })} 
                aria-invalid={errors.password ? "true" : "false"} 
                className={`p-2 rounded border w-full ${errors.password ? 'border-red-500' : 'border-gray-300'}`} 
                placeholder="Enter your password"
              />
              <RiLockPasswordFill className="absolute top-2.5 right-3 text-gray-500" />
            </div>
            {errors.password && <p role="alert" className="text-red-500 text-sm mt-1">{errors.password?.message}</p>}
          </div>

          <button 
            type="submit" 
            className="w-full p-2 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default AdminLogin;
