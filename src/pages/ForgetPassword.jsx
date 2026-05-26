import { Link, useNavigate } from "react-router-dom";
import LockResetIcon from "@mui/icons-material/LockReset";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import EmailIcon from "@mui/icons-material/Email";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";

import { useState } from "react";

import InputBox from "../components/loginpage/InputBox";
import LoginHeader from "../components/loginpage/LoginHeader";
import CallCenter from "../components/loginpage/CallCenter";

function ForgetPassword() {
  const [userEmail, setUserEmail] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    console.log(userEmail);
    navigate("/login/emailverify");
  }

  return (
    <main className="w-full min-h-screen md:justify-start md:pt-6 gap-5 flex flex-col items-center">
      <LoginHeader destination="/login" />

      <div className="w-full flex justify-center">
        <div className="relative w-40 h-40 rounded-full flex items-center justify-center overflow-hidden">
          <img
            alt="Reset-password"
            className="w-full h-full object-cover"
            src="/assets/images/forgetpasswordpage.png"
          />
        </div>
      </div>

      <div className="w-[90%] max-w-lg py-4 text-center flex gap-2 flex-col items-center rounded-xl shadow-xl bg-white">
        <div className="flex flex-col gap-2">
          <div className="p-2 rounded-full flex items-center justify-center self-center bg-primary/20">
            <LockResetIcon className="text-[#2ecc71]" fontSize="large" />
          </div>
          <h1 className="w-fit md:text-lg self-center font-bold font-arb-f5">
            نسيت كلمة المرور؟
          </h1>
          <p className="px-4 text-secondary-font">
            أدخل عنوان البريد الإلكتروني المرتبط بحسابك في رنلّو وسنرسل إليك
            تعليمات لإعادة تعيين كلمة المرور الخاصة بك.
          </p>
        </div>

        <form
          className="w-full p-8 py-3 rounded-xl flex flex-col gap-4 text-start bg-primary-white-font"
          onSubmit={handleSubmit}
        >
          <InputBox
            id="forget-email"
            label="البريد الإلكتروني"
            type="text"
            placeholder="example.com"
            value={userEmail}
            onChange={(e) => {
              setUserEmail(e.target.value);
            }}
          >
            <EmailIcon />
          </InputBox>

          <button
            className={`w-full py-4 font-semibold rounded-lg shadow-md ${
              !userEmail
                ? "bg-gray-400 text-gray-300 cursor-not-allowed"
                : "bg-primary text-primary-white-font active:opacity-70 active:scale-[.97] hover:scale-[1.02] cursor-pointer"
            }  duration-300 transition-all`}
            type="submit"
            disabled={!userEmail}
          >
            ارسال التعليمات
            <ArrowCircleLeftIcon className="mr-2" fontSize="medium" />
          </button>
        </form>

        <Link
          to="/login"
          className="inline-flex items-center gap-1 text-secondary-font hover:text-[#2ecc71] transition-colors active:opacity-70"
        >
          <ArrowForwardIcon />
          <span>العودة إلى صفحة تسجيل الدخول</span>
        </Link>
      </div>

      <CallCenter />
    </main>
  );
}

export default ForgetPassword;

