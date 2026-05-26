import { Link, useParams } from "react-router-dom";

// ICONS
import MenuIcon from "@mui/icons-material/Menu";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import SearchIcon from "@mui/icons-material/Search";
import ListAltIcon from "@mui/icons-material/ListAlt";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";

import Categories from "../components/homepage/Categories";
import Request from "../components/user/Request";

export default function UserDashboard() {
  const { role } = useParams();

  return (
    <>
      <section className="md:flex-row md:justify-between flex flex-col gap-3 transition-all duration-300">
        <div className="flex flex-col gap-2">
          <h2 className="text-3xl font-arb-f5 font-semibold text-gray-700">
            أهلاً بعودتك سعيد!
          </h2>
          <p className="font-arb-f3">بماذا نستطيع مساعدتك اليوم؟</p>
        </div>
        <button className="md:w-fit md:h-fit w-full p-4 font-arb-rb-light font-bold flex items-center justify-center gap-2 rounded-lg shadow-lg cursor-pointer hover:scale-103 active:scale-95 transition-all duration-300 text-primary-white-font bg-primary">
          <ControlPointIcon />
          إنشاء طلب جديد
        </button>
      </section>

      <section className="grid md:grid-cols-4 grid-cols-2 gap-3">
        <GridCell count="02" text="نشط" />
        <GridCell count="14" text="مُكتمل" />
        <GridCell count="01" text="انتظار" />
        <GridCell count="4.9" text="مُراجعة" />
      </section>

      <div className="md:flex-row justify-between md:gap-6 w-full flex flex-col gap-4 transition-all duration-300">
        <div className="flex md:w-[45%] flex-col gap-4">
          <Categories donotShowAll />

          <section className="flex flex-col gap-4">
            <h1 className="md:text-2xl text-lg font-bold leading-tight tracking-[-0.015em] text-gray-700">
              اجراءات سريعة
            </h1>
            <div className="grid grid-cols-1 gap-4">
              <Action text="العثور على خدمة" Icon={SearchIcon} destination="" />
              <Action
                text="رؤية جميع الطلبات"
                Icon={ListAltIcon}
                destination={`/user/${role}/requests`}
              />
              <Action
                text="تعديل الملف الشخصي"
                Icon={ManageAccountsIcon}
                destination={`/user/${role}/profile`}
              />
            </div>
          </section>
        </div>

        <section className="md:w-[50%] flex flex-col gap-4 transition-all duration-300">
          <div className="flex items-center justify-between">
            <h1 className="md:text-2xl text-lg font-bold leading-tight tracking-[-0.015em] text-gray-700">
              الطلبات الأخيرة
            </h1>
            <Link
              to="/user/requests"
              className="text-primary text-sm font-semibold hover:underline cursor-pointer"
            >
              رؤية الكل
            </Link>
          </div>
          <div className="requests flex flex-col gap-4">
            <Request />
            <Request />
          </div>
        </section>
      </div>
    </>
  );
}

function GridCell({ count, text }) {
  return (
    <div className="p-4 flex flex-col items-center text-center rounded-xl shadow-sm border border-slate-50 bg-primary-white-font">
      <span className="flex items-center justify-center text-lg font-bold text-primary">
        {text == "Reviews" ? <StarBorderIcon /> : <></>}
        {count}
      </span>
      <span className="font-arb-riyad-regular text-gray-700">{text}</span>
    </div>
  );
}

function Action({ text, Icon, destination }) {
  return (
    <Link
      to={destination}
      className="flex items-center gap-4 p-3 rounded-xl border shadow-sm transition-all duration-300 cursor-pointer border-secondary-font/20 hover:border-primary/30 hover:bg-primary/20 bg-primary-white-font group"
    >
      <div className="w-10 h-10 flex items-center justify-center rounded-full text-secondary-font bg-secondary-font/10 group-hover:text-primary group-hover:bg-primary/15">
        {Icon && <Icon />}
      </div>
      <span className="font-arb-rb-light font-bold text-gray-700">{text}</span>
    </Link>
  );
}
