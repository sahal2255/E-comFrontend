import { axiosInstance } from "../../utils/axiosInstance";

export const AdminLoginServiceFun=async(data)=>{
    console.log('adim login data in the service section',data)
    try {
        const response=await axiosInstance.post('/admin/login',{data})
    } catch (error) {
        
    }
}