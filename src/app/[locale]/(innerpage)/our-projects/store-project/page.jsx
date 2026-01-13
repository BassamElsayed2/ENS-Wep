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
      title: "تطبيق المتجر الإلكتروني - منصة تجارة إلكترونية متطورة باستخدام Next.js و Node.js | ENS",
      description: "تطبيق المتجر الإلكتروني من ENS - منصة تجارة إلكترونية متطورة تم تطويرها باستخدام Next.js و Node.js. تحويل الزوار إلى عملاء دائمين مع أداء عالي وأمان متقدم. مناسب للشركات والمتاجر.",
      keywords: "تطبيق متجر إلكتروني, Next.js, Node.js, منصة تجارة إلكترونية, تطوير تطبيقات, ENS, تطبيقات ويب, متاجر إلكترونية",
      openGraph: {
        title: "تطبيق المتجر الإلكتروني - منصة تجارة إلكترونية متطورة | ENS",
        description: "تطبيق المتجر الإلكتروني من ENS - منصة تجارة إلكترونية متطورة باستخدام Next.js و Node.js",
        type: "website",
      },
    };
  } else {
    return {
      title: "E-Commerce Store Application - Advanced E-Commerce Platform Using Next.js and Node.js | ENS",
      description: "E-Commerce Store Application from ENS - An advanced e-commerce platform developed using Next.js and Node.js. Convert visitors into loyal customers with high performance and advanced security. Ideal for businesses and retailers.",
      keywords: "e-commerce application, Next.js, Node.js, e-commerce platform, application development, ENS, web applications, online stores",
      openGraph: {
        title: "E-Commerce Store Application - Advanced E-Commerce Platform | ENS",
        description: "E-Commerce Store Application from ENS - An advanced e-commerce platform using Next.js and Node.js",
        type: "website",
      },
    };
  }
}

const page = () => {
  const t = useTranslations("ServiceDetails_StoreProject");
  const locale = useLocale();
  
  return (
    <div>
      <BreadCumb
        bgimg="/assets/images/bg/breadcumgBg.png"
        Title_en="Store Project"
        Title_ar="تطبيق المتجر"
      ></BreadCumb>

      <ServiceDetails
        namespace="ServiceDetails_StoreProject"
        bannerImage="/assets/commerce-banner.jpg"
        standardImageOne="/assets/commerceS1.jpg"
        standardImageTwo="/assets/commerceS2.jpg"
        useAnimatedBanner={true}
      />
      {/* <Services1 type="app-version" pageNumber={3}></Services1> */}

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
                      src="/assets/images/icon/ecommerce-store.svg"
                      alt="تطبيق المتجر الإلكتروني"
                      width={400}
                      height={350}
                      className="contact-animated-icon"
                      unoptimized
                    />
                  </div>
                  <h3 className="title">{t("contactTitle", { default: "لطلب التطبيق" })}</h3>
                  <p className="text">{t("contactText", { default: "تواصل معنا اليوم لطلب تطبيق متجر إلكتروني مخصص لاحتياجاتك باستخدام Next.js و Node.js" })}</p>
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
