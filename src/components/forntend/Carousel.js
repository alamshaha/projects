import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const SwiperCarousel = () => {
  return (
    <Swiper spaceBetween={50} slidesPerView={1} loop autoplay className="slider-image">
      <SwiperSlide><img   src="https://t4.ftcdn.net/jpg/05/54/46/89/360_F_554468927_iwU3VYIjsaeopAb0WPYxVf21TloEhTEj.jpg" alt="Slide 1" /></SwiperSlide>
      <SwiperSlide><img src="https://t4.ftcdn.net/jpg/05/54/46/89/360_F_554468927_iwU3VYIjsaeopAb0WPYxVf21TloEhTEj.jpg" alt="Slide 2" /></SwiperSlide>
      <SwiperSlide><img src="https://t4.ftcdn.net/jpg/05/54/46/89/360_F_554468927_iwU3VYIjsaeopAb0WPYxVf21TloEhTEj.jpg" alt="Slide 3" /></SwiperSlide>
    </Swiper>
  );
};

export default SwiperCarousel;
