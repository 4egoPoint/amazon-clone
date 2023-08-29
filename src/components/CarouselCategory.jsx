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
import { createSearchParams, useNavigate } from 'react-router-dom'


const response = window.innerWidth
let responseI = 0

if (response > 1200) {
   responseI = 5
} else if (response > 700) {
   responseI = 3
} else if (response > 500) {
   responseI = 2
} else {
   responseI = 1
}

const CarouselCategory = () => {

   const navigate = useNavigate()

   const searchCategory = (category) => {
      navigate({
         pathname: "search",
         search: `${createSearchParams({
            category: `${category}`,
            search: ``
         })
            }`
      })
   }

   return (
      <div className='corus-cat'>
         <div className="corus-title">Shop by category</div>
         <Swiper
            slidesPerView={responseI}
            spaceBetween={10}
            navigation={true}
            modules={[Navigation]}
         >
            <SwiperSlide className='point' onClick={() => { searchCategory('Deals') }}>
               <img src={category_0} />
            </SwiperSlide>
            <SwiperSlide className='point' onClick={() => { searchCategory('Amazon') }}>
               <img src={category_1} />
            </SwiperSlide>
            <SwiperSlide className='point' onClick={() => { searchCategory('Fashion') }}>
               <img src={category_2} />
            </SwiperSlide>
            <SwiperSlide className='point' onClick={() => { searchCategory('Computers') }}>
               <img src={category_3} />
            </SwiperSlide>
            <SwiperSlide className='point' onClick={() => { searchCategory('Home') }}>
               <img src={category_4} />
            </SwiperSlide>
            <SwiperSlide className='point' onClick={() => { searchCategory('Mobiles') }}>
               <img src={category_5} />
            </SwiperSlide>

         </Swiper>
      </div>
   )
}

export default CarouselCategory