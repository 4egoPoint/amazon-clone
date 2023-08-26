

import '../index.css'

const HomePageCard = ({ title, img, link }) => {
   return (
      <div className='card-style'>
         <div className='card-title'>{title}</div>
         <div className='card-img-div'>
            <img className='card-img' src={img}/>
         </div>
         <div className='card-link'>{link}</div>

      </div>
   )
}

export default HomePageCard