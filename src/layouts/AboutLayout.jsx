import { Outlet } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import HomeAnimatedPage from "../components/homepage/HomeAnimatedPage";
import NavAbout from "../components/aboutpage/NavAbout";

export default function MainLayout() {
  return (
    <>
      <NavAbout />

      <HomeAnimatedPage>
        <Outlet />
      </HomeAnimatedPage>

      <Footer />
    </>
  );
}
