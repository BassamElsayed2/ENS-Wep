import BlogDetails from '@/app/Components/BlogDetails/BlogDetails';
import BreadCumb from '@/app/Components/Common/BreadCumb';
import { useTranslations } from 'next-intl';
import React from 'react';

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const { locale } = resolvedParams;
  
  if (locale === "ar") {
    return {
      title: "دور أنظمة الشبكات المتكاملة في تحسين الإنتاجية | ENS",
      description: "تعرف على دور أنظمة الشبكات المتكاملة في تحسين الإنتاجية وتسهيل إدارة البنية التحتية التقنية. اكتشف كيف يمكن لأنظمة الشبكات المتقدمة من ENS تحسين أداء شركتك.",
      keywords: "أنظمة الشبكات, شبكات متكاملة, إدارة البنية التحتية, تحسين الإنتاجية, ENS, شبكات الشركات",
      openGraph: {
        title: "دور أنظمة الشبكات المتكاملة في تحسين الإنتاجية | ENS",
        description: "تعرف على دور أنظمة الشبكات المتكاملة في تحسين الإنتاجية وتسهيل إدارة البنية التحتية التقنية",
        type: "article",
      },
    };
  } else {
    return {
      title: "The Role of Integrated Network Systems in Improving Productivity | ENS",
      description: "Learn about the role of integrated network systems in improving productivity and facilitating IT infrastructure management. Discover how advanced network systems from ENS can improve your company's performance.",
      keywords: "network systems, integrated networks, infrastructure management, productivity improvement, ENS, corporate networks",
      openGraph: {
        title: "The Role of Integrated Network Systems in Improving Productivity | ENS",
        description: "Learn about the role of integrated network systems in improving productivity and facilitating IT infrastructure management",
        type: "article",
      },
    };
  }
}

const page = () => {
  const t = useTranslations("BlogArticle_NetworkSystems");
  
  return (
    <div>
      <BreadCumb
        bgimg="/assets/images/bg/breadcumgBg.png"
        Title_en="Network Systems Role in Productivity"
        Title_ar="دور أنظمة الشبكات المتكاملة"
      ></BreadCumb>
      <BlogDetails 
        articleKey="network-systems"
      />        
    </div>
  );
};

export default page;

