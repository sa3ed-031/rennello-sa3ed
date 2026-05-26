const stats = [
  { label: "مقدم خدمة", value: "500+" },
  { label: "مشروع مكتمل", value: "1000+" },
  { label: "مدينة مغطاة", value: "50+" },
];

export default function Stats() {
  return (
    <section className="bg-primary py-8 xl:px-6">
      <div className="container w-xs sm:w-6xl mx-auto px-4 sm:px-6 text-center">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-12 text-center items-center">
          {stats.map((stat, index) => (
            <div key={index} className="text-white">
              <div className="text-4xl sm:text-5xl font-extrabold mb-2">
                {stat.value}
              </div>
              <div className="text-green-100 text-lg">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
