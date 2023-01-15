import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './About'
import ItemDetailContainer from './ItemDetailContainer'
import ItemListContainer from './ItemListContainer'



const MainRoutes = () => {
  return (
    <main>
        <Routes>
            {/* Bien */}
            <Route path='/' element={<ItemListContainer />} />
            
            {/* deberia ser 
              <Route path='/category/:categoryId' element={<ItemListContainer/>} /> 
            */}
              <Route path='/productos/:categoria' element={<ItemListContainer/>} />
            
            {/* Bien */}
            <Route path='/item/:id' element={<ItemDetailContainer/>} />

            {/* Rutas agregadas */}
            <Route path='/about' element={<About/>} />
            <Route path='/iqf' element={<About/>} />
            <Route path='/contact' element={<About/>} />
        </Routes>


    </main>
  )
}

export default MainRoutes