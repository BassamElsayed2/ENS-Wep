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
        Title_en="Wep Design"
        Title_ar="تصميم المواقع"
      ></BreadCumb>

      <ServiceDetails
        namespace="ServiceDetails_WepDesign"
        bannerImage="/assets/web-design-banner.jpg"
        standardImageOne="/assets/web-designS1.jpg"
        standardImageTwo="/assets/web-designS2.jpg"
        useAnimatedBanner={true}
      />
      {/* <Services1 type="design" pageNumber={4}></Services1> */}

      <OurWorks></OurWorks>
      <Brand3></Brand3>
    </div>
  );
};

export default page;
