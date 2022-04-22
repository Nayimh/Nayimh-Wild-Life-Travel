import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashboardHome from "./Dashboard/dashboardHome/DashboardHome";
import AuthProvider from "./Pages/Context/AuthProvider";
import Login from "./Pages/Home/Authentication/Login/Login";
import Register from "./Pages/Home/Authentication/Register/Register";

import BookingHome from "./Pages/Home/Booking/BookingHome";

import GallaryHome from "./Pages/Home/Gallary/GallaryHome";
import Home from "./Pages/Home/Home/Home";

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
          <Route path="/booking/:id" element={ <BookingHome/> }/>
          <Route path="/dashboard" element={ <DashboardHome/> }/>
          <Route path="/login" element={ <Login/> }/>
          <Route path="/register" element={ <Register/> }/>
      </Routes>
        </BrowserRouter>
        </AuthProvider>
    </div>
  );
}

export default App;
