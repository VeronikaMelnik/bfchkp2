"use client";
import styles from "./Carousel.module.scss";
import { CarouselItem } from "./CarouselItem/CarouselItem";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay } from "swiper/modules";

export const Carousel = () => {
  const carouselImages: Array<{ image: string; alt: string }> = [
    { image: "/images/clubs/2_s.png", alt: "Dartly" },
    { image: "/images/clubs/3_s.png", alt: "Dartly" },
    { image: "/images/clubs/9_s.png", alt: "Dartly" },
    { image: "/images/clubs/13_s.png", alt: "Dartly" },
    { image: "/images/clubs/19_s.png", alt: "Dartly" },
    { image: "/images/clubs/20_s.png", alt: "Dartly" },
  ];
  return (
    <div className={styles.wrapper}>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        width={85}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {carouselImages.map((el, index) => {
          return (
            <SwiperSlide key={`CarouselItem-${index}-${el.image}`}>
              <CarouselItem image={el.image} alt={el.alt} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
