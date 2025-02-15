import axios from "axios";
import { axiosInstance } from "../../utils/axiosInstance";

export const AdminLoginServiceFun=async(data)=>{
    try {
        const response=await axiosInstance.post('/admin/login',{data})
        return response
    } catch (error) {
        console.log('login error ',error)
    }
}

export const AdminLogoutServieFun=async()=>{
    try {
        const response=await axiosInstance.post('/admin/logout')
        return response
    } catch (error) {
        console.log('admin logout service error',error)
    }
}

export const checkAuthAdmin=async()=>{
    console.log('hitting the admin auth')
    try {
        const res=await axiosInstance.get('/admin/check-auth')
        // console.log('response in the admin checkauth',res)
        return res
    } catch (error) {
        console.log('error in the check-auth service',error)
    }
}