import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
export default function Hero() {
  const [wantedService, setWantedService] = useState("");

  return (
    <section className="md:w-[80%] sm:w-[90%] lg:min-h-145 md:min-h-120 w-full max-w-300 min-h-100 flex items-center justify-center bg-hero sm:rounded-2xl bg-cover bg-center transition-all duration-300">
      <div className="md:max-w-[d85%] sm:w-[85%] w-[90%] flex flex-col items-center gap-4 text-center">
        <h1 className="font-bold font-arb-f5 sm:text-5xl text-4xl text-primary-white-font leading-tight tracking-[-0.033em]">
          اعثر على الخبير المناسب لمنزلك
        </h1>

<<<<<<< HEAD
        <p className="text-balance text-sm text-gray-300">
=======
        <p className="text-balance text-sm text-gray-400">
>>>>>>> u-dashboard
          تواصل مع نجارين وسباكين وكهربائيين وغيرهم من ذوي الخبرة الموثوق بهم
          ببضعة نقرات
        </p>

        {/* Search Input Box contains : Icons, Input, Btn */}
        <div className="search-input md:w-[70%] sm:w-[85%] w-[95%] px-2 py-px flex items-center justify-between rounded-lg bg-secondary">
          <span className="px-2 text-[#4c739a]">
            <SearchIcon />
          </span>
          <input
            type="search"
            name="search"
            id="search-hero"
            className="w-full sm:py-5 px-2 py-3 border-x text-sm text-[#7f8794] placeholder:text-[#9ca3af] border-x-gray-400 focus:outline-primary/40"
            placeholder="ما الخدمة التي تحتاجها اليوم؟"
            value={wantedService}
            onChange={(e) => {
              setWantedService(e.target.value);
            }}
          />
          <button className="px-4 py-2 text-sm font-bold rounded-lg mr-1 hover:bg-[#4c739a] duration-300 transition cursor-pointer bg-primary text-primary-white-font">
            بحث
          </button>
        </div>
      </div>
    </section>
  );
}
