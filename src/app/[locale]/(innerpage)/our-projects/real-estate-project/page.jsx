import Brand3 from "@/app/Components/Brand/Brand3";
import BreadCumb from "@/app/Components/Common/BreadCumb";
import ServiceDetails from "@/app/Components/ServiceDetails/ServiceDetails";
import Services1 from "@/app/Components/Services/Services1";
import OurWorks from "@/app/Components/Brand/OurWorks";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import Image from "next/image";
import React from "react";

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const { locale } = resolvedParams;
  
  if (locale === "ar") {
    return {
      title: "تطبيق العقارات - منصة عقارية متطورة باستخدام Next.js و Node.js | ENS",
      description: "تطبيق العقارات من ENS - منصة عقارية متطورة تم تطويرها باستخدام Next.js و Node.js. عرض احترافي للعقارات مع خرائط تفاعلية وقوائم ديناميكية. مناسب للشركات العقارية والمطورين.",
      keywords: "تطبيق عقارات, Next.js, Node.js, منصة عقارية, تطوير تطبيقات, ENS, تطبيقات ويب, عقارات",
      openGraph: {
        title: "تطبيق العقارات - منصة عقارية متطورة | ENS",
        description: "تطبيق العقارات من ENS - منصة عقارية متطورة باستخدام Next.js و Node.js",
        type: "website",
      },
    };
  } else {
    return {
      title: "Real Estate Application - Advanced Real Estate Platform Using Next.js and Node.js | ENS",
      description: "Real Estate Application from ENS - An advanced real estate platform developed using Next.js and Node.js. Professional property display with interactive maps and dynamic listings. Ideal for real estate companies and developers.",
      keywords: "real estate application, Next.js, Node.js, real estate platform, application development, ENS, web applications, properties",
      openGraph: {
        title: "Real Estate Application - Advanced Real Estate Platform | ENS",
        description: "Real Estate Application from ENS - An advanced real estate platform using Next.js and Node.js",
        type: "website",
      },
    };
  }
}

const page = () => {
  const t = useTranslations("ServiceDetails_RealEstateProject");
  const locale = useLocale();
  
  return (
    <div>
      <BreadCumb
        bgimg="/assets/images/bg/breadcumgBg.png"
        Title_en="Real Estate Project"
        Title_ar="تطبيق العقارات"
      ></BreadCumb>

      <ServiceDetails
        namespace="ServiceDetails_RealEstateProject"
        bannerImage="/assets/estate-banner.jpg"
        standardImageOne="/assets/estateS1.jpg"
        standardImageTwo="/assets/estateS2.jpg"
        useAnimatedIcons={true}
        iconType="real-estate"
        useAnimatedBanner={true}
      />
      {/* <Services1 type="app-version" pageNumber={2}></Services1> */}

      <OurWorks></OurWorks>

      {/* Contact Section */}
      <section className="contact-cta-section section-padding fix" dir={locale === "ar" ? "rtl" : "ltr"}>
        <div className="container">
          <div className="contact-cta-wrapper">
            <div className="row">
              <div className="col-12">
                <div className="contact-cta-box text-center wow fadeInUp" data-wow-delay=".2s">
                  <div className="contact-animated-icon-wrapper">
                    <Image
                      src="/assets/images/icon/real-estate-app.svg"
                      alt="تطبيق العقارات"
                      width={400}
                      height={350}
                      className="contact-animated-icon"
                      unoptimized
                    />
                  </div>
                  <h3 className="title">{t("contactTitle", { default: "لطلب التطبيق" })}</h3>
                  <p className="text">{t("contactText", { default: "تواصل معنا اليوم لطلب تطبيق عقارات مخصص لاحتياجاتك باستخدام Next.js و Node.js" })}</p>
                  <div className="contact-buttons d-flex gap-3 justify-content-center flex-wrap" style={{ flexDirection: locale === "ar" ? "row-reverse" : "row" }}>
                    <a href="mailto:info@ens.eg" className="theme-btn">
                      {t("contactEmail", { default: "info@ens.eg" })}
                      <i className="bi bi-arrow-left" style={{ marginLeft: locale === "ar" ? "0" : "8px", marginRight: locale === "ar" ? "8px" : "0", display: locale === "ar" ? "none" : "inline" }}></i>
                      <i className="bi bi-arrow-right" style={{ marginRight: locale === "ar" ? "0" : "8px", marginLeft: locale === "ar" ? "8px" : "0", display: locale === "ar" ? "inline" : "none" }}></i>
                    </a>
                    <a href="tel:+201553841793" className="theme-btn style2">
                      {t("contactPhone", { default: "+201553841793" })}
                      <i className="bi bi-arrow-left" style={{ marginLeft: locale === "ar" ? "0" : "8px", marginRight: locale === "ar" ? "8px" : "0", display: locale === "ar" ? "none" : "inline" }}></i>
                      <i className="bi bi-arrow-right" style={{ marginRight: locale === "ar" ? "0" : "8px", marginLeft: locale === "ar" ? "8px" : "0", display: locale === "ar" ? "inline" : "none" }}></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <Brand3></Brand3> */}
    </div>
  );
};

export default page;
