import { Routes, Route } from "react-router-dom";
import AdminLayout from "../Layouts/AdminLayout";
import Dash from "../Pages/admin/Dash";
import AdminLogin from "../Pages/admin/AdminLogin";
import AdminProtected from "../components/admin/AdminProtected";
const AdminRoute = () => {
  return (
    <Routes>
        {/* <Route path="/login" element={<AdminProtected />} >
          <Route index element={<AdminLogin />} />
        </Route> */}
        <Route path="/login" element={<AdminLogin />}/>
      <Route element={<AdminProtected />}>
        <Route path="/" element={<AdminLayout />}>
          <Route index element={<Dash />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default AdminRoute;
