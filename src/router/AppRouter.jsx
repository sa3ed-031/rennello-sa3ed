import { Routes, Route, useLocation } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import UserLayout from "../layouts/UserLayout";
import AdminLayout from "../layouts/AdminLayout";
import LoginLayout from "../layouts/LoginLayout";
import AboutLayout from "../layouts/AboutLayout";

import Login from "../pages/Login";
import Register from "../pages/Register";
import VerifyOtp from "../pages/VerifyOtp";
import VerifyEmail from "../pages/VerifyEmail";
import ResetPassword from "../pages/ResetPassword";
import ForgetPassword from "../pages/ForgetPassword";

import Home from "../pages/Home";
import About from "../pages/About";
import NotFound from "../pages/404";
import Category from "../pages/Category";
import WorkshopDetails from "../pages/WorkshopDetails";

import AdminDashboard from "../pages/AdmainDashbord";

import UserDashboard from "../pages/UserDashboard";
import UserRequests from "../pages/UserRequests";
import UserProfile from "../pages/UserProfile";
import UserSettings from "../pages/UserSettings";
import UserNotifications from "../pages/UserNotifications";

export default function AppRouter() {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      {/* Sa3ed: شباب ماتشتغلو عهدول أنا عم اشتغل عليهن */}
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<LoginLayout />}>
        <Route index element={<Login />} />
        <Route path="forgetpassword" element={<ForgetPassword />} />
        <Route path="resetpassword" element={<ResetPassword />} />
        <Route path="emailverify" element={<VerifyEmail />} />
        <Route path="otpverify" element={<VerifyOtp />} />
        <Route path="*" element={<NotFound />} />
      </Route>

      {/* Main Layout هون حطو اي صفحة بدكن طبيعي متل قبل */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/workshops/:id" element={<WorkshopDetails />} />
        <Route path="/Cat/:id" element={<Category />} />
        <Route path="*" element={<NotFound />} />
      </Route>

      {/* Admin Layout هون محد يقرب */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<AdminDashboard />} />
        <Route path="*" element={<NotFound />} />
      </Route>

      {/* Sa3ed: ماحدا يقرب هي لالي */}
      <Route path="/user/:role" element={<UserLayout />}>
        <Route index element={<UserDashboard />} />
        {/* profile */}
        <Route path="profile" element={<UserProfile />} />
        {/* request */}
        <Route path="requests" element={<UserRequests />} />
        {/* settings */}
        <Route path="settings" element={<UserSettings />} />
        {/* notifications */}
        <Route path="notifications" element={<UserNotifications />} />
        <Route path="*" element={<NotFound />} />
      </Route>

      {/* About Layout هون محد يقرب */}
      <Route path="/about" element={<AboutLayout />}>
        <Route index element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
