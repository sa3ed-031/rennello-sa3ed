import CopyrightIcon from "@mui/icons-material/Copyright";
import Logo from "./Logo";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="flex justify-center bg-primary-white-font">
      <div className=" md:px-[10%] w-full text-sm px-[5%] transition-all duration-300">
        <div className="up py-4 flex sm:flex-col lg:flex-row gap-2 flex-col-reverse justify-between font-arb-f5 text-secondary-font">
          <div className="logo-section w-full lg:max-w-1/2 lg:text-left elf-center flex items-center sm:items-start text-center flex-col">
            <Logo />
            <p className="px-2">
              نربط أصحاب المنازل بمحترفي الخدمات الموثوق بهم منذ عام 2026
            </p>
          </div>

          <div className="links grid gap-2 grid-rows-3 justify-center sm:flex sm:justify-between md:gap-4 sm:gap-8">
            <FooterLinksCol
              head="الشركة"
              link1="من نحن"
              link2="الوظائف"
              link3="اتصل بنا"
            />
            <FooterLinksCol
              head="استكشاف"
              link1="كيف يعمل رنلّو"
              link2="ورش العمل"
              link3="الخدمات"
            />
            <FooterLinksCol
              head="الوصول"
              link1="تسجيل الدخول"
              link2="اشتراك"
              link3="بوابة الإدارة"
            />
          </div>
        </div>

        <div className="down py-4 flex flex-col-reverse sm:flex-row items-center gap-2 justify-between border-t font-arb-f3 text-secondary-font">
          <p className="flex items-center gap-1">
            <CopyrightIcon style={{ fontSize: "1.1rem" }} />
            رنلّو ٢٠٢٦. جميع الحقوق محفوظة.
          </p>
          <div className="sm:w-fit flex justify-evenly gap-6 sm:gap-3">
            <span>سياسة الخصوصية</span>
            <span>شروط الخدمة</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterLinksCol = (props) => {
  const links = [props.link1, props.link2, props.link3];

  return (
    <div className="p-2 w-full flex flex-col items-center sm:items-start sm:justify-between gap-2 sm:w-fit">
      <h5 className="font-arb-f5 text-gray-700 font-semibold">{props.head}</h5>
      <ul className="w-fit flex sm:flex-col sm:justify-between gap-2">
        {links.map((link, index) =>
          link == "تسجيل الدخول" ? (
            <Link key={index} to="/login" className="hover:text-[#4c739a]">
              {link}
            </Link>
          ) : link == "اشتراك" ? (
            <Link key={index} to="/register" className="hover:text-[#4c739a]">
              {link}
            </Link>
          ) : (
            <li key={index} className="hover:text-[#4c739a] cursor-pointer">
              {link}
            </li>
          ),
        )}
      </ul>
    </div>
  );
};

export default Footer;
