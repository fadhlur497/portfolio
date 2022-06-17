import React from 'react'
import './testimonial.css'
import AVTR1 from '../../assets/alfa.jpeg'
import AVTR2 from '../../assets/ikbal.jpeg'
import AVTR3 from '../../assets/rizal.jpeg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: AVTR1,
    name: 'Alfa',
    review: 'i like your website'
  },
  {
    avatar: AVTR2,
    name: 'Iqbal',
    review: 'i like this website'
  },
  {
    avatar: AVTR3,
    name: 'Rizal',
    review: 'i like this website'
  },
]

const Testimonials = () => {
  return (
    <section id='testimonial'>
      <h5>Review from Viewers My Website</h5>
      <h2>Testimonials</h2>
      
      <Swiper className="container testimonials__container"
            // install Swiper modules
            modules={[ Pagination ]}
            spaceBetween={40}
            slidesPerView={1}
            pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index}className='testimonial'>
                <div className="client__avatar">
                  <img src={avatar}/>
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section >
  )
}

export default Testimonials