import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react';
import './Portfolio.css';
import 'swiper/css'
import bookSearch from '../../img/bg1.jpg'
import dummyweb from '../../img/dummy web.png'
import foodSearch from '../../img/food recipe.jpg'
import weather from '../../img/weather.jpg'
import wcc from '../../img/wcc.png'
import calculator from '../../img/calculator.jpg'
import tdl from '../../img/tdl.png'
import na from '../../img/na.png'
import tc from '../../img/tc.png'
import pg from '../../img/pg.png'
import bg from '../../img/bg-changer.png'
import uc from '../../img/uc.jpg'
import fv from '../../img/fv.png'

import im3 from '../../img/em4.png'

const Portfolio = () => {
  return (
        <div className="portfolio" id='Portfolio'>
            {/* Heading */}
            <span>Recent Projects</span>
            <span>Portfolio</span>

            {/* Slider */}
            <Swiper  className='portfolio-slider'
            spaceBetween={30}
            slidesPerView={3}
            grabCursor={true}
           
            >
                <SwiperSlide>
                    <a href='https://vercel-book-search-3ceqqwlvo-azeem521.vercel.app/'>
                    <img src={bookSearch} alt="" />
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href='https://dummy-web-render.onrender.com/'>
                        <img src={dummyweb} alt="" />
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href='https://weather-app-react.onrender.com/'>
                        <img src={weather} alt="" />
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href='https://food-search-app-render.onrender.com/'>
                        <img src={foodSearch} alt="" />
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href='https://vocal-torte-534ad9.netlify.app'>
                        <img src={wcc} alt="" />
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href='https://keen-otter-59137d.netlify.app'>
                        <img src={calculator} alt="" />
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href='https://tourmaline-madeleine-5faf9a.netlify.app/'>
                        <img src={tdl} alt="" />
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href='https://sweet-froyo-a71bc3.netlify.app/'>
                        <img src={na} alt="" />
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href='https://peppy-centaur-b69a75.netlify.app'>
                        <img src={tc} alt="" />
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href='https://cheery-raindrop-fc0715.netlify.app'>
                        <img src={pg} alt="" />
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href='https://superlative-cheesecake-94ca80.netlify.app'>
                        <img src={bg} alt="" />
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href='https://whimsical-pothos-5a409a.netlify.app'>
                        <img src={uc} alt="" />
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href='https://profound-alfajores-a76eb4.netlify.app'>
                        <img src={fv} alt="" />
                    </a>
                </SwiperSlide>




               




            </Swiper>
        </div>
  )
}

export default Portfolio