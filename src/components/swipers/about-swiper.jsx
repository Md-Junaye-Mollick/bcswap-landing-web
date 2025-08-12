import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useTheme } from "next-themes";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/parallax";

// Swiper modules
import { Parallax, Pagination, Autoplay } from "swiper/modules";

const AboutSwiper = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent rendering on server side until mounted
  if (!mounted) return null;

  const imageNames = ["bridge", "qr", "swap", "home", "stake", "setting", "explore"];
  const slides = imageNames.map((name, index) => ({
    src: `/images/swiper/${name}-${theme}.jpg`,
    alt: `About Swiper Slide ${index + 1}`,
  }));

  return (
    <div className="max-w-80">
      <Swiper
        modules={[Parallax, Pagination, Autoplay]}
        speed={1000} // Slower speed to enhance the parallax effect
        parallax={true}
        loop={true}
        initialSlide={3}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}

        pagination={{
          clickable: true,
        }}
        
        className="myParallaxSwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full overflow-hidden rounded-2xl">
              {/* Foreground Image */}
              <div className="relative flex items-center justify-center h-full p-8">
                <img
                  src={slide.src}
                  alt={slide.alt}
                  loading="lazy"
                  className="block w-full max-w-sm rounded-xl border border-custom-border"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default AboutSwiper;
