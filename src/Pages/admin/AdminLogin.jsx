import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginAdmin } from '../../redux/adminSlice';
import toast from 'react-hot-toast';
import LoginForm from '../../components/common/LoginForm';
import { AdminLoginServiceFun } from '../../services/adminservices/AdminLoginService';

const AdminLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    try {
      const res = await AdminLoginServiceFun(data);
      toast.success(res.data.message);
      if (res.data.success) {
        dispatch(loginAdmin(res.data.admin));
        navigate("/admin/");
      }
    } catch (error) {
      toast.error("Login failed");
      console.error("Login failed", error);
    }
  };

  return <LoginForm title="Admin" onSubmit={onSubmit} />;
};

export default AdminLogin;
 