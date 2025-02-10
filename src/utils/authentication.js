import axios from "axios";
import { axiosInstance } from "./axiosInstance";

export const refreshToken=async()=>{
    try {
        const response=await axios.post('/auth/refresh-token')
        return response
    } catch (error) {
        console.log('error in the authentication api',error)
    }
}