import React from 'react'
import { Routes, Route } from 'react-router-dom';
import About from './About/About';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
const AppRoute = () => {
  return (
    <Routes>
        <Route exact path='/about' element={<About/>}/>
        <Route exact path='/'element={<ItemListContainer/>}/>
        <Route path='category/:id'element={<ItemListContainer/>}/>
        <Route path='/item/:id' element={<ItemDetailContainer/>}/>
    </Routes>
  )
}

export default AppRoute