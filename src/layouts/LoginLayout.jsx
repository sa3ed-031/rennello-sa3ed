import { Outlet } from "react-router-dom";

import LoginAnimatedPage from "../components/loginpage/LoginAnimatedPage";
import LoginFooter from "../components/loginpage/LoginFooter";

function LoginLayout() {
  return (
    <div className="min-h-screen bg-secondary">
      <LoginAnimatedPage>
        <div className="login-outlet-container min-h-[91vh] justify-evenly md:flex-row-reverse md:justify-center flex flex-col gap-4 items-center">
          <Outlet />
        </div>
      </LoginAnimatedPage>

      <LoginFooter />
    </div>
  );
}

export default LoginLayout;
