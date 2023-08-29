import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import '../index.css'
import 'swiper/css'
import 'swiper/css/navigation'
import { Link } from 'react-router-dom'

const response = window.innerWidth
let responseI = 0

if(response > 1200) {
   responseI= 7
} else if(response > 700) {
   responseI= 5
} else if(response > 500) {
   responseI= 3
} else {
   responseI= 2
}

const CarouselProduct = () => {
   return (
      <div className='products'>
         <div className="best-title">Best Sellers</div>
         <Swiper
            slidesPerView={responseI}
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