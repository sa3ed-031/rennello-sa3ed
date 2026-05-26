import StarRateIcon from "@mui/icons-material/StarRate";
import { Link } from "react-router-dom";

const WorkshopCard = ({ id, name, image, category, rate, content }) => {
  return (
    <div className="max-w-[24rem] self-center flex flex-col gap-2 pb-4 rounded-xl overflow-hidden shadow-sm hover:shadow-xl duration-300 transition-all border border-[#e7edf3]">
      <div className="w-full h-48 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-center object-cover aspect-video"
        />
      </div>

      <div className="content flex flex-col gap-4 p-4">
        <main className="flex flex-col gap-3">
          <div className="flex justify-between items-center">
            <div className="flex flex-col">
              <h3 className="text-[#0d141b] font-bold">{name}</h3>
              <span className="text-[#4c739a] text-xs font-medium uppercase tracking-wider">
                {category}
              </span>
            </div>

            <div className="flex items-center px-1 gap-1 rounded-sm bg-[#fff8e6]">
              <span className="text-xs font-bold text-[#0d141b]">{rate}</span>
              <StarRateIcon className="text-[#f59e0b] fill-current" />
            </div>
          </div>

          <p className="text-sm text-gray-500">{content}</p>
        </main>
      </div>

      <Link
        to={`/workshops/${id}`}
        className="w-[90%] self-center py-2 text-center text-sm font-semibold border-2 rounded-lg transition-colors cursor-pointer border-[#e7edf3] hover:bg-primary-white-font/80"
      >
        عرض الملف الشخصي
      </Link>
    </div>
  );
};

export default WorkshopCard;
