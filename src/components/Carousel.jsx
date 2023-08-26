import carousel_1 from '../images/carousel_1.jpg'
import carousel_2 from '../images/carousel_2.jpg'
import carousel_4 from '../images/carousel_4.jpg'
import carousel_5 from '../images/carousel_5.jpg'
import carousel_video from '../images/carousel_vid.mp4'



import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay} from 'swiper/modules'
import '../index.css'
import 'swiper/css'
import 'swiper/css/navigation'


const Carousel = () => {
   return (
      <div className='carousel' >
         <Swiper
            loop={true}
            spaceBetween={0}
            className='swiper-el'
            navigation={true}
            modules={[Navigation, Autoplay]}
            autoplay={{
               delay: 4500
            }}
         >
            <SwiperSlide>
               <img className='image-swiper' src={carousel_1} />
            </SwiperSlide>
            <SwiperSlide>
               <img className='image-swiper' src={carousel_2} />
            </SwiperSlide>
            <SwiperSlide>
               <video  className='vid' controls muted='muted'>
                  <source className='vid' src={carousel_video} type='video/mp4' />
               </video>
            </SwiperSlide>
            <SwiperSlide>
               <img className='image-swiper' src={carousel_4} />
            </SwiperSlide>
            <SwiperSlide>
               <img className='image-swiper' src={carousel_5} />
            </SwiperSlide>
         </Swiper>
         <div className="gradient"></div>
      </div>
   )
}

export default Carousel