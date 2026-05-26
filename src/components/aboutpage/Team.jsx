const team = [
  {
    name: "مايكل جاكسون",
    role: "أعضاء",
    img: "assets/images/aboutpage-team.jpg",
  },
  {
    name: "مايكل جاكسون",
    role: "أعضاء",
    img: "assets/images/aboutpage-team.jpg",
  },
  {
    name: "مايكل جاكسون",
    role: "أعضاء",
    img: "assets/images/aboutpage-team.jpg",
  },
  {
    name: "مايكل جاكسون",
    role: "أعضاء",
    img: "assets/images/aboutpage-team.jpg",
  },
  {
    name: "مايكل جاكسون",
    role: "أعضاء",
    img: "assets/images/aboutpage-team.jpg",
  },
  {
    name: "مايكل جاكسون",
    role: "أعضاء",
    img: "assets/images/aboutpage-team.jpg",
  },
];

export default function Team() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-900 leading-relaxed">
          تعرف على فريق رنّلّو
        </h2>
        <p className="text-gray-500 mb-16 max-w-2xl mx-auto">
          العقول المبدعة وراء منصة رنّلّو للخدمات المنزلية.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {team.map((member, index) => (
            <div key={index} className="flex flex-col items-center group">
              <div className="relative mb-6 overflow-hidden rounded-2xl w-full aspect-4/5">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity"></div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-1">
                {member.name}
              </h3>
              <p className="text-primary font-medium text-sm">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
