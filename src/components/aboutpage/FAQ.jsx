import { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const faqs = [
  {
    question: "ما هو رنّلّو؟",
    answer:
      "رنّلّو هو تطبيق يساعد المستخدمين على إيجاد حرفيين موثوقين مثل السباكين والكهربائيين والنجارين بسهولة.",
  },
  {
    question: "كيف أطلب خدمة؟",
    answer:
      "يمكنك البحث عن نوع الخدمة، اختيار صاحب الخدمة المناسب، ثم إرسال طلب مع وصف المشكلة والوقت المناسب.",
  },
  {
    question: "هل أصحاب الخدمات موثوقون؟",
    answer:
      "نعم، يهدف رنّلّو إلى عرض مقدمي خدمات موثوقين مع تقييمات ومراجعات من المستخدمين.",
  },
  {
    question: "هل يمكنني تقييم صاحب الخدمة؟",
    answer:
      "نعم، بعد اكتمال الطلب يمكنك كتابة تقييم ومشاركة تجربتك لمساعدة باقي المستخدمين.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            الأسئلة الشائعة
          </h2>
          <p className="text-gray-500 mt-3">
            إجابات سريعة عن أهم الأسئلة حول رنّلّو.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex justify-between items-center p-5 text-right cursor-pointer"
                >
                  <span className="font-bold text-gray-800">
                    {item.question}
                  </span>

                  <ExpandMoreIcon
                    className={`text-primary transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-gray-600 leading-relaxed text-right">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}