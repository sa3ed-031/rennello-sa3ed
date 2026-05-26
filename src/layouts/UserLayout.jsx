import { Outlet } from "react-router-dom";

import UserNavbar from "../components/user/UserNavbar";
import UserFooter from "../components/user/UserFooter";
import UserSidebar from "../components/user/UserSidebar";
import LoginAnimatedPage from "../components/loginpage/LoginAnimatedPage";
import { useShowSidebar } from "../contexts/UserSideBarContext";

export default function UserLayout() {
  const { showSidebar, setShowSidebar } = useShowSidebar();

  return (
    <div
      className="min-h-screen flex flex-col justify-between gap-6 bg-secondary"
      onClick={() => {
        showSidebar ? setShowSidebar(false) : null;
      }}
    >
      <UserNavbar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />

      <UserSidebar />

      <LoginAnimatedPage>
        <main className="min-h-screen flex flex-col justify-center gap-6 md:pr-50 px-4 pt-20 pb-28">
          <Outlet />
        </main>
      </LoginAnimatedPage>

      <UserFooter />
    </div>
  );
}
