import BlogDetails from '@/app/Components/BlogDetails/BlogDetails';
import BreadCumb from '@/app/Components/Common/BreadCumb';
import { useTranslations } from 'next-intl';
import React from 'react';

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const { locale } = resolvedParams;
  
  if (locale === "ar") {
    return {
      title: "أهمية الحلول الأمنية الحديثة في حماية بيانات الشركات | ENS",
      description: "اكتشف أهمية الحلول الأمنية الحديثة في حماية بيانات الشركات ومنع الهجمات السيبرانية. تعرف على كيفية حماية شركتك من التهديدات الإلكترونية مع حلول ENS الأمنية المتقدمة.",
      keywords: "حلول أمنية, أمن سيبراني, حماية البيانات, منع الهجمات, ENS, أمان الشركات",
      openGraph: {
        title: "أهمية الحلول الأمنية الحديثة في حماية بيانات الشركات | ENS",
        description: "اكتشف أهمية الحلول الأمنية الحديثة في حماية بيانات الشركات ومنع الهجمات السيبرانية",
        type: "article",
      },
    };
  } else {
    return {
      title: "The Importance of Modern Security Solutions in Protecting Company Data | ENS",
      description: "Discover the importance of modern security solutions in protecting company data and preventing cyber attacks. Learn how to protect your company from electronic threats with advanced security solutions from ENS.",
      keywords: "security solutions, cybersecurity, data protection, attack prevention, ENS, company security",
      openGraph: {
        title: "The Importance of Modern Security Solutions in Protecting Company Data | ENS",
        description: "Discover the importance of modern security solutions in protecting company data and preventing cyber attacks",
        type: "article",
      },
    };
  }
}

const page = () => {
  const t = useTranslations("BlogArticle_Cybersecurity");
  
  return (
    <div>
      <BreadCumb
        bgimg="/assets/images/bg/breadcumgBg.png"
        Title_en="Cybersecurity Solutions Importance"
        Title_ar="أهمية الحلول الأمنية الحديثة"
      ></BreadCumb>
      <BlogDetails 
        articleKey="cybersecurity-solutions"
      />        
    </div>
  );
};

export default page;

