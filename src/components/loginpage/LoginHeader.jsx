import { Link } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function LoginHeader({ destination = "/" }) {
  return (
    <header className="flex w-full p-4 justify-between md:hidden bg-primary-white-font">
      <Link to={destination} className="h-fit text-primary cursor-pointer">
        <ArrowForwardIcon />
      </Link>

      <h1 className="text-xl font-bold text-primary">رنلّو</h1>

      <div className="w-6"></div>
    </header>
  );
}

export default LoginHeader;
