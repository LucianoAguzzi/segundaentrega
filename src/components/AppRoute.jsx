import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./About/About";
import ItemDetailContainer from "./ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./ItemListContainer/ItemListContainer";

const AppRoute = () => {
  return (
    <Routes>
      <Route exact path="/about" element={<About />} />
      <Route path="/item/:id" element={<ItemDetailContainer />} />
      <Route path="/" element={<ItemListContainer />} />
      <Route path="/category/:id" element={<ItemListContainer />} />
    </Routes>
  );
};

export default AppRoute;
