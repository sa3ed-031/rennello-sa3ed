
import React from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';

const SidebarMap = () => {
  return (
    <div className="mb-8" dir="rtl">
      
      <div className="bg-primary-white-font rounded-lg border border-gray-200 p-4 sm:p-6 mb-6">
        
        <div className="rounded-xl2 overflow-hidden mb-6 h-48">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100000!2d-122.4194!3d37.7749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7e2f5c5c5c5c%3A0x0!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1600000000000!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="موقع الورشة"
          ></iframe>
        </div>
        
        <div className="mb-6">
          <h3 className="text-md font-bold font-arb-riyad-bold text-primary-black-font mb-3">
            معلومات الاتصال
          </h3>
          <div className="space-y-2 text-secondary-font font-arb-br text-sm">
            <p><LocationOnIcon className='text-primary'/> 123 شارع ماركت</p>
            <p className="pr-4">سان فرانسيسكو، كاليفورنيا 94103</p>
            <p><CallIcon className='text-primary'/> (415) 555-0123</p>
            <p><EmailIcon className='text-primary'/> contact@elitewoodworks.com</p>
          </div>
        </div>
        
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-md font-bold font-arb-riyad-bold text-primary-black-font">
              ساعات العمل
            </h3>
            <div className="flex items-center gap-1">
              <AccessTimeFilledIcon className='text-primary text-sm' />
              <span className="font-semibold text-primary font-arb-riyad-bold"> مفتوح الآن</span>
            </div>
          </div>
          
          <div className="space-y-2 text-secondary-font font-arb-br text-sm">
            <div className="flex justify-between items-center">
              <span>الاثنين - الجمعة</span>
              <span>9:00 صباحاً - 6:00 مساءً</span>
            </div>
            <div className="flex justify-between items-center">
              <span>السبت</span>
              <span>10:00 صباحاً - 4:00 مساءً</span>
            </div>
            <div className="flex justify-between items-center">
              <span className='text-red-600'>الأحد</span>
              <span className='text-red-600'>مغلق</span>
            </div>
          </div>
        </div>
        
        <button className="w-full bg-primary text-primary-white-font font-arb-riyad-bold text-sm py-3 rounded-xl2 hover:bg-[#4c739a] duration-300 transition cursor-pointer">
          طلب عرض سعر
        </button>
        
      </div>
      
      <div className="bg-white rounded-lg border border-gray-200 p-4 sm:p-6">
        <div className="flex items-center gap-2 mb-2">
          <VerifiedUserIcon className='text-primary text-sm' />
          <h3 className="text-md font-bold font-arb-riyad-bold text-primary-black-font">
            محترف موثق
          </h3>
        </div>
        <p className="text-sm text-secondary-font font-arb-br leading-relaxed">
          هذه الورشة اجتازت فحص الخلفية والتحقق من التأمين الخاص بنا.
        </p>
      </div>
      
    </div>
  );
};

export default SidebarMap;
