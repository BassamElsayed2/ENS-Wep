import Brand3 from "@/app/Components/Brand/Brand3";
import BreadCumb from "@/app/Components/Common/BreadCumb";
import ServiceDetails from "@/app/Components/ServiceDetails/ServiceDetails";
import Services1 from "@/app/Components/Services/Services1";
import OurWorks from "@/app/Components/Brand/OurWorks";
import React from "react";

const page = () => {
  return (
    <div>
      <BreadCumb
        bgimg="/assets/images/bg/breadcumgBg.png"
        Title_en="Web Development"
        Title_ar="تطوير المواقع"
      ></BreadCumb>

      <ServiceDetails
        namespace="ServiceDetails_WebDevelopment"
        bannerImage="/assets/web-banner.jpg"
        standardImageOne="/assets/webS1.jpg"
        standardImageTwo="/assets/webS2.jpg"
        useAnimatedBanner={true}
      />
      <Services1 type="development" pageNumber={3}></Services1>

      <OurWorks></OurWorks>
      <Brand3></Brand3>
    </div>
  );
};

export default page;
