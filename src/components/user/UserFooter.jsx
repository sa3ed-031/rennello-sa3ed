import { Link } from "react-router-dom";

import CopyrightIcon from "@mui/icons-material/Copyright";

const UserFooter = () => {
  return (
    <footer className="sm:flex-row fixed z-2 h-22 font-arb-f3 bottom-0 left-0 right-0 px-6 py-4 flex flex-col gap-2 justify-between items-center shadow-soft text-secondary-font bg-primary-white-font">
      <p className="flex items-center gap-1">
        <CopyrightIcon style={{ fontSize: "1.1rem" }} />
        رنلّو ٢٠٢٦. جميع الحقوق محفوظة.
      </p>
      <div className="sm:w-fit flex justify-evenly gap-3">
        <span>سياسة الخصوصية</span>
        <span>شروط الخدمة</span>
      </div>
    </footer>
  );
};

export default UserFooter;
