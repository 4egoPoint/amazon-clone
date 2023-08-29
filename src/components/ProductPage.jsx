import React from 'react'
import '../index.css'
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { callAPI } from "../utils/CallAPI"
import ProductDetails from './ProductDetails'
import { GB_CURRENCY } from '../utils/constants'
import { addToCart } from '../redux/cartSlice'
import { useDispatch } from 'react-redux'

const ProductPage = () => {
   const { id } = useParams()
   const [product, setProduct] = useState(null)
   const dispatch = useDispatch()

   const getProduct = () => {
      callAPI('data/products.json')
         .then((productResults) => {
            setProduct(productResults[id])
         })
   }

   useEffect(() => {
      getProduct()
   }, []);

   if (!product?.title) return <h1>loading...</h1>
   return (product &&
      <div className='product'>
         <div className="product__colums">
            <div className="product__col1">
               <img  src={`${product.image}`} alt="" />
            </div>
            <div className="product__col2">
               <div className="product__details">
                  <ProductDetails product={product} ratings={true} />
               </div>
               <div className="products__description">
                  {product.description}
               </div>
            </div>
            <div className="product__col3 col3">
               <div className="col3__price">{GB_CURRENCY.format(product.price)}</div>
               <div className="col3__oldprice">RRP:<span className='line-t'>{GB_CURRENCY.format(product.oldPrice)}</span></div>
               <div className="col3__returns">FREE Returns</div>
               <div className="col3__delivery">FREE Delivery</div>
               <div className="col3__stock">In Stock</div>
               <div className="col3__quant">Quantity:
                  <select className="col3__select">
                     <option className="col3__option">1</option>
                     <option className="col3__option">2</option>
                     <option className="col3__option">3</option>
                  </select>
               </div>
               <button onClick={() =>{dispatch(addToCart())}} className="col3__btn">Add to Card</button>
            </div>
         </div>
      </div>
   )
}

export default ProductPage