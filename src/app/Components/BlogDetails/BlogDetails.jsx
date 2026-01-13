"use client"
import { useEffect } from "react";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import Link from "next/link";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";

const BlogDetails = ({ articleKey = "default" }) => {
    let translationKey = "Default";
    if (articleKey === "choose-hosting-plan") {
        translationKey = "ChooseHosting";
    } else if (articleKey === "network-systems") {
        translationKey = "NetworkSystems";
    } else if (articleKey === "cybersecurity-solutions") {
        translationKey = "Cybersecurity";
    }
    const t = useTranslations(`BlogArticle_${translationKey}`);
    const locale = useLocale();
    const isRTL = locale === 'ar';

    useEffect(() => {
        loadBackgroudImages();
    }, []);

    return (
        <section className="news-standard section-padding fix">
        <div className="container">
            <div className="news-details-area">
                <div className="row g-5">
                    <div className="col-12 col-lg-8">
                        <div className="blog-post-details">
                            <div className="single-blog-post">
                                {t("topImage") && (
                                    <div className="post-featured-thumb mb-4 wow fadeInUp" data-wow-delay=".2s">
                                        <Image src={t("topImage")} alt={t("topImageAlt", { default: "Hosting" })} width={800} height={400} style={{ width: '100%', height: 'auto', borderRadius: '15px' }} />
                                    </div>
                                )}
                                <div className="post-content">
                                    <ul className="post-list d-flex align-items-center wow fadeInUp" data-wow-delay=".2s" style={{ flexDirection: isRTL ? 'row-reverse' : 'row' }}>
                                        <li>
                                        <i className="bi bi-person"></i>
                                            {t("author", { default: "بواسطة ENS" })}
                                        </li>
                                        <li>
                                        <Image src="/assets/images/icon/tagIcon.png" alt="img" width={20} height={20}   />
                                            {t("category", { default: "الأستضافة المشتركة" })}
                                        </li>
                                    </ul>
                                    <h3 className="wow fadeInUp" data-wow-delay=".4s">{t("title", { default: "Article Title" })}</h3>
                                    {t.raw("paragraphs") && Array.isArray(t.raw("paragraphs")) && t.raw("paragraphs").map((para, index) => (
                                        <p key={index} className={`mb-3 wow fadeInUp`} data-wow-delay={`${0.6 + index * 0.2}s`}>
                                            {para}
                                        </p>
                                    ))}
                                    {t("highlightText") && (
                                        <div className="hilight-text mt-4 mb-4 wow fadeInUp" data-wow-delay=".8s">
                                            <p>{t("highlightText")}</p>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36"
                                                viewBox="0 0 36 36" fill="none">
                                                <path
                                                    d="M7.71428 20.0711H0.5V5.64258H14.9286V20.4531L9.97665 30.3568H3.38041L8.16149 20.7947L8.5233 20.0711H7.71428Z"
                                                    stroke="#7444FD" />
                                                <path
                                                    d="M28.2846 20.0711H21.0703V5.64258H35.4989V20.4531L30.547 30.3568H23.9507L28.7318 20.7947L29.0936 20.0711H28.2846Z"
                                                    stroke="#7444FD" />
                                            </svg>
                                        </div>
                                    )}
                                    {t.raw("images") && Array.isArray(t.raw("images")) && t.raw("images").length > 0 && (
                                        <div className="row g-4 wow fadeInUp" data-wow-delay="1s">
                                            {t.raw("images").map((img, index) => (
                                                <div key={index} className="col-lg-6">
                                                    <div className="details-image">
                                                        <Image src={img.src} alt={img.alt || "img"} width={352} height={256}   />
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                    {t.raw("finalParagraphs") && Array.isArray(t.raw("finalParagraphs")) && t.raw("finalParagraphs").map((para, index) => (
                                        <p key={index} className={`pt-5 wow fadeInUp`} data-wow-delay={`${1.2 + index * 0.2}s`}>
                                            {para}
                                        </p>
                                    ))}
                                    {t("bottomImage") && (
                                        <div className="post-featured-thumb mt-5 wow fadeInUp" data-wow-delay="1.4s">
                                            <Image src={t("bottomImage")} alt={t("bottomImageAlt", { default: "Hosting" })} width={800} height={400} style={{ width: '100%', height: 'auto', borderRadius: '15px' }} />
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="row tag-share-wrap mt-4 mb-30 wow fadeInUp" data-wow-delay=".8s">
                                <div className="col-lg-8 col-12">
                                    <div className="tagcloud">
                                        <h6 className="d-inline me-2">{t("tagsLabel", { default: "Tags:" })} </h6>
                                        {t.raw("tags") && Array.isArray(t.raw("tags")) && t.raw("tags").map((tag, index) => (
                                            <a key={index} href="#">{tag}</a>
                                        ))}
                                    </div>
                                </div>
                                <div className="col-lg-4 col-12 mt-3 mt-lg-0 text-lg-end wow fadeInUp"
                                    data-wow-delay="1.2s">
                                    <div className="social-share">
                                        <span className="me-3">Share:</span>
                                        <a href="#"><i className="bi bi-facebook"></i></a>
                                        <a href="#"><i className="bi bi-twitter"></i></a>
                                        <a href="#"><i className="bi bi-linkedin"></i></a>
                                        <a href="#"><i className="bi bi-pinterest"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4">

                    <div className="main-sidebar">
                        <div className="single-sidebar-widget wow fadeInUp" data-wow-delay=".9s">
                            <div className="wid-title">
                                <h3>Tags</h3>
                            </div>
                            <div className="news-widget-categories">
                                <div className="tagcloud">
                                    <a href="#">Security</a>
                                    <a href="#">Business</a>
                                    <a href="#">Digital</a>
                                    <a href="#">Technology</a>
                                    <a href="#">Change</a>
                                    <a href="#">Video</a>
                                    <a href="#">UI/UX Desing</a>
                                    <a href="#">Startup</a>
                                    <a href="#">Services</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default BlogDetails;