
import React from 'react';

const reviews = [
  {
    name: "أليس مونتغمري",
    time: "منذ يومين",
    rating: 5,
    text: "عمل رائع جداً على خزائن مطبخي. وصلوا في الوقت المحدد، وكانوا نظيفين للغاية، وأنهوا المهمة أسرع مما توقعت. أنصح بهم بشدة!",
    avatar: "/assets/images/p2.jpg"
  },
  {
    name: "جون دو",
    time: "منذ أسبوع",
    rating: 4,
    text: "حرفية رائعة في إصلاح الطاولة. السبب الوحيد لأربع نجوم هو التأخير البسيط في الجدولة، لكن العمل نفسه لا تشوبه شائبة.",
    avatar: "/assets/images/p2.jpg"
  }
];

const ratingBars = [
  { stars: 5, percentage: 80, count: 99 },
  { stars: 4, percentage: 60, count: 45 },
  { stars: 3, percentage: 40, count: 20 },
  { stars: 2, percentage: 20, count: 8 },
  { stars: 1, percentage: 10, count: 3 }
];

const ReviewsSection = () => {

  return (
    <div className="mb-6 bg-white rounded-lg border border-gray-200 p-4 sm:p-6 sm:mb-6" dir="rtl">
      
      <h2 className="text-2xl font-bold font-arb-f5 text-primary-black-font mb-4">
        التقييمات والمراجعات
      </h2>
   
      <div className="flex gap-8">
        <div className="text-center">
          <span className="text-5xl font-bold text-primary-black-font font-arb-riyad-bold">4.8</span>
          <div className="text-yellow-500 text-lg mt-1">★★★★★</div>
          <div className="text-secondary-font font-arb-br text-sm mt-1"> (124 تقييم)
</div>
        </div>
        
        <div className="flex-1">
          {ratingBars.map((bar, index) => (
            <div key={index} className="flex items-center gap-2 mb-2">
              <span className="text-yellow-500 text-sm w-8">{bar.stars} ★</span>
              <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-yellow-500 rounded-full"
                  style={{ width: `${bar.percentage}%` }}
                ></div>
              </div>
              <span className="text-secondary-font font-arb-br text-xs w-8">{bar.count}</span>
            </div>
          ))}
        </div>
      </div>
      
      <div className="border-b border-gray-200 my-6"></div>
      
      <div className="mt-2">
        {reviews.map((review, index) => (
          <div key={index} className="flex gap-3 pt-3 mt-3">
            <img 
              src={review.avatar} 
              alt={review.name}
              className="w-10 h-10 rounded-full object-cover shrink-0"
            />
            
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-semibold font-arb-riyad-bold text-primary-black-font text-sm">
                    {review.name}
                  </p>
                  <div className="text-yellow-500 text-sm mt-0.5">
                    {"★".repeat(review.rating)}{"☆".repeat(5 - review.rating)}
                  </div>
                </div>
                <span className="text-secondary-font font-arb-br text-xs">
                  {review.time}
                </span>
              </div>
              <p className="text-secondary-font font-arb-br text-sm mt-2 leading-relaxed">
                {review.text}
              </p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-6 pt-3">
        <button className="text-primary font-medium hover:opacity-75 transition cursor-pointer">
          قراءة جميع التقييمات ←
        </button>
      </div>
      
    </div>
  );
};

export default ReviewsSection;