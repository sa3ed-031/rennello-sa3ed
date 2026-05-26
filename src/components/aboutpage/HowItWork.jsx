import SearchIcon from "@mui/icons-material/Search";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";

const steps = [
  {
    id: 1,
    title: "1. ابحث عن خدمة",
    description:
      "تصفح دليلنا الواسع من المتخصصين المختارين بعناية والمناسبين لاحتياجات منزلك.",
    icon: <SearchIcon className="text-3xl text-primary" />,
  },
  {
    id: 2,
    title: "2. اختر محترفاً",
    description:
      "راجع الملفات الشخصيلة والتقيممات والأسعار الشفافة لاختيار الخبير المثالي لك.",
    icon: <VerifiedUserIcon className="text-3xl text-primary" />,
  },
  {
    id: 3,
    title: "3. احجز وأنجز عملك",
    description:
      "حدد موعد خدمتك فوراً واستمتع براحة البال والنتائج الاحترافية.",
    icon: <EventAvailableIcon className="text-3xl text-primary" />,
  },
];

export default function HowItWorks() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="container max-w-6xl mx-auto px-4 md:px-6 text-center">
        <h2 className="text-4xl font-bold text-center leading-relaxed mb-16 text-gray-900">
          كيف يعمل رنّلّو؟
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step) => (
            <div
              key={step.id}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-6 border border-green-100 transition-all duration-300">
                <div>{step.icon}</div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed max-w-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
