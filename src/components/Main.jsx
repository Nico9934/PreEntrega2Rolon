import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './About'
import ItemDetailContainer from './ItemDetailContainer'
import ItemListContainer from './ItemListContainer'



const Main = () => {
  return (
    <main>

        <Routes>

            <Route path='/' element={<ItemListContainer />} />
            <Route path='/productos/:categoria' element={<ItemListContainer/>} />
            <Route path='/item/:id' element={<ItemDetailContainer/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/iqf' element={<About/>} />
            <Route path='/contact' element={<About/>} />
        </Routes>


    </main>
  )
}

export default Main