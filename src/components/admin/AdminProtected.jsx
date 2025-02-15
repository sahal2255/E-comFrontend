import React, { useEffect } from "react";
import { Navigate, Outlet,  } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { checkAdminAuth } from "../../redux/adminSlice";

const AdminProtected = () => {
  const dispatch = useDispatch();
  const { isAuth } = useSelector((state) => state.admin);

  useEffect(() => {
    dispatch(checkAdminAuth());
  }, [dispatch]);


  return isAuth ? <Outlet /> : <Navigate to="/admin/login" replace />;
};

export default AdminProtected;
