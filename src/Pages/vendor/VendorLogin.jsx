import React from 'react'
import toast from 'react-hot-toast'
import LoginForm from '../../components/common/LoginForm'
import { VendorLoginSevice } from '../../services/vendorservices/vendorRegister'
const VendorLogin = () => {
  const onSubmit=async(data)=>{
    try {
      const res=await VendorLoginSevice(data)
      if (res.success) {
        toast.success(res.message);
      } else {
        toast.error(res.data.message); 
      }
    } catch (error) {
      console.log('error in the vendor login ',error)
      toast.error(error.message)
    }
  }
  return (
    <>
      <LoginForm title='Vendor' onSubmit={onSubmit} />
    </>
  )
}

export default VendorLogin
