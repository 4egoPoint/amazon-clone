import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import React, { useState, useEffect } from 'react'
import { callAPI } from '../utils/CallAPI'
import '../index.css'
import { createSearchParams, useNavigate } from 'react-router-dom'


const Search = () => {
   const [suggestions, setSuggestions] = useState(null)
   const [searchTerm, setSearchTerm] = useState("")
   const [category, setCategory] = useState("All")
   const navigate = useNavigate()

   const onHandleSubmit =(e) => {
      e.preventDefault();

      navigate({
         pathname: "search",
         search: `${
            createSearchParams({
               category: `${category}`,
               search: `${searchTerm}`
            })
         }`
      })
      setSearchTerm('')
      setCategory('All')
   }


   const getSuggestions = () => {
      callAPI('data/suggestions.json')
         .then((suggestionsResults) => {
            setSuggestions(suggestionsResults)
         })
   }

   useEffect(() => {
      getSuggestions();
   }, [])

   return (
      <div className='search'>
         <div className="search__in">
            <select className='search__drop' onChange={(e) => {setCategory(e.target.value)}}>
               <option>All</option>
               <option>Deals</option>
               <option>Amazon</option>
               <option>Fashion</option>
               <option>Computers</option>
               <option>Home</option>
               <option>Mobiles</option>
            </select>
            <input className="search__input" type='text' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
            <button onClick={onHandleSubmit} className='search__btn'>
               <MagnifyingGlassIcon className='search__icon' />
            </button>
         </div>
         {
            suggestions &&
            <div className='drop-down'>
               {
                  suggestions.filter((suggestion) => {
                     const currentSearchTerm = searchTerm.toLowerCase();
                     const title = suggestion.title.toLowerCase();
                     return (
                        currentSearchTerm &&
                        title.startsWith(currentSearchTerm) &&
                        title !== currentSearchTerm
                     )
                  })
                     .slice(0, 10)
                     .map((suggestion) => { return(
                        <div className='drop-down__item' onClick={()=>{setSearchTerm(suggestion.title)}} key={suggestion.id}>
                           {
                              
                              suggestion.title
                           }
                        </div>)
                     })
               }
            </div>
         }
      </div>
   )
}

export default Search