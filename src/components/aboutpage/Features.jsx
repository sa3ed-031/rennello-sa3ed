import VerifiedIcon from "@mui/icons-material/Verified";
import BoltIcon from "@mui/icons-material/Bolt";
import PaymentsIcon from "@mui/icons-material/Payments";
import StarIcon from "@mui/icons-material/Star";

const features = [
  {
    title: "محترفون معتمدون",
    description:
      "يخضع كل مزود خدمة لعملية تدقيق صارمة للخلفية والمهارات لضمان الجودة.",
    icon: <VerifiedIcon className="text-4xl text-primary" />,
  },
  {
    title: "حجز سريع",
    description:
      "واجهتنا المبسطة تتيح لك حجز مساعدة احترافية بضغطة زر واحدة فقط.",
    icon: <BoltIcon className="text-4xl text-primary" />,
  },
  {
    title: "أسعار شفافة",
    description:
      "لا توجد رسوم مخفية أو مفاجآت؛ ستعرف بالضبط ما ستدفعه قبل بدء العمل.",
    icon: <PaymentsIcon className="text-4xl text-primary" />,
  },
  {
    title: "تقييمات موثوقة",
    description:
      "تساعدك آراء العملاء الحقيقية من أصحاب المنازل على اتخاذ القرار الأفضل دائماً.",
    icon: <StarIcon className="text-4xl text-primary" />,
  },
];

export default function Features() {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="container max-w-6xl mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-900">
          لماذا تختار رنّلّو؟
        </h2>
        <p className="text-gray-500 mb-12 max-w-2xl mx-auto">
          المعيار الذهبي لخدمات الرعاية المنزلية الاحترافية.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 flex flex-col items-center"
            >
              <div className="mb-6 p-4 bg-green-50 rounded-full">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
