import { Link, useNavigate } from "react-router-dom";
import LockResetIcon from "@mui/icons-material/LockReset";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import LockPersonIcon from "@mui/icons-material/LockPerson";
import LogoutIcon from "@mui/icons-material/Logout";
import RefreshIcon from "@mui/icons-material/Refresh";
import LaunchIcon from "@mui/icons-material/Launch";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import LoginHeader from "../components/loginpage/LoginHeader";
import CallCenter from "../components/loginpage/CallCenter";
import { useState } from "react";

export default function VerifyOtp() {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const navigate = useNavigate();

  const receivedOtp = "000000";

  function handleCheckOtp(e, index) {
    console.log(e.target.value);
    const newOtp = [...otp];
    newOtp[index] = e.target.value;
    setOtp(newOtp);
    if (e.target.value && index < otp.length - 1) {
      document.getElementById(index + 1).focus();
    }
    // check if we in the last cell and all cells not empty
    else if (index === otp.length - 1 && newOtp.every((cell) => cell !== "")) {
      // check if otp is correct
      if (newOtp.join("") == receivedOtp) {
        setTimeout(() => {
          alert("تم التحقق بنجاح... ستتم اعادة توجيهك تلقائيا");
          navigate("/login/resetpassword");
        }, 500);
      } else {
        alert("الرمز غير صحيح... قم باعادة المحاولة");
        setOtp(["", "", "", "", "", ""]);
        // focus to first cell
        document.getElementById(0).focus();
      }
    }
  }

  return (
    <main className="w-full min-h-screen md:justify-center gap-16 flex flex-col items-center">
      <LoginHeader destination="/login/emailverify" />

      <div className="w-full flex flex-col items-center gap-6">
        <div className="w-[90%] max-w-lg flex flex-col items-center gap-4 p-8 text-center rounded-xl shadow-xl bg-primary-white-font">
          <div className="flex flex-col gap-3">
            <div className="p-2 rounded-full flex items-center justify-center self-center bg-primary/20">
              <LockPersonIcon className="text-[#2ecc71]" fontSize="large" />
            </div>
            <h1 className="md:text-lg font-arb-f5 font-bold text-gray-700">
              أدخل رمز التحقق
            </h1>
            <p className="px-4 flex gap-2 flex-col text-secondary-font">
              <span>لقد أرسلنا رمز تحقق مؤلف من 6 أرقام إلى</span>
              <span className="font-bold">+1 (555) 000-0000</span>
            </p>
          </div>

          <form className="w-full py-4 rounded-xl flex flex-col gap-6 text-start bg-primary-white-font">
            <div className="grid grid-cols-6 gap-2 items-stretch text-primary-black-font/80">
              {receivedOtp?.split("").map((num, index) => (
                <OtpCell
                  key={index}
                  id={index}
                  value={otp[index]}
                  onChange={(e) => {
                    handleCheckOtp(e, index);
                  }}
                />
              ))}
            </div>
            <button className="w-full p-4 flex justify-center items-center gap-2 font-semibold rounded-lg shadow-md bg-primary text-primary-white-font active:opacity-70 active:scale-[.97] hover:scale-[1.02] cursor-pointer duration-300 transition-all">
              التحقق من الرمز
            </button>
          </form>

          <button className="inline-flex items-center gap-2 p-4 text-secondary-font hover:text-[#2ecc71] transition-colors active:opacity-70 cursor-pointer">
            <span>اعادة الأرسال</span>
            <RefreshIcon />
          </button>
        </div>

        <CallCenter />
      </div>
    </main>
  );
}

function OtpCell({ id, value, onChange }) {
  return (
    <input
      id={id}
      type="text"
      className="p-4 w-14 text-center border border-secondary-font/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
      value={value}
      onChange={onChange}
    />
  );
}
