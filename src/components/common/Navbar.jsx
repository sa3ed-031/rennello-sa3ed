import { Link } from "react-router-dom";

import DehazeIcon from "@mui/icons-material/Dehaze";
import CloseIcon from "@mui/icons-material/Close";

import Logo from "./Logo";
import { useShowNavbar } from "../../contexts/NavBarContext";

const mainLinks = [
  { label: "الرئيسية", href: "/" },
  { label: "من نحن", href: "/about" },
  { label: "اتصل بنا", href: "/contact" },
];

function Navbar() {
  const { showNavLinks, setShowNavLinks } = useShowNavbar();

  const handleClick = () => {};

  return (
    <nav
      className={`w-full flex justify-center bg-primary-white-font bgprimary`}
    >
      <div className="md:px-[10%] w-full py-4 px-[5%] flex items-center justify-between transition-all duration-300">
        <Logo />
        <span
          className="text-primary relative sm:hidden cursor-pointer"
          onClick={() => {
            setShowNavLinks((prev) => !prev);
          }}
        >
          {showNavLinks ? <CloseIcon /> : <DehazeIcon />}
        </span>

        <div className={`links sm:flex hidden rounded-sm gap-1 relative`}>
          {mainLinks.map((link) => (
            <NavLink label={link.label} link={link.href} />
          ))}
        </div>

        <div
          className={`${
            showNavLinks ? "flex fixed top-17 left-0 right-0" : "hidden"
          } sm:hidden flex-col gap-4 px-[5%] py-4 shadow-md bg-white border-t`}
        >
          {mainLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleClick}
              className="text-gray-700 hover:text-primary font-semibold transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="btns sm:flex sm:gap-4 hidden gap-1">
          <FormBtn type="Log In" />
          <FormBtn type="Sign Up" />
        </div>
      </div>
    </nav>
  );
}

function NavLink({ label, link }) {
  return (
    <Link
      to={link}
      className="py-2 px-4 text-md font-arb-f5 font-semibold border-b border-b-transparent transition-all duration-300 text-gray-700 hover:text-primary hover:border-b-primary"
    >
      {label}
    </Link>
  );
}

function FormBtn({ type }) {
  const path = type === "Sign Up" ? "/register" : "/login";

  return (
    <Link to={path}>
      <button
        className={`p-2 px-4 font-arb-f5 font-semibold rounded-sm active:scale-95 ${type == "Sign Up" ? "bg-primary text-primary-white-font" : "bg-secondary text-gray-700"} cursor-pointer`}
      >
        {type == "Sign Up" ? "سجل الآن" : "تسجيل الدخول"}
      </button>
    </Link>
  );
}

export default Navbar;
