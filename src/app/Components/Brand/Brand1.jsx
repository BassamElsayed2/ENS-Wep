"use client";
import { useState, useEffect } from "react";
import Slider from "react-slick";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";

import brandsData from "../../Data/brand1.json";

const Brand1 = () => {
  const t = useTranslations("Brand1");
  const locale = useLocale();
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // استخدام البيانات الثابتة مباشرة
    setLoading(true);
    setBrands(brandsData);
    setLoading(false);
  }, []);

  const settings = {
    dots: false,
    infinite: brands.length >= 5,
    speed: 2000,
    slidesToShow: brands.length >= 5 ? 5 : brands.length,
    slidesToScroll: 1,
    arrows: false,
    swipeToSlide: true,
    autoplay: brands.length > 0,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1399,
        settings: {
          slidesToShow: brands.length >= 4 ? 4 : brands.length,
        },
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: brands.length >= 3 ? 3 : brands.length,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  if (loading) {
    return (
      <div
        className="brand-slider-section section-padding fix"
        dir={locale === "ar" ? "rtl" : "ltr"}
      >
        <div className="brand-slider-container-wrapper style1">
          <div className="container">
            <div className="brand-slider-wrapper style1">
              <h2
                className="single-section-title wow fadeInUp"
                data-wow-delay=".2s"
              >
                {t("title")}
              </h2>
              <div className="row">
                <div className="text-center">
                  <p>{t("loading")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!brands || brands.length === 0) {
    return (
      <div
        className="brand-slider-section section-padding fix"
        dir={locale === "ar" ? "rtl" : "ltr"}
      >
        <div className="brand-slider-container-wrapper style1">
          <div className="container">
            <div className="brand-slider-wrapper style1">
              <h2
                className="single-section-title wow fadeInUp"
                data-wow-delay=".2s"
              >
                {t("title")}
              </h2>
              <div className="row">
                <div className="text-center">
                  <p>{t("noBrands")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="brand-slider-section section-padding fix"
      dir={locale === "ar" ? "rtl" : "ltr"}
    >
      <div className="brand-slider-container-wrapper style1">
        <div className="container">
          <div className="brand-slider-wrapper style1">
            <h2
              className="single-section-title wow fadeInUp"
              data-wow-delay=".2s"
            >
              {t("title")}
            </h2>
            <div className="row">
              <div className="slider-area brandSliderOne">
                <div className="swiper gt-slider" id="brandSliderOne">
                  <div className="swiper-wrapper">
                    <Slider {...settings}>
                      {brands.map((brand, index) => (
                        <div key={brand.id || index} className="swiper-slide">
                          <div className="brand-logo">
                            <Image
                              src={brand.img}
                              alt={`Brand ${brand.id || index + 1}`}
                              width={400}
                              height={120}
                              className="brand-image"
                            />
                          </div>
                        </div>
                      ))}
                    </Slider>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brand1;
