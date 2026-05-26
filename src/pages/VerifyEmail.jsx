import { Link, useNavigate } from "react-router-dom";
import LockResetIcon from "@mui/icons-material/LockReset";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";
import LogoutIcon from "@mui/icons-material/Logout";
import RefreshIcon from "@mui/icons-material/Refresh";
import LaunchIcon from "@mui/icons-material/Launch";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import LoginHeader from "../components/loginpage/LoginHeader";
import CallCenter from "../components/loginpage/CallCenter";

export default function VerifyEmail() {
  const navigate = useNavigate();

  function handleCheckEmail() {
    setTimeout(() => {
      alert("تم ارسال رمز التحقق بنجاح!");
      navigate("/login/otpverify");
    }, 500);
  }

  return (
    <main className="w-full min-h-screen md:justify-center gap-16 flex flex-col items-center">
      <LoginHeader destination="/login/forgetpassword" />

      <div className="w-full flex flex-col items-center gap-6">
        <div className="w-[90%] max-w-lg flex flex-col items-center gap-4 p-8 text-center rounded-xl shadow-xl bg-primary-white-font">
          <div className="flex flex-col gap-3">
            <div className="p-2 rounded-full flex items-center justify-center self-center bg-primary/20">
              <MarkEmailReadIcon className="text-[#2ecc71]" fontSize="large" />
            </div>
            <h1 className="md:text-lg font-arb-f5 font-bold text-gray-700">
              التحقق من الايميل
            </h1>
            <p className="px-4 text-secondary-font">
              سنقوم بارسال رابط تحقق الى
              <span className="font-bold p-1">user@gmail.com</span>
            </p>
          </div>

          <button
            className="w-full p-4 flex justify-center items-center gap-2 font-semibold rounded-lg shadow-md bg-primary text-primary-white-font active:opacity-70 active:scale-[.97] hover:scale-[1.02] cursor-pointer duration-300 transition-all"
            onClick={handleCheckEmail}
          >
            <span>التحقق من الايميل</span>
            <LaunchIcon />
          </button>

          <button className="inline-flex items-center gap-2 p-4 text-secondary-font hover:text-[#2ecc71] transition-colors active:opacity-70 cursor-pointer">
            <span>اعادة الأرسال</span>
            <RefreshIcon />
          </button>

          <Link
            to="/login"
            className="inline-flex items-center gap-2 p-4 border-t border-secondary-font/20 text-secondary-font hover:text-[#2ecc71] transition-colors active:opacity-70"
          >
            <span>العودة إلى صفحة تسجيل الدخول</span>
            <LogoutIcon />
          </Link>
        </div>

        <CallCenter />
      </div>
    </main>
  );
}
