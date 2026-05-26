import { Link } from "react-router-dom";




export default function AboutHero() {
  return (
    <section className="md:w-[80%] sm:w-[90%] lg:min-h-145 md:min-h-120 w-full max-w-300 min-h-100 flex items-center justify-center bg-hero sm:rounded-2xl bg-cover bg-center transition-all duration-300">
      <div className="md:max-w-[d85%] sm:w-[85%] w-[90%] flex flex-col items-center gap-4 text-center">
        <h1 className="font-bold font-arb-f5 sm:text-7xl text-4xl text-primary-white-font leading-tight tracking-[-0.033em]">
          حول رنّلّو
        </h1>

        <p className="text-balance md:text-2xl sm:text-[16px] text-gray-200">
          نحن نصللك بنخبة من الحرفيين الموثوقين لإنجاز خدماتك المنزلية بكل سهولة
          وسرعة
        </p>
        <Link to="/">
          <button className="px-4 py-2 text-sm font-bold rounded-lg ml-1 hover:bg-[#4c739a] duration-300 transition cursor-pointer bg-primary text-primary-white-font">
            ابحث عن خدمة
          </button>
        </Link>
      </div>
    </section>
  );
}
