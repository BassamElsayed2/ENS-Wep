import BlogDetails from '@/app/Components/BlogDetails/BlogDetails';
import BreadCumb from '@/app/Components/Common/BreadCumb';
import { useTranslations } from 'next-intl';
import React from 'react';

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const { locale } = resolvedParams;
  
  if (locale === "ar") {
    return {
      title: "كيف تختار خطة الاستضافة المناسبة لشركتك | ENS",
      description: "دليل شامل لاختيار خطة الاستضافة المناسبة لشركتك لضمان أداء واستقرار أعلى. تعرف على أنواع الاستضافة المختلفة وكيفية اختيار الأنسب لاحتياجاتك من ENS.",
      keywords: "خطة استضافة, استضافة مواقع, اختيار استضافة, استضافة شركات, ENS, أداء المواقع",
      openGraph: {
        title: "كيف تختار خطة الاستضافة المناسبة لشركتك | ENS",
        description: "دليل شامل لاختيار خطة الاستضافة المناسبة لشركتك لضمان أداء واستقرار أعلى",
        type: "article",
      },
    };
  } else {
    return {
      title: "How to Choose the Right Hosting Plan for Your Company | ENS",
      description: "Comprehensive guide to choosing the right hosting plan for your company to ensure higher performance and stability. Learn about different types of hosting and how to choose the best for your needs from ENS.",
      keywords: "hosting plan, web hosting, choose hosting, business hosting, ENS, website performance",
      openGraph: {
        title: "How to Choose the Right Hosting Plan for Your Company | ENS",
        description: "Comprehensive guide to choosing the right hosting plan for your company",
        type: "article",
      },
    };
  }
}

const page = () => {
  const t = useTranslations("BlogArticle_ChooseHosting");
  
  return (
    <div>
      <BreadCumb
        bgimg="/assets/images/bg/breadcumgBg.png"
        Title_en="How to Choose the Right Hosting Plan"
        Title_ar="كيف تختار خطة الاستضافة المناسبة"
      ></BreadCumb>
      <BlogDetails 
        articleKey="choose-hosting-plan"
      />        
    </div>
  );
};

export default page;

