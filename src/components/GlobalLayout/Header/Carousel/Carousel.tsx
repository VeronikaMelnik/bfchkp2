'use client';
import styles from './Carousel.module.scss';
import { CarouselItem } from './CarouselItem/CarouselItem';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay } from 'swiper/modules';

export const Carousel = () => {
    const carouselImages: Array<{ image: string; alt: string }> = [
        { image: '/images/clubs/2_s.png', alt: 'Profil' },
        { image: '/images/clubs/3_s.png', alt: 'New Style' },
        { image: '/images/clubs/9_s.png', alt: 'Dartly' },
        { image: '/images/clubs/13_s.png', alt: 'Black Fox' },
        { image: '/images/clubs/19_s.png', alt: 'Tornado' },
        { image: '/images/clubs/20_s.png', alt: 'Miami' },
        { image: '/images/clubs/27_s.png', alt: 'ЭПИCenter' },
        { image: '/images/clubs/29_s.png', alt: 'X Team' },
        { image: '/images/clubs/33_s.png', alt: 'Indigo' },
        { image: '/images/clubs/34_s.png', alt: 'D C' },
        { image: '/images/clubs/43_s.png', alt: 'Helious' },
        { image: '/images/clubs/51_s.png', alt: 'Fortuna' },
        { image: '/images/clubs/55_s.png', alt: 'Red Lion' },
        { image: '/images/clubs/61_s.png', alt: 'FidGym' },
        { image: '/images/clubs/65_s.png', alt: 'Cheer Start' },
        { image: '/images/clubs/67_s.png', alt: 'Griffin' },
        { image: '/images/clubs/68_s.png', alt: 'Dream Dance' },
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
