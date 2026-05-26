import WorkshopCard from "./WorkshopCard";

const workshops = [
  {
    id: 1,
    name: "أصلحها بسرعة",
    image: "assets/images/homepage-plumber.png",
    category: "أعمال السباكة",
    rate: "4.8",
    content:
      "خدمات إصلاح وتركيب التسريبات على يد خبراء متوفرون على مدار الساعة...",
  },
  {
    id: 2,
    name: "استوديو وودووركس",
    image: "assets/images/homepage-carpenter.png",
    category: "أعمال الخشب",
    rate: "4.9",
    content: "خدمات تصميم وترميم الأثاث والخزائن حسب الطلب.",
  },
  {
    id: 3,
    name: "مدينة سبارك",
    image: "assets/images/homepage-electrician.png",
    category: "أعمال الكهرباء",
    rate: "4.7",
    content: "التمديدات الكهربائية الآمنة، وتركيب الإضاءة، والكهرباء...",
  },
  {
    id: 4,
    name: "برايم باينت",
    image: "assets/images/homepage-painter.png",
    category: "أعمال الدهان",
    rate: "5.0",
    content: "خدمات طلاء داخلية وخارجية بتشطيبات فاخرة.",
  },
];

export default function TopRatedWorkshops() {
  return (
    <section className="w-full md:px-[10%] px-[5%] flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-2">
          <h2 className="text-gray-700 text-[22px] font-bold leading-tight tracking-[-0.015em]">
            ورشات عمل متميزة
          </h2>
          <p className="text-[#4c739a] text-sm">
            محترفون موصى بهم بشدة في منطقتك
          </p>
        </div>
        <a className="text-primary text-sm font-semibold hover:underline cursor-pointer">
          عرض الكل
        </a>
      </div>
      <div className="workshops lg:grid-cols-4 lg:px-0 sm:grid sm:grid-cols-2 sm:px-[5%] flex flex-col items-stretch justify-between gap-6 duration-300 transition-all">
        {workshops.map((workshop) => (
          <WorkshopCard
            key={workshop.id}
            id={workshop.id}
            name={workshop.name}
            image={workshop.image}
            category={workshop.category}
            rate={workshop.rate}
            content={workshop.content}
          />
        ))}
      </div>
    </section>
  );
}
