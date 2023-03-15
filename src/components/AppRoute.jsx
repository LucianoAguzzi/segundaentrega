import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./About/About";
import ItemDetailContainer from "./ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./ItemListContainer/ItemListContainer";

const AppRoute = () => {
  return (
    <Routes>
      <Route exact path="/about" element={<About />} />
      <Route exact path="/item/:id" element={<ItemDetailContainer />} />
      <Route exact path="/" element={<ItemListContainer />} />
      <Route exact path="/category/:categoryid" element={<ItemListContainer />} />
    </Routes>
  );
};

export default AppRoute;
