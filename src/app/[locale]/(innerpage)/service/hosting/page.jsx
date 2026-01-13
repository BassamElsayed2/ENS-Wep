import Brand3 from "@/app/Components/Brand/Brand3";
import BreadCumb from "@/app/Components/Common/BreadCumb";
import ServiceDetails from "@/app/Components/ServiceDetails/ServiceDetails";
import Services1 from "@/app/Components/Services/Services1";
import OurWorks from "@/app/Components/Brand/OurWorks";
import React from "react";

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const { locale } = resolvedParams;
  
  if (locale === "ar") {
    return {
      title: "استضافة المواقع - حلول استضافة موثوقة وآمنة | ENS",
      description: "خدمة استضافة المواقع من ENS - حلول استضافة موثوقة وآمنة لمواقعك الإلكترونية. نقدم استضافة مشتركة، استضافة موزعين، خوادم خاصة، وخدمات بريد إلكتروني بأعلى معايير الأمان والأداء.",
      keywords: "استضافة مواقع, استضافة مشتركة, خوادم خاصة, استضافة موزعين, بريد إلكتروني, ENS, استضافة آمنة",
      openGraph: {
        title: "استضافة المواقع - حلول استضافة موثوقة وآمنة | ENS",
        description: "خدمة استضافة المواقع من ENS - حلول استضافة موثوقة وآمنة لمواقعك الإلكترونية",
        type: "website",
      },
    };
  } else {
    return {
      title: "Web Hosting - Reliable and Secure Hosting Solutions | ENS",
      description: "Web Hosting service from ENS - Reliable and secure hosting solutions for your websites. We provide shared hosting, distributor hosting, private servers, and email services with the highest security and performance standards.",
      keywords: "web hosting, shared hosting, private servers, distributor hosting, email services, ENS, secure hosting",
      openGraph: {
        title: "Web Hosting - Reliable and Secure Hosting Solutions | ENS",
        description: "Web Hosting service from ENS - Reliable and secure hosting solutions for your websites",
        type: "website",
      },
    };
  }
}

const page = () => {
  return (
    <div>
      <BreadCumb
        bgimg="/assets/images/bg/breadcumgBg.png"
        Title_en="Hosting"
        Title_ar="استضافة المواقع"
      ></BreadCumb>

      <ServiceDetails
        namespace="ServiceDetails_Hosting"
        bannerImage="/assets/hosting-banner.jpg"
        standardImageOne="/assets/hostingS1.jpg"
        standardImageTwo="/assets/hostingS2.jpg"
        useAnimatedBanner={true}
      />
      {/* <Services1 type="services" pageNumber={1}></Services1> */}

      <OurWorks></OurWorks>
      {/* <Brand3></Brand3> */}
    </div>
  );
};

export default page;
