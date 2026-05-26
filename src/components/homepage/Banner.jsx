export default function Banner() {
  return (
    <section className="w-full md:px-[10%] px-[5%] duration-300 transition-all">
      <div className="p-6 flex md:gap-8 md:flex-row flex-col gap-6 items-center justify-between rounded-xl bg-primary/90">
        <div className="md:max-w-[50%] w-fit flex flex-col py-4 gap-4">
          <h1 className="text-2xl font-arb-f4 font-bold text-primary-white-font">
            هل أنت محترف ماهر؟
          </h1>
          <p className="text-gray-200">
            انضم إلى رنلّو للتواصل مع أصحاب المنازل، وإدارة جدولك الزمني وتنمية
            أعمالك بسهولة، كن جزء من منصتنا اليوم وابدأ في بناء سمعتك المهنية!
          </p>
        </div>
        <button className="px-4 py-2 text-center font-arb-f5 font-bold rounded-lg cursor-pointer active:scale-95 text-primary bg-primary-white-font">
          انضم كشريك
        </button>
      </div>
    </section>
  );
}
