import { Routes, Route } from "react-router-dom";

// user pages
import Register from "./pages/Register";
import EmailVerify from "./pages/EmailVerify";
import PhoneVerify from "./pages/PhoneVerify";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";

// seller page
import AdminProduct from "./seller/AdminProduct";

const Routers = () => {
  return (
    <Routes>
      {/* USER SIDE */}
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="verify-email" element={<EmailVerify />} />
        <Route path="verify-phone" element={<PhoneVerify />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="reset-password" element={<ResetPassword />} />
      </Route>

      {/* ✅ SELLER PANEL (DIRECT ROUTE) */}
      <Route path="/seller/AdminProduct" element={<AdminProduct />} />
    </Routes>
  );
};

export default Routers;
