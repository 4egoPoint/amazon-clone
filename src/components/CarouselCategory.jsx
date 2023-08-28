import category_0 from '../images/category_0.jpg'
import category_1 from '../images/category_1.jpg'
import category_2 from '../images/category_2.jpg'
import category_3 from '../images/category_3.jpg'
import category_4 from '../images/category_4.jpg'
import category_5 from '../images/category_5.jpg'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import '../index.css'
import 'swiper/css'
import 'swiper/css/navigation'

const CarouselCategory = () => {
   return (
      <div className='corus-cat'>
         <div className="corus-title">Shop by category</div>
         <Swiper
            slidesPerView={5}
            spaceBetween={10}
            navigation={true}
            modules={[Navigation]}
         >
            <SwiperSlide>
               <img src={category_0} />
            </SwiperSlide>
            <SwiperSlide>
               <img src={category_1} />
            </SwiperSlide>
            <SwiperSlide>
               <img src={category_2} />
            </SwiperSlide>
            <SwiperSlide>
               <img src={category_3} />
            </SwiperSlide>
            <SwiperSlide>
               <img src={category_4} />
            </SwiperSlide>
            <SwiperSlide>
               <img src={category_5} />
            </SwiperSlide>

         </Swiper>
      </div>
   )
}

export default CarouselCategory