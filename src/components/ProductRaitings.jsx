
import '../index.css'
import { StarIcon} from '@heroicons/react/24/outline'
import React from 'react'

const ProductRaitings = (props) => {
   const startNumber = props.avgRating
   const ratingNumber = props.ratings

   return (
      <div className='rat'>
         { 
            Array.from( {length: startNumber}, (_,i) => <StarIcon key={i}  className='rat-item'/>)
         }
                  { 
            Array.from( {length: 5 - startNumber}, (_,i) => <StarIcon key={i}  className='rat-itema'/>)
         }
         <span className='span-zxc'>{ratingNumber} ratings</span>
      </div>
   )
}

export default ProductRaitings