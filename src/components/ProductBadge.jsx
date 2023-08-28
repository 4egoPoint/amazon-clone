
import '../index.css'
import React from 'react'

const ProductBadge = ({ badge }) => {

   if (badge === "choice") {
      return (
         <span className='span-f1'>Amazon's <span className='span-f1-in'>Choice</span></span>
      )
   }
   if (badge === "seller") {
      return (
         <span className='span-f2'>#1 Best Sellers</span>
      )
   }
   if (badge === "limited") {
      return (
         <span className='span-f3'>Limited Time Deal</span>
      )
   }

   return (
      <div></div>
   )
}

export default ProductBadge