import { BrowserRouter,Routes,Route } from "react-router-dom"
import UserRoute from "./routes/UserRoute"
import VendorRoute from "./routes/VendorRoute"
import AdminRoute from "./routes/AdminRoute"
import { Toaster } from "react-hot-toast"
function App() {

  return (
    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserRoute />}/>
          <Route path="/vendor/" element={<VendorRoute />}/>
          <Route path="/admin/*" element={<AdminRoute />} /> 

        </Routes>
      </BrowserRouter>
  )
}

export default App
