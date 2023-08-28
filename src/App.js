import React from 'react'
import HomePage from './components/HomePage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Checkout from './components/Checkout'
import SearchResults from './components/SearchResults'
import ProductPage from './components/ProductPage'


const App = () => {

   return (
      <BrowserRouter>
         <NavBar />
         <Routes>
            <Route exact path='/' element={<HomePage />} />
            <Route path='/search' element={<SearchResults />} />
            <Route path='/product/:id' element={<ProductPage />} />
            <Route path='/checkout' element={<Checkout />} />
         </Routes>
      </BrowserRouter>
   )
}

export default App