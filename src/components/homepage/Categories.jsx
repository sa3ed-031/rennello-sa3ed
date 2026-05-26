// ICONS
import ConstructionIcon from "@mui/icons-material/Construction";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import FormatPaintIcon from "@mui/icons-material/FormatPaint";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";
import YardIcon from "@mui/icons-material/Yard";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import WindowIcon from "@mui/icons-material/Window";
import { Link } from "react-router-dom";

const categories = [
  { id: 1, label: "الإصلاحات", icon: ConstructionIcon },
  { id: 2, label: "سباكة", icon: WaterDropIcon },
  { id: 3, label: "كهرباء", icon: ElectricBoltIcon },
  { id: 4, label: "دهان", icon: FormatPaintIcon },
  { id: 5, label: "تنظيف", icon: CleaningServicesIcon },
  { id: 6, label: "حدائق", icon: YardIcon },
  { id: 7, label: "نقل", icon: LocalShippingIcon },
  { id: 8, label: "مزيد", icon: WindowIcon },
];

export default function Categories({ donotShowAll }) {
  return (
    <section
      className={`browse-categorie ${donotShowAll ? "md:p-0 md:shadow-none md:bg-transparent rounded-xl shadow-sm border border-slate-50" : "md:px-[10%] w-full px-[5%]"} py-6 flex flex-col gap-4 transition-all duration-300 bg-primary-white-font`}
    >
      <span className="flex justify-between items-center">
        <h1
          className={`${donotShowAll ? "md:p-0 px-3" : ""} md:text-2xl text-lg font-bold leading-tight tracking-[-0.015em] text-gray-700`}
        >
          تصفح حسب الفئة
        </h1>
        <a
          className={`text-primary ${donotShowAll ? "hidden" : ""} text-sm font-semibold hover:underline cursor-pointer`}
        >
          عرض الكل
        </a>
      </span>
      <div
        className={`categories flex ${donotShowAll ? "md:px-2 md:justify-start md:gap-1" : "sm:justify-start"} justify-center gap-3 flex-wrap`}
      >
        {categories.map((category) =>
          donotShowAll ? (
            [2, 3, 4, 5, 8].includes(category.id) ? (
              <Category
                key={category.id}
                label={category.label}
                Icon={category.icon}
              />
            ) : (
              <></>
            )
          ) : (
            <Category
              key={category.id}
              label={category.label}
              Icon={category.icon}
            />
          ),
        )}
      </div>
    </section>
  );

  function Category({ label, Icon }) {
    return (
      <Link to={`/Cat/${label}`}>
        <div className="p-2 flex flex-col items-center gap-2">
          <div
            className={`${donotShowAll ? "md:bg-secondary-font/10" : "sm:p-4"} p-3 flex items-center justify-center rounded-xl text-gray-500 hover:text-primary bg-gray-100 hover:bg-primary/10 transition-colors cursor-pointer`}
          >
            {Icon && <Icon style={{ fontSize: "2rem" }} />}
          </div>
          <span className="text-sm font-arb-riyad-regular text-[#0d141b] font-semibold">
            {label}
          </span>
        </div>
      </Link>
    );
  }
}
