
import React from 'react';

const ServicesSection = () => {
  const services = [
    "خزائن مخصصة",
    "ترميم الأثاث",
    "نحت الخشب",
    "أرضيات خشبية",
    "التشطيب",
    "إصلاح"
  ];
  
  return (
    <div className="mb-6 bg-white rounded-lg border border-gray-200 p-4 sm:p-6 sm:mb-6" dir="rtl">
      <h2 className="text-2xl font-bold font-arb-f5 text-primary-black-font mb-3">
        الخدمات المقدمة
      </h2>
      
      <div className="flex flex-wrap gap-2">
        {services.map((service, index) => (
          <button
            key={index}
            className="px-4 py-1.5 rounded-md text-sm  border  border-gray-300 cursor-pointer text-gray-600 font-arb-br bg-gray-200 hover:bg-primary hover:text-primary-white-font transition active:scale-95"
          >
            {service}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;