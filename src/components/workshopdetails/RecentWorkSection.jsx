import React from 'react';

const RecentWorkSection = () => {
  
  const images = [
    "/assets/images/homepage-electrician.png",
    "/assets/images/homepage-painter.png",
    "/assets/images/loginpage-footer.png",
    "/assets/images/homepage-plumber.png"
  ];

  return (
    <div className="mb-8 bg-white rounded-lg border border-gray-200 p-4 sm:p-6 sm:mb-6" dir="rtl">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold font-arb-f5 text-primary-black-font">
          أعمال حديثة
        </h2>
        <button className="text-primary font-medium hover:opacity-75 transition cursor-pointer">
          عرض جميع الصور ←
        </button>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {images.map((src, index) => (
          <div 
            key={index} 
            className="h-32 rounded-lg overflow-hidden bg-gray-200"
          >
            <img 
              src={src} 
              alt={`عمل ${index + 1}`}
              className="w-full h-full object-cover hover:scale-105 transition duration-300"
            />
          </div>
        ))}
      </div>
      
      <div className="text-left mt-2  text-sm text-primary cursor-pointer hover:opacity-75 transition">
        +12 صورة إضافية
      </div>
    </div>
  );
};

export default RecentWorkSection;