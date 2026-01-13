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
        Title_en="App Design"
        Title_ar="تصميم التطبيقات"
      ></BreadCumb>

      <ServiceDetails
        namespace="ServiceDetails_AppDesign"
        bannerImage="/assets/app-banner.jpg"
        standardImageOne="/assets/appS1.jpg"
        standardImageTwo="/assets/appS2.jpg"
        useAnimatedBanner={true}
      />

      {/* <Services1 type="design" pageNumber={1}></Services1> */}

      <OurWorks></OurWorks>
      <Brand3></Brand3>
    </div>
  );
};

export default page;
