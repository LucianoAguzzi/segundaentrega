import React from "react";
import { Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./ItemListContainer/ItemListContainer"
import Cart from "./Cart/Cart";


const AppRoute = () => {
  return (
    <Routes>
      <Route exact path="/item/:id" element={<ItemDetailContainer />} />
      <Route exact path="/" element={<ItemListContainer />} />
      <Route exact path="/category/:categoryId" element={<ItemListContainer />} />
      <Route exact path="/cart" element={<Cart />} />
    </Routes>
  );
};

export default AppRoute;
