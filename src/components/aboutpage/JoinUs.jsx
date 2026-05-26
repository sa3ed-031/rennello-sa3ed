import { Link } from "react-router-dom";


export default function JoinUs() {
  return (
    <section className="py-16 xl:px-6 bg-white">
      <Link to="/register" className="w-full flex justify-center">
        <div className="container w-full sm:w-6xl mx-auto px-4 sm:px-6 text-center">
          <div className="bg-gray-900 rounded-3xl p-10 md:p-20 text-white shadow-xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-relaxed">
              هل أنت مستعد لتجربة رنّلّو؟
            </h2>
            <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
              انضم إلى آلاف المستخدمين الذين يثقون في رنّلّو لتلبية احتياجاتهم من
              الخدمة المهنية. خبراء معتمدون، موثوقون، وعلى بعد نقرة واحدة منك.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-primary hover:bg-[#4c739a] text-white px-10 py-4 cursor-pointer rounded-full font-bold text-lg transition-colors">
                ابدأ الآن
              </button>
            </div>
          </div>
        </div>
      </Link>
    </section>
  );
}
