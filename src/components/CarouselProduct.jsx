import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import '../index.css'
import 'swiper/css'
import 'swiper/css/navigation'
import { Link } from 'react-router-dom'

const CarouselProduct = () => {
   return (
      <div className='products'>
         <div className="best-title">Best Sellers</div>
         <Swiper
            slidesPerView={7}
            spaceBetween={10}
            navigation={true}
            modules={[Navigation]}
         >
            {
               Array.from({ length: 9 }, (_, i) =>
                  <SwiperSlide key={i}>
                     <Link to={`/product/${i}`} >
                        <img src={require(`../images/product_${i}_small.jpg`)} />
                     </Link>
                  </SwiperSlide>
               )
            }
         </Swiper>

      </div>
   )
}

export default CarouselProduct