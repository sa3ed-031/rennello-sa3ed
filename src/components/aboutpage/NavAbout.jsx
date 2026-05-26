import { Link } from "react-router-dom";
import DehazeIcon from "@mui/icons-material/Dehaze";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

const aboutLinks = [
  { label: "الرئيسية", href: "#hero" },
  { label: "رسالتنا", href: "#mission" },
  { label: "كيف يعمل", href: "#how-it-works" },
  { label: "المميزات", href: "#features" },
  { label: "الفريق", href: "#team" },
  { label: "الأسئلة", href: "#faq" },
];

function NavAbout() {
  const [showNavLinks, setShowNavLinks] = useState(false);

  const handleClick = () => {
    setShowNavLinks(false);
  };

  return (
    <nav className="w-full sticky top-0 z-50 bg-white shadow-sm">
      {/* TOP NAVBAR */}
      <div className="md:px-[10%] px-[5%] py-4 flex items-center justify-between">
        {/* LOGO */}
        <Link to="/" className="font-bold text-2xl text-primary">
          رنّلّو
        </Link>

        {/* DESKTOP LINKS */}
        <div className="hidden sm:flex items-center gap-6">
          {aboutLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-700 hover:text-primary font-semibold transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* MOBILE BUTTON */}
        <button
          className="text-primary sm:hidden cursor-pointer"
          onClick={() => setShowNavLinks((prev) => !prev)}
        >
          {showNavLinks ? <CloseIcon /> : <DehazeIcon />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`${
          showNavLinks ? "flex" : "hidden"
        } sm:hidden flex-col gap-4 px-[5%] py-4 bg-white border-t`}
      >
        {aboutLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={handleClick}
            className="text-gray-700 hover:text-primary font-semibold transition-colors"
          >
            {link.label}
          </a>
        ))}

        <Link to="/" onClick={handleClick} className="text-primary font-bold">
          العودة للصفحة الرئيسية
        </Link>
      </div>
    </nav>
  );
}

export default NavAbout;
