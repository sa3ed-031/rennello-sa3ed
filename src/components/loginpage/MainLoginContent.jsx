import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import InputBox from "./InputBox";

function MainLoginContent() {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  let canSubmit = userInfo.email && userInfo.password.length >= 8;

  function handleSubmit(e) {
    e.preventDefault();

    setTimeout(() => {
      navigate(`/user`);
    }, 2000);
  }

  return (
    <main className="flex flex-col items-center justify-center gap-4 h-full">
      <div className="flex flex-col items-center gap-2">
        <h2 className="md:text-lg font-arb-f5 font-semibold text-gray-700">
          أهلاً بك في رنلّو
        </h2>
        <p className="font-arb-br text-body-md text-secondary-font">
          سجّل الدخول للعثور على المحترف المثالي لك
        </p>
      </div>

      <form
        className="w-full max-w-lg p-8 rounded-xl flex flex-col gap-6 shadow-xl bg-primary-white-font"
        onSubmit={handleSubmit}
      >
        <InputBox
          id="login-email-or-phone"
          label="البريد الإلكتروني أو رقم الهاتف"
          type="text"
          placeholder="example.com or 09XX XXXX XX"
          value={userInfo.email}
          onChange={(e) => {
            setUserInfo({ ...userInfo, email: e.target.value });
          }}
        />

        <InputBox
          id="login-pass"
          label="كلمة المرور"
          type="password"
          placeholder="••••••••"
          value={userInfo.password}
          onChange={(e) => {
            setUserInfo({ ...userInfo, password: e.target.value });
          }}
        />

        <button
          className={`w-full py-4 font-semibold rounded-lg ${
            canSubmit
              ? "shadow-md active:opacity-70 active:scale-[.97] hover:scale-[1.02] cursor-pointer bg-primary text-primary-white-font"
              : "bg-gray-400 text-gray-300 cursor-not-allowed"
          } duration-300 transition-all `}
          type="submit"
          disabled={!canSubmit}
        >
          تسجيل الدخول
        </button>
      </form>

      <div className="font-arb-br">
        <p className="flex gap-1 text-secondary-font">
          لا تمتلك حساب؟
          <Link
            className="text-primary font-bold hover:underline"
            to="/register"
          >
            انشاء حساب
          </Link>
        </p>
      </div>
    </main>
  );
}

export default MainLoginContent;
