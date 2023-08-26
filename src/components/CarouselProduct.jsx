
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import '../index.css'
import 'swiper/css'
import 'swiper/css/navigation'

const CarouselProduct = () => {
   return (
      <div>
         <Swiper
            slidesPerView={7}
            spaceBetween={10}
            navigation={true}
            modules={[Navigation]}
         >

         </Swiper>

      </div>
   )
}

export default CarouselProduct