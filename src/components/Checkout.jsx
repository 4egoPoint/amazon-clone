

import { useDispatch, useSelector } from "react-redux"
import "../index.css"
import { Link } from "react-router-dom"
import ProductDetails from './ProductDetails';
import { GB_CURRENCY } from '../utils/constants'
import { removeFromCart } from "../redux/cartSlice";

const Checkout = () => {
   const dispatch = useDispatch()
   const products = useSelector((state) => state.cart.products)
   const itemsNumber = useSelector((state) => state.cart.productsNumber)
   const subtotal = useSelector((state) => state.cart.products.reduce((subtotal, product) => subtotal + (product.price * product.quantity), 0))

   return (
      <div className='checkout'>
         <div className="checkout__main-colums">
            <div className="checkout__main-colum1">
               <div className="checkout__shopping">Shopping Cart</div>
               {
                  products.map(product => {
                     return (
                        <div key={product.id}>
                           <div className="checkout__product-item">
                              <div className="checkout__product-item-1">
                                 <div className="checkout__product-item-1-first">
                                    <Link className="none" to={`/product/${product.id}`}>
                                       <img className="checkout__product-item-img" src={product.image_small} />
                                    </Link>
                                 </div>
                                 <div className="checkout__product-item-1-second">
                                    <div className="checkout__product-item-styled-link">
                                       <Link className="none" to={`/product/${product.id}`}>
                                          <ProductDetails product={product} ratings={false} />
                                       </Link>
                                    </div>
                                    <div className="checkout__btn-wrap">
                                       <button onClick={() => {dispatch(removeFromCart(product.id)) }} className="checkout__btn">Delete</button>
                                    </div>
                                    <div className="checkout__quantity">
                                       <div className="checkout__quantity-item iterators">-</div>
                                       <div className="checkout__quantity-item">{product.quantity}</div>
                                       <div className="checkout__quantity-item iterators">+</div>
                                    </div>
                                 </div>
                              </div>
                              <div className="checkout__product-item2">
                                 <div className="checkout__product-item2-price">{GB_CURRENCY.format(product.price)}</div>
                              </div>
                           </div>
                        </div>
                     )
                  })
               }
               <div className="subtotal">Subtotal ({itemsNumber} items): <span className="bold">{GB_CURRENCY.format(subtotal)}</span></div>
            </div>
            <div className="checkout__main-colum2 main-colum2">
               <div className="main-colum2__texts">
                  Your order qualifies for <span className="bold">FREE DELIVERY</span>. Delivery Details
               </div>
               <div className="subtotal-new ">
                  Subtotal ({itemsNumber} items): <span className="bold">{GB_CURRENCY.format(subtotal)}</span>
               </div>
               <button className="col3__btn">Proceed to Checkout</button>
            </div>
         </div>
      </div>
   )
}

export default Checkout


{/* <div className="checkout__quantity-item iterators">-</div>
<div className="checkout__quantity-item">{product.quantity}</div>
<div className="checkout__quantity-item iterators">+</div> */}