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
        Title_en="Email Services"
        Title_ar="الخدمات البريدية"
      ></BreadCumb>

      <ServiceDetails
        namespace="ServiceDetails_EmailServices"
        bannerImage="/assets/email-banner.jpg"
        standardImageOne="/assets/emailS1.jpg"
        standardImageTwo="/assets/emailS2.jpg"
        useAnimatedBanner={true}
      />
      {/* <Services1 type="services" pageNumber={4}></Services1> */}

      <OurWorks></OurWorks>
      {/* <Brand3></Brand3> */}
    </div>
  );
};

export default page;
