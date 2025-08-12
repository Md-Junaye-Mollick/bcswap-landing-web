import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useTheme } from "next-themes";

// Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// Swiper modules
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

const HomeSwiper = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent rendering on server side until mounted
  if (!mounted) return null;

  const imageNames = ["bridge", "qr", "swap", "home", "stake", "setting", "explore"];
  const slides = imageNames.map((name) => ({
    src: `/images/swiper/${name}-${theme}.jpg`,
    alt: `${name} screenshot`,
  }));

  return (
    <div className="max-w-56 lg:max-w-md xl:max-w-2xl 2xl:max-w-4xl">
      <Swiper
        modules={[EffectCoverflow, Pagination, Autoplay]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        initialSlide={3}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        className="mySwiper w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="flex justify-center items-center">
            <img
              src={slide.src}
              alt={slide.alt}
              loading="lazy"F
              className="block w-full max-w-xs md:max-w-sm rounded-2xl object-contain border border-custom-border"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeSwiper;
