import { Link } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

import { useState } from "react";

function InputBox({
  id,
  label,
  type,
  placeholder,
  value,
  onChange,
  children = <></>,
}) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div
      className={`flex flex-col gap-2 ${id.includes("userCity") || id.includes("city") ? "md:w-[stretch]" : id.includes("register") ? "md:w-[48%]" : ""} text-secondary-font`}
    >
      <label htmlFor={id} className={`${type == "password" ? "hidden" : ""}`}>
        {label}
      </label>
      <div
        className={`flex justify-between items-center ${type == "password" ? "" : "hidden"}`}
      >
        <label htmlFor={id}>{label}</label>
        <Link
          to="/login/forgetpassword"
          className={`hover:underline ${id.includes("forget") || id.includes("register") || id.includes("reset") ? "hidden" : ""} text-primary`}
        >
          نسيت كلمة المرور؟
        </Link>
      </div>

      <div className="relative">
        <input
          className={`w-full px-4 py-3 text-right rounded-lg ${id == "forget-email" ? "pr-10" : ""} border outline-none focus:ring-1 focus:ring-primary focus:border-none duration-300 transition-all`}
          id={id}
          type={type != "password" ? type : showPassword ? "text" : "password"}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
        <span className="absolute right-2 top-3">{children}</span>

        <button
          className={`absolute left-3 top-1/2 -translate-y-1/2 ${
            type == "password" ? "" : "hidden"
          } cursor-pointer text-secondary-font`}
          type="button"
          onClick={() => {
            setShowPassword((prev) => !prev);
            document.getElementById(id).focus();
          }}
        >
          {showPassword ? (
            <VisibilityOffIcon />
          ) : (
            <VisibilityIcon className="text-primary/80" />
          )}
        </button>
      </div>
    </div>
  );
}

export default InputBox;
