import home_grid_1 from '../images/home_grid_1.jpg'
import home_grid_2 from '../images/home_grid_2.jpg'
import home_grid_3 from '../images/home_grid_3.jpg'
import home_grid_4 from '../images/home_grid_4.jpg'
import home_grid_5 from '../images/home_grid_5.jpg'
import home_grid_6 from '../images/home_grid_6.jpg'
import home_grid_7 from '../images/home_grid_7.jpg'
import home_grid_8 from '../images/home_grid_8.jpg'


import CarouselCategory from './CarouselCategory'
import Carousel from './Carousel'
import HomePageCard from './HomePageCard'
import CarouselProduct from './CarouselProduct'
import '../index.css'

const HomePage = () => {
   return (
      <>
         <div className="home-page">
            <Carousel />

            <div className="grid-section">
               <HomePageCard className="grid-item" title={'We have surprise for you'}
                  img={home_grid_1} link={'See terms and conditions'} />
               <HomePageCard className="grid-item" title={'Watch The Rings of Power'}
                  img={home_grid_2} link={'Start streaming now'} />
               <HomePageCard className="grid-item" title={'Ultimate Streaming'}
                  img={home_grid_3} link={'Find out more'} />
               <HomePageCard className="grid-item" title={'More titles to explore'}
                  img={home_grid_4} link={'Browse Kindle Unlimited'} />
               <HomePageCard className="grid-item" title={'Shop pet supplies'}
                  img={home_grid_5} link={'See more'} />
               <HomePageCard className="grid-item" title={'Spring Sale'}
                  img={home_grid_6} link={'See the deals'} />
               <HomePageCard className="grid-item" title={'Echo Buds'}
                  img={home_grid_7} link={'See more'} />
               <HomePageCard className="grid-item" title={'Family Plan: 3 months free'}
                  img={home_grid_8} link={'Learn more'} />
            </div>

            <CarouselProduct />

            <CarouselCategory />
            <div className="comertial">
               <img className="comertial-img" src={require('../images/banner_image.jpg')} alt="comer" />
            </div>
         </div>
      </>
   )
}

export default HomePage