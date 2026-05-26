import React from 'react';

const AboutSection = () => {
  return (
    <div className="mb-8 bg-white rounded-lg border border-gray-200 p-4 sm:p-6 sm:mb-6" dir="rtl">
    
      <h2 className="text-2xl font-bold font-arb-f5 text-primary-black-font mb-3">
        معلومات عنا
      </h2>
      
    
      <p className="text-secondary-font font-arb-br leading-relaxed mb-3">
        متخصصون في ترميم التحف القديمة وصناعة خزائن المطابخ المخصصة منذ عام 2010. 
        نحن نفتخر بالدقة والنظافة وإعادة الحياة إلى كنوزكم الخشبية. 
        فريقنا يتكون من نجارين معتمدين ومتمرسين يفهمون طبيعة الخشب الدقيقة.
      </p>
      
      <p className="text-secondary-font font-arb-br leading-relaxed">
        سواء كنتم بحاجة إلى رف كتب مخصص يُصنع من الصفر أو طاولة طعام عمرها 100 سنة يتم تجديدها، 
        فإن Elite Woodworks تمثل المعيار الذهبي في النجارة في سان فرانسيسكو.
      </p>
    </div>
  );
};

export default AboutSection;