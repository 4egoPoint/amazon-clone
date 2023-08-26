import React from 'react'
import HomePage from './components/HomePage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {

   return (
      <BrowserRouter>
         <Routes>
            <Route exact path='/' element={<HomePage />}/>
         </Routes>
      </BrowserRouter>
   )
}

export default App