import { Routes, Route } from "react-router-dom";
import AdminLayout from "../Layouts/AdminLayout";
import Dash from "../Pages/admin/Dash";
import AdminLogin from "../Pages/admin/AdminLogin";
import AdminProtected from "../components/admin/AdminProtected";
import VendorsTable from "../Pages/admin/VendorsTable";
import SingleVendorDetails from "../Pages/admin/SingleVendorDetails";
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
          <Route path="/vendors" element={<VendorsTable />}/>
          <Route path="/vendors/:vendorId" element={<SingleVendorDetails />}/>
        </Route>
      </Route>
    </Routes>
  );
};

export default AdminRoute;
