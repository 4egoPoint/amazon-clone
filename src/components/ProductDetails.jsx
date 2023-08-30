
import '../index.css'
import React from 'react'
import ProductBadge from './ProductBadge'
import ProductRaitings from './ProductRaitings'

const ProductDetails = ({product, ratings}) => {

   

   return (
      <div className='details'>
      <div className="details__title">{product.title}</div>
      <div className="details__brand">by:<span className='blue-span'>{product.brand}</span></div>
      {
         ratings && 
      <div className="details__avgRating"><ProductRaitings avgRating={product.avgRating} ratings={product.ratings} /></div>
      }
      <div className="details__attribute">{product.attribute}</div>
      <div className="details__badge"><ProductBadge badge={product.badge}/></div>
      </div>
   )
}

export default ProductDetails