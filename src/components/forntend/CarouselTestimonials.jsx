import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "../../App.css";

const testimonials = [
  { name: 'John', message: 'Fantastic experience!', role: 'CTO at X' },
  { name: 'Linda', message: 'Loved the customer support.', role: 'Manager at Y' },
  { name: 'James', message: 'Easy to use and reliable.', role: 'Developer' },
];

const CarouselTestimonials = () => {
  return (
    <div className="carousel-wrapper">
      <h2>Testimonials</h2>
      <Swiper spaceBetween={30} slidesPerView={1} loop={true}>
        {testimonials.map((t, index) => (
          <SwiperSlide key={index}>
            <div className="testimonial-slide">
              <p>"{t.message}"</p>
              <h4>{t.name}</h4>
              <span>{t.role}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarouselTestimonials;
