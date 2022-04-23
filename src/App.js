import { BrowserRouter, Route, Routes } from "react-router-dom";
import NewPackage from "./Dashboard/AddNewpackage/NewPackage";
import AdminRoute from "./Dashboard/AdminRoute/AdminRoute";
import DashboardHome from "./Dashboard/dashboardHome/DashboardHome";
import MakeAdmin from "./Dashboard/MakeAdmin/MakeAdmin";
import ManageAllProduct from "./Dashboard/ManageAllProduct/ManageAllProduct";
import ManageAllOrders from "./Dashboard/ManageOrder/ManageAllOrders";
import MyOrder from "./Dashboard/ManageOrder/MyOrder";
import Payment from "./Dashboard/Payment/Payment";
import Rating from "./Dashboard/Rating/Rating";
import AuthProvider from "./Pages/Context/AuthProvider";
import Login from "./Pages/Home/Authentication/Login/Login";
import Register from "./Pages/Home/Authentication/Register/Register";

import BookingHome from "./Pages/Home/Booking/BookingHome";

import GallaryHome from "./Pages/Home/Gallary/GallaryHome";
import Home from "./Pages/Home/Home/Home";
import PrivateRoute from "./Pages/Home/PrivateRoute/PrivateRoute";

import SrviceHome from "./Pages/Home/Service/ServiceHome/SrviceHome";

function App() {
  return (
    <div>
      <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Home/> }/>
          <Route path="/home" element={ <Home/> }/>
          <Route path="/service" element={ <SrviceHome/> }/>
          <Route path="/gallary" element={ <GallaryHome/> }/>
          <Route path="/booking/:id" element={ <PrivateRoute><BookingHome/></PrivateRoute>  }/>
            <Route path="/dashboard" element={<PrivateRoute><DashboardHome /></PrivateRoute>}>
              
              <Route path="makeAdmin" element={ <AdminRoute> <MakeAdmin/> </AdminRoute> }/>
              <Route path="addProduct" element={ <AdminRoute> <NewPackage/> </AdminRoute> }/>
              <Route path="manageProduct" element={ <AdminRoute> <ManageAllProduct/> </AdminRoute> }/>
              <Route path="manageOrder" element={ <AdminRoute> <ManageAllOrders/> </AdminRoute> }/>
              <Route path="myOrder" element={<MyOrder />} />
              <Route path="rating" element={ <Rating/> }/>
          </Route>
          <Route path="/payment/:id" element={ <Payment/> }/>
          <Route path="/login" element={ <Login/> }/>
          <Route path="/register" element={ <Register/> }/>
      </Routes>
        </BrowserRouter>
        </AuthProvider>
    </div>
  );
}

export default App;
