import axios from "axios";
import { axiosInstance } from "../../utils/axiosInstance";

export const VendorRegister = async (data) => {
  console.log("data in service section", data);
  if (data instanceof FormData) {
    for (let [key, value] of data.entries()) {
      console.log(`${key}:`, value);
    }
  }
  try {
    const response=await axiosInstance.post('/vendor/register',data,{
        headers:{"Content-Type": "multipart/form-data"}
      })
      return response
  } catch (error) {
    console.log('vendor registration error',error)
  }
};


export const VendorLoginSevice=async(data)=>{
    try {
        const res=await axiosInstance.post('/vendor/login',data)
        // console.log('response for the vendor login',res.data)
        return res.data
    } catch (error) {
        console.log('error in the vendor login',error.response)
        return error.response
    }
}