import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './About'
import Cart from './Cart'
import ItemDetailContainer from './ItemDetailContainer'
import ItemListContainer from './ItemListContainer'




const MainRoutes = () => {
  return (
    <main>
        <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/category/:categoryId' element={<ItemListContainer/>} />
            <Route path='/item/:id' element={<ItemDetailContainer/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/iqf' element={<About/>} />
            <Route path='/contact' element={<About/>} />
            <Route path='/cart' element={<Cart/>} />
        </Routes>


    </main>
  )
}

export default MainRoutes