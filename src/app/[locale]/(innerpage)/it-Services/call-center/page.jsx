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
        Title_en="Call Center"
        Title_ar="مركز الاتصال "
      ></BreadCumb>

      <ServiceDetails
        namespace="ServiceDetails_CallCenter"
        bannerImage="/assets/call-center-banner.jpg"
        standardImageOne="/assets/call-centerS1.jpg"
        standardImageTwo="/assets/call-centerS2.jpg"
        useAnimatedBanner={true}
      />
      {/* <Services1 type="support" pageNumber={1}></Services1> */}

      <OurWorks></OurWorks>
      {/* <Brand3></Brand3> */}
    </div>
  );
};

export default page;
