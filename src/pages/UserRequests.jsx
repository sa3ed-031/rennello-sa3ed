import Request from "../components/user/Request";

export default function UserRequests() {
  return (
    <>
      <div className="flex flex-col gap-3 text-gray-700">
        <h1 className="text-3xl font-arb-f5 font-semibold">طلباتي</h1>
        <p className="font-arb-rb-light">
          تتبع وادارة جميع طلبات الصيانة الخاصة بك في مكان واحد.
        </p>
      </div>

      <div className="flex gap-2">
        {[
          { label: "نشط", count: "3" },
          { label: "معلق", count: "2" },
          { label: "مكتمل", count: "12" },
          { label: "ملغي", count: "1" },
        ].map((item, index) => (
          <span
            key={index}
            className="px-2.5 py-1.5 text-sm flex gap-2 items-center justify-center rounded-2xl transition-all duration-300 cursor-pointer hover:text-primary text-gray-700 bg-gray-200"
          >
            {item.label}
            <span className="font-bold">({item.count})</span>
          </span>
        ))}
      </div>

      <div className="flex flex-col gap-4">
        <Request />
        <Request />
        <Request />
      </div>
    </>
  );
}
