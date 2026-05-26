import { Link } from "react-router-dom";
import LockResetIcon from "@mui/icons-material/LockReset";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import { useState } from "react";

import InputBox from "../components/loginpage/InputBox";
import LoginHeader from "../components/loginpage/LoginHeader";
import CallCenter from "../components/loginpage/CallCenter";

function ResetPassword() {
  const [newPassword, setNewPassword] = useState({
    password: "",
    confirmPassword: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <main className="w-full min-h-screen md:justify-center gap-8 flex flex-col items-center">
      <LoginHeader destination="/login/otpverify" />

      <div className="w-[90%] max-w-lg flex flex-col items-center gap-2 p-4 text-center rounded-xl shadow-xl bg-primary-white-font">
        <div className="flex flex-col gap-3">
          <div className="p-2 rounded-full flex items-center justify-center self-center bg-primary/20">
            <LockResetIcon className="text-[#2ecc71]" fontSize="large" />
          </div>
          <h1 className="md:text-lg font-arb-f5 font-bold text-gray-700">
            انشاء كلمة مرور جديدة
          </h1>
          <p className="px-4 text-secondary-font">
            كلمة المرور الجديدة يجب أن تكون مختلفة عن الكلمات المستخدمة سابقاً.
          </p>
        </div>

        <form
          className="w-full p-4 rounded-xl flex flex-col gap-6 text-start bg-primary-white-font"
          onSubmit={handleSubmit}
        >
          <InputBox
            id="reset-password"
            label="كلمة المرور"
            type="password"
            placeholder="••••••••"
            value={newPassword.password}
            onChange={(e) => {
              setNewPassword({
                ...newPassword,
                password: e.target.value,
              });
            }}
            inResetOrRegister
          />

          <InputBox
            id="reset-password-confirm"
            label="تأكيد كلمة المرور"
            type="password"
            placeholder="••••••••"
            value={newPassword.confirmPassword}
            onChange={(e) => {
              setNewPassword({
                ...newPassword,
                confirmPassword: e.target.value,
              });
            }}
            inResetOrRegister
          />

          <button
            className={`w-full py-4 font-semibold rounded-lg shadow-md ${
              newPassword.password.length < 8 ||
              newPassword.confirmPassword.length < 8
                ? "bg-gray-400 text-gray-300 cursor-not-allowed"
                : "bg-primary text-primary-white-font active:opacity-70 active:scale-[.97] hover:scale-[1.02] cursor-pointer"
            }  duration-300 transition-all`}
            type="submit"
            disabled={
              newPassword.password.length < 8 ||
              newPassword.confirmPassword.length < 8
            }
          >
            اعادة تعيين كلمة المرور
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

export default ResetPassword;
