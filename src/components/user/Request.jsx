import { Link, useParams } from "react-router-dom";

import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

export default function Request() {
  const { role } = useParams();

  return (
    <div className="flex flex-col gap-2 p-4 rounded-xl overflow-hidden shadow-sm border border-primary-white-font/20 bg-primary-white-font">
      <div className="p-2 flex gap-4">
        <div className="w-18 h-18 shrink-0 rounded-lg bg-secondary-font/30">
          <img
            alt="Plumbing service"
            className="w-full h-full object-cover rounded-lg"
            src="/assets/images/userdashboard-request.png"
          />
        </div>

        <div className="grow flex flex-col gap-1">
          <span className="font-extrabold font-arb-f3">
            تسرب طارئ في الأنابيب
          </span>
          <p className="font-arb-riyad-light">اليوم في 2:00 PM</p>
          <div className="font-arb-rb-light font-bold flex items-center gap-1">
            <span>عبد الرحمن أبو طوق</span>
            <PersonOutlineOutlinedIcon />
          </div>
        </div>

        <span className="px-2 py-0.5 text-[12px] self-start font-bold rounded-full border border-primary/10 text-primary bg-primary/20">
          نشط
        </span>
      </div>

      <Link
        to={`/user/${role}/requests/1`}
        className="w-full p-3 font-arb-f3 text-center font-bold rounded-xl border cursor-pointer transition-all duration-300 hover:scale-103 active:scale-95 active:bg-primary/40 border-secondary-font/20 bg-secondary"
      >
        عرض التفاصيل
      </Link>
    </div>
  );
}
