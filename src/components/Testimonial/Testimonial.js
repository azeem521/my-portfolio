import React from 'react'
import './Testimonial.css'
import b1 from '../../img/img5.jpg'
import b2 from '../../img/img6.jpg'
import b3 from '../../img/img7.jpg'
import b4 from '../../img/img8.jpg'
import b5 from '../../img/img10.jpg'
import {Swiper, SwiperSlide} from 'swiper/react'
import { Pagination } from 'swiper'
import 'swiper/css/pagination'


const Testimonial = () => {

const clients =[
  {
    img:b1,
    review:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt quasi doloribus nihil laborum voluptas quo nulla minima obcaecati corrupti!'
  },
  {
    img:b2,
    review:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt quasi doloribus nihil laborum voluptas quo nulla minima obcaecati corrupti!'
  },
  {
    img:b3,
    review:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt quasi doloribus nihil laborum voluptas quo nulla minima obcaecati corrupti!'
  },
  {
    img:b4,
    review:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt quasi doloribus nihil laborum voluptas quo nulla minima obcaecati corrupti!'
  },
  {
    img:b5,
    review:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt quasi doloribus nihil laborum voluptas quo nulla minima obcaecati corrupti!'
  }
]

  return (
   <div className="t-wrapper">
    <div className="t-heading">
        <span>Clients always get </span>
        <span>Exceptional Work </span>
        <span>from me...</span>
        <div className="t-blur" style={{background:'var(--purple)'}}>



               </div>
               <div className="t-blur1" style={{background:'red'}}>
               </div>

          {/* slider */}


          <Swiper
          modules={[Pagination]}
          slidesPerView={1}
          pagination={{clickable: true}}
          >
            {
              clients.map((Clients, index)=>{
                return (
                  <SwiperSlide key={index}>
                   <div className="testimonial">
                   <img src={Clients.img} alt="" />
                    <span>{Clients.review}</span>
                   </div>
                  </SwiperSlide>
                )
              })
            }



          </Swiper>

    </div>
   </div>
  )
}

export default Testimonial