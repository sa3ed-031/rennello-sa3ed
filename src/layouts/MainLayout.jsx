import { Outlet } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import HomeAnimatedPage from "../components/homepage/HomeAnimatedPage";

export default function MainLayout() {
  return (
    <>
      <Navbar />

      <HomeAnimatedPage>
        <Outlet />
      </HomeAnimatedPage>

      <Footer />
    </>
  );
}
