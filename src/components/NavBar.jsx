import logo from '../images/amazon.png'
import { ShoppingCartIcon } from '@heroicons/react/24/outline'
import Search from './Search'
import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'


const NavBar = () => {

   const cart = useSelector((state) => state.cart.productsNumber)

   return (
      <header className='nav-bar'>
         <div className='nav-bar__row'>
            <div className="nav-bar__left left">
               <Link to={"/"}>
                  <img className="left__logo" src={logo} alt="logo" />
               </Link>
               <div className="left__wrap">
                  <div className="left__decor1">Deliver to:</div>
                  <div className="left__decor2">United Kingdom</div>
               </div>
            </div>

            <div className="nav-bar__middle">
               <Search />
            </div>
            <div className="nav-bar__right right">
               <div className="right__wrap">
                  <div className="right__decor1">Hello, sign in</div>
                  <div className="right__decor2">Accounts & lists</div>
               </div>
               <div className="right__wrap">
                  <div className="right__decor1">Returns</div>
                  <div className="right__decor2">& Orders</div>
               </div>
               <Link className='product-link' to={"/checkout"} >
                  <div className="right__card">
                     <ShoppingCartIcon className='right__card-i' />
                     <div className='rev-col'>
                        <div className='relate'>
                           {cart}
                        </div>
                        <div className="right__extra">
                           card
                        </div>
                     </div>
                  </div>
               </Link>
            </div>
         </div>
         <div className="under-nav">
            <div className="under-nav__item">Today's deals</div>
            <div className="under-nav__item">Customer Service</div>
            <div className="under-nav__item">Registry</div>
            <div className="under-nav__item">Gift Cards</div>
            <div className="under-nav__item">Sell</div>

         </div>

      </header>
   )
}

export default NavBar