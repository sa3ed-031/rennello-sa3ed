import React from "react";
import WorkshopHeader from "../components/workshopdetails/WorkshopHeader";
import AboutSection from "../components/workshopdetails/AboutSection";
import ServicesSection from "../components/workshopdetails/ServicesSection";
import RecentWorkSection from "../components/workshopdetails/RecentWorkSection";
import ReviewsSection from "../components/workshopdetails/ReviewsSection";
import SidebarMap from "../components/workshopdetails/SidebarMap";

const WorkshopDetails = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6" dir="rtl">
      <WorkshopHeader /> 

      <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 mt-4 sm:mt-6">
        <div className="flex-1">
          <AboutSection />
          <ServicesSection />
          <RecentWorkSection />
          <ReviewsSection />
        </div>

        <div className="w-full lg:w-[35%]">
          <SidebarMap />
        </div>
      </div>
    </div>
  );
};

export default WorkshopDetails;
