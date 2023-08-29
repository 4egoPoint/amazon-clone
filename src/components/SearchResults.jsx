
import '../index.css'
import React, { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { callAPI } from '../utils/CallAPI';
import ProductDetails from './ProductDetails';
import { GB_CURRENCY } from '../utils/constants';

const SearchResults = () => {
   const [searchParams] = useSearchParams();
   const [products, setProducts] = useState(null)

   const getSearchResults = () => {
      const searchTerm = searchParams.get("search");
      const category = searchParams.get("category")

      callAPI(`data/search.json`)
         .then((searchResults) => {
            const categoryResults = searchResults[category]
            if (searchTerm) {
               const results = categoryResults.filter(product => product.title.toLowerCase().includes(searchTerm.toLowerCase()))
               setProducts(results)
               console.log(results);
            } else {
               setProducts(categoryResults)
            }
         })
   }
   useEffect(() => {
      getSearchResults();
   }, [searchParams])
   return (
      <div className='search-results'>
         {
            products && products.map((product, key) => {
               return (
                  <Link className='product-link' key={key} to={`/product/${product.id}`}>
                     <div className='product-link-in'>
                        <div className="product-link-in__img-wrap">
                           <img className="product-link-in__img" src={product.image_small} />
                        </div>
                        <div className="product-link-in__content">
                           <ProductDetails product={product} ratings={true}/>   
                           <div className='product-link-in__price'>
                              {GB_CURRENCY.format(product.price)}
                           </div>
                        </div>
                     </div>
                  </Link>
               )
            })
         }
      </div>
   )
}

export default SearchResults