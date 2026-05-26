import { Link, useParams } from "react-router-dom";

import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";

import { useShowSidebar } from "../../contexts/UserSideBarContext";

const sideBtns = [
  {
    label: "لوحة التحكم",
    destination: "",
    Icon: DashboardOutlinedIcon,
  },
  {
    label: "الملف الشخصي",
    destination: "profile",
    Icon: PersonOutlinedIcon,
  },
  {
    label: "الطلبات",
    destination: "requests",
    Icon: DashboardOutlinedIcon,
  },
  {
    label: "التنبيهات",
    destination: "notifications",
    Icon: NotificationsNoneOutlinedIcon,
  },
  {
    label: "الإعدادات",
    destination: "settings",
    Icon: SettingsOutlinedIcon,
  },
];

export default function UserSidebar() {
  const { role } = useParams();
  const { showSidebar } = useShowSidebar();

  return (
    <div
      className={`${
        showSidebar ? "flex" : "hidden"
      } md:flex fixed right-0 top-0 bottom-0 z-1 px-4 pt-20 pb-28 flex-col justify-between w-fit gap-4 transition-all duration-300 border-l border-secondary-font bg-gray-200`}
    >
      <div className="flex flex-col gap-4">
        {sideBtns.map((btn, index) => (
          <Link
            key={index}
            to={`/user/${role}/${btn.destination}`}
            className="w-auto py-3 px-2 font-arb-f5 flex items-center gap-2 shadow-md rounded-xl transition-all duration-300 hover:bg-primary/95 text-gray-700"
          >
            {btn.Icon && <btn.Icon />}
            <span>{btn.label}</span>
          </Link>
        ))}
      </div>
      <button className="w-auto py-3 px-2 font-arb-f5 flex items-center gap-2 rounded-md shadow-md text-gray-700">
        <AddOutlinedIcon />
        طلب جديد
      </button>
    </div>
  );
}
