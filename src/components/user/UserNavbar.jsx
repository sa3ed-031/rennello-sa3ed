import { Link, useParams } from "react-router-dom";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

export default function UserNavbar({ showSidebar, setShowSidebar }) {
  const { role } = useParams();

  return (
    <header className="fixed top-0 right-0 left-0 z-50 backdrop-blur-xl shadow-soft px-6 py-4 flex justify-between items-center bg-primary-white-font">
      <h1 className="text-xl font-arb-f4 tracking-tight font-bold text-primary">
        {role == "customer" ? "سعيد" : "مالك الورشة"}
      </h1>

      <div className="flex items-center gap-4">
        <button
          className="md:hidden cursor-pointer transition-all duration-300 hover:opacity-80 active:scale-95 text-primary"
          onClick={() => {
            setShowSidebar((prev) => !prev);
          }}
        >
          {showSidebar ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>
    </header>
  );
}
