import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Products from '../pages/Products'
import Error from '../pages/Error/Error'
import Item from '../pages/Item/Item'

const Links = () => {

  return (
    <>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/products' element={<Products/>}/>
            <Route path='/item' element={<Item/>} />
            <Route path='*' element={<Error/>}/>
        </Routes>
    </>
  )
}

export default Links