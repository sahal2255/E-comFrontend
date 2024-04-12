import axios from "axios";
import { axiosInstance } from "../../utils/axiosInstance";

export const VendorsListing =async()=>{
    try {
        const response=await axiosInstance.get('/admin/vendorslisting')
        // console.log('fetched vendors',response)
        return response.data
    } catch (error) {
        console.log('error in the vendors listing',error)
    }
}


export const SingleVendor=async(vendorId)=>{
    
    try {
        const res=await axiosInstance.get(`/admin/vendors/${vendorId}`)
        console.log('response in the single vendor dettails')
        return res
    } catch (error) {
        console.error("Error fetching vendor:", error);
        throw new Error("Failed to fetch vendor");
    }
}