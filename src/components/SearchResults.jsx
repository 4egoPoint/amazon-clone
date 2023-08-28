
import '../index.css'
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { callAPI } from '../utils/CallAPI';

const SearchResults = () => {
   const [searchParams] = useSearchParams();
   const [products, setProducts] = useState(null)

   const getSearchResults = () => {
      const searchTerm = searchParams.get("searchTerm");
      const category = searchParams.get("category")

      callAPI(`data/search.json`)
         .then((searchResults) => {
            const categoryResults = searchResults[category]
            if (searchTerm) {
               const results = categoryResults.filter(product => product.title.toLowerCase().includes(searchTerm.toLowerCase()))
               setProducts(results)
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
            products &&  products.map((product, key) => {
               return (
                  <div key={key}>
                     {product.title}
                  </div>
               )
            })
         }
      </div>
   )
}

export default SearchResults