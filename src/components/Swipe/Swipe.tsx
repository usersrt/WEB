import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import s from "./Swipe.module.scss"
import { getById } from '../../API/Api';
import { useStr } from '../../store/ItemStore';

const Swipe = ({img}:any) => {
  

  

  return (
    <>
          <div className={s.container}>
              <Swiper
                spaceBetween={0}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                style={{width:450}}
              >
                <SwiperSlide><img src={img} alt="" height={150}/></SwiperSlide>
            </Swiper>
        </div>
    </>
  )
}

export default Swipe;