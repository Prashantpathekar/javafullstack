import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import EmailVerify from "../pages/EmailVerify";
import PhoneVerify from "../pages/PhoneVerify";
import ForgotPassword from "../pages/ForgotPassword";
import ResetPassword from "../pages/ResetPassword";
import Product from "../pages/Product";
import SellerRouter from "../seller/SellerRouter";

const Routers = () => {
  return (
    <Routes>
      {/* ===== Public Website Layout ===== */}
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="product" element={<Product />} />
      </Route>

      {/* ===== Auth Pages (no layout) ===== */}
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="verify-email" element={<EmailVerify />} />
      <Route path="verify-phone" element={<PhoneVerify />} />
      <Route path="forgot-password" element={<ForgotPassword />} />
      <Route path="reset-password" element={<ResetPassword />} />

      {/* ===== Seller Panel ===== */}
      <Route path="/seller/*" element={<SellerRouter />} />
    </Routes>
  );
};

export default Routers;
