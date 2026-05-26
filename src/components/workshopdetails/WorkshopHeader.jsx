
import React from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import VerifiedIcon from '@mui/icons-material/Verified';
const WorkshopHeader = () => {
  return (
    <div className="bg-primary-white-font rounded-lg border border-gray-200 p-4 sm:p-6 mb-4 sm:mb-6" dir="rtl">
      
      <div className="hidden sm:flex gap-4">
        
        <div className="shrink-0">
          <img 
            src="/assets/images/homepage-carpenter.png" 
            alt="ورشة العمل"
            className="w-32 h-32 object-cover rounded-full"
          />
        </div>
        
        <div className="flex-1">
          
          <div className="flex justify-between items-center flex-wrap gap-4">
            <h1 className="text-2xl font-bold font-arb-f5 text-primary-black-font">
              النجارة الفاخرة والترميم
            </h1>
            <div className="flex gap-3">
              <button className="px-4 py-1.5 rounded-md text-sm border border-gray-300 cursor-pointer font-arb-br hover:bg-secondary transition active:scale-95">
                تقييم
              </button>
              <button className="px-4 py-1.5 rounded-md text-sm border border-gray-300 cursor-pointer font-arb-br hover:bg-secondary transition active:scale-95">
                إبلاغ
              </button>
              <button className="px-4 py-1.5 rounded-md text-sm border border-gray-300 bg-primary cursor-pointer text-white font-arb-br hover:bg-[#4c739a] duration-300 transition active:scale-95">
                اتصل بالورشة
              </button>
            </div>
          </div>
          
          <div className="flex items-center gap-3 mt-4 flex-wrap">
            <div className="flex items-center gap-1">
              <LocationOnIcon className='text-primary'/>
              <span className="text-secondary-font font-arb-br">
                سان فرانسيسكو، كاليفورنيا
              </span>
            </div>
            
            <div className="flex items-center gap-1">
              <span className="text-yellow-500">★★★★★</span>
              <span className="font-semibold text-primary-black-font font-arb-riyad-bold">4.8</span>
              <span className="text-secondary-font font-arb-br">(124 تقييم)</span>
            </div>
            
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-sm bg-[#D3F9E8] text-primary font-arb-br">
  <VerifiedIcon className='text-primary text-sm' />
  ورشة موثقة
</span>
          </div>
          
          <div className="flex items-center gap-2 mt-3">
            <AccessTimeFilledIcon className='text-primary'/>
            <span className="font-semibold text-primary font-arb-riyad-bold">مفتوح الآن</span>
            <span className="text-secondary-font font-arb-br">يغلق الساعة 6:00 مساءً</span>
          </div>
          
        </div>
      </div>
      
      <div className="sm:hidden">
        
        <div className="w-full mb-4">
          <img 
            src="/assets/images/homepage-carpenter.png" 
            alt="ورشة العمل"
            className="w-full h-48 object-cover rounded-lg"
          />
        </div>
        
        <div className="text-center">
          
          <div className="flex justify-between items-center flex-wrap gap-2 mb-3">
            <h1 className="text-xl font-bold font-arb-f5 text-primary-black-font text-right">
              النجارة الفاخرة والترميم
            </h1>
            <div className="flex gap-2">
              <button className="px-3 py-1 rounded-md text-xs border border-gray-300 cursor-pointer font-arb-br hover:bg-secondary transition">
                تقييم
              </button>
              <button className="px-3 py-1 rounded-md text-xs border border-gray-300 cursor-pointer font-arb-br hover:bg-secondary transition">
                إبلاغ
              </button>
              <button className="px-3 py-1 rounded-md text-xs border border-gray-300 bg-primary cursor-pointer text-white font-arb-br hover:bg-[#4c739a] transition">
                 اتصل بالورشة
              </button>
            </div>
          </div>
          
          <div className="flex flex-col items-center gap-2 mt-2">
            <div className="flex items-center gap-1">
              <LocationOnIcon className='text-primary text-sm'/>
              <span className="text-secondary-font font-arb-br text-sm">
                سان فرانسيسكو، كاليفورنيا
              </span>
            </div>
            
            <div className="flex items-center gap-1">
              <span className="text-yellow-500 text-sm">★★★★★</span>
              <span className="font-semibold text-primary-black-font text-sm">4.8</span>
              <span className="text-secondary-font font-arb-br text-sm">(124 تقييم)</span>
            </div>
            
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-sm bg-[#D3F9E8] text-primary font-arb-br">
  <VerifiedIcon className='text-primary text-sm' />
  ورشة موثقة
</span>
            
          </div>
          
          <div className="flex items-center justify-center gap-2 mt-3">
            <AccessTimeFilledIcon className='text-primary text-sm'/>
            <span className="font-semibold text-primary font-arb-riyad-bold text-sm">مفتوح الآن</span>
            <span className="text-secondary-font font-arb-br text-sm">يغلق 6:00 م</span>
          </div>
          
        </div>
      </div>
      
    </div>
  );
};
 
export default WorkshopHeader;