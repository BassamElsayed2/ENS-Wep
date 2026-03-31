"use client"
import Slider from "react-slick";
import { useLocale } from "next-intl";
import brand1Data from '../../Data/brand1Data.json';
import Image from "next/image";

function resolveLang(locale) {
  const base = String(locale || "").split(/[-_]/)[0].toLowerCase();
  return base === "ar" ? "ar" : "en";
}

function pickLocalized(obj, lang) {
  if (obj == null) return "";
  if (typeof obj === "string") return obj;
  return obj[lang] ?? obj.en ?? obj.ar ?? "";
}

const Brand2 = () => {
  const locale = useLocale();
  const lang = resolveLang(locale);
  const data = brand1Data.brands;

    const settings = {
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        swipeToSlide: true,
        autoplay: true,
        autoplaySpeed: 2000,             
        responsive: [
          {
            breakpoint: 1399,
            settings: {
              slidesToShow: 4,
            }
          },
          {
            breakpoint: 1199,
            settings: {
              slidesToShow: 3,
            }
          },{
            breakpoint: 575,
            settings: {
              slidesToShow: 1,
            }
          }
        ]
      }; 

    return (
        <div 
          className="brand-slider-section section-padding-brand2 fix"
          dir={locale === "ar" ? "rtl" : "ltr"}
        >
            <div className="brand-slider-container-wrapper style2">
                <div className="container">
                    <div className="brand-slider-wrapper style2">
                        <h2 className="single-section-title wow fadeInUp" data-wow-delay=".2s">
                            {pickLocalized(brand1Data.title, lang)}
                        </h2>
                        <div className="row">
                            <div className="slider-area brandSliderTwo">
                                <div className="swiper gt-slider" id="brandSliderTwo" >

                                    <div className="swiper-wrapper">
                                    <Slider {...settings}>
                                    {data.map((item, index)=>(
                                        <div key={index} className="swiper-slide">
                                            <div className="brand-logo">
                                            <Image src={item.img} alt="img" width={400} height={120} className="brand-image" />
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

export default Brand2;