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
      title: "تطبيق الأخبار - منصة إخبارية متطورة باستخدام Next.js و Node.js | ENS",
      description: "تطبيق الأخبار من ENS - منصة إخبارية متطورة تم تطويرها باستخدام Next.js و Node.js. واجهة مستخدم سريعة وتفاعلية مع خادم قوي يدير قواعد البيانات بكفاءة عالية. مناسب للمؤسسات الإعلامية والوكالات.",
      keywords: "تطبيق أخبار, Next.js, Node.js, منصة إخبارية, تطوير تطبيقات, ENS, تطبيقات ويب",
      openGraph: {
        title: "تطبيق الأخبار - منصة إخبارية متطورة | ENS",
        description: "تطبيق الأخبار من ENS - منصة إخبارية متطورة باستخدام Next.js و Node.js",
        type: "website",
      },
    };
  } else {
    return {
      title: "News Application - Advanced News Platform Using Next.js and Node.js | ENS",
      description: "News Application from ENS - An advanced news platform developed using Next.js and Node.js. Fast and interactive user interface with a powerful server that efficiently manages databases. Ideal for media organizations and agencies.",
      keywords: "news application, Next.js, Node.js, news platform, application development, ENS, web applications",
      openGraph: {
        title: "News Application - Advanced News Platform | ENS",
        description: "News Application from ENS - An advanced news platform using Next.js and Node.js",
        type: "website",
      },
    };
  }
}

const page = () => {
  const t = useTranslations("ServiceDetails_NewsProject");
  const locale = useLocale();
  
  return (
    <div>
      <BreadCumb
        bgimg="/assets/images/bg/breadcumgBg.png"
        Title_en="News Project"
        Title_ar="تطبيق الأخبار"
      ></BreadCumb>

      <ServiceDetails
        namespace="ServiceDetails_NewsProject"
        bannerImage="/assets/news-banner.jpg"
        standardImageOne="/assets/newsS1.jpg"
        standardImageTwo="/assets/newsS2.jpg"
        useAnimatedIcons={true}
        iconType="news"
        useAnimatedBanner={true}
      />
      {/* <Services1 type="app-version" pageNumber={1}></Services1> */}

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
                      src="/assets/images/icon/news-app.svg"
                      alt="تطبيق الأخبار"
                      width={400}
                      height={350}
                      className="contact-animated-icon"
                      unoptimized
                    />
                  </div>
                  <h3 className="title">{t("contactTitle", { default: "لطلب التطبيق" })}</h3>
                  <p className="text">{t("contactText", { default: "تواصل معنا اليوم لطلب تطبيق أخبار مخصص لاحتياجاتك باستخدام Next.js و Node.js" })}</p>
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
