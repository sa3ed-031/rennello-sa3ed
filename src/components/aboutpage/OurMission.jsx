import TargetIcon from "@mui/icons-material/AdsClick";

export default function OurMission() {
  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm flex flex-col md:flex-row items-center gap-8 border border-gray-100">
          <div className="bg-primary p-5 rounded-2xl">
            <TargetIcon className="text-primary_white_font" />
          </div>
          <div className="text-right flex-1">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">رسالتنا</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              في رنّلّو، نحن ملتزمون بسدالفجوة بين الحرفيين المهرة وأصحاب
              المنازل. تم تصميم منصتنا لتسهيل عملية العثور على مقدمي الخدمات
              الموثوقين وحجزهم، مما يضمن التعامل مع كل مشروع منزلي - كبيراً كان
              أم صغيراً - بتميز واحترافية وشفافية مطلقة.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
