import React, { useState, useEffect } from "react";
// import "./ItemListContainer.css";
import { products } from "../../constants/api";
import { useParams } from "react-router-dom";
import Item from "../Item/Item";

export const ItemListContainer = () => {
  const [data, setData] = useState([]);

  const { categoryid } = useParams();

  useEffect(() => {
    const getData = new Promise((resolve) => {
      setTimeout(() => {
        resolve(products);
      }, 1000);
    });

    if (categoryid) {
      getData.then((res) =>
        setData(res.filter((products) => products.category === categoryid))
      );
    } else {
      getData.then((res) => setData(res));
    }
  }, [categoryid]);

  return (
    <>
      {categoryid}
      {data.map((producto) => (
        <Item id={producto.id} key={producto.id} name={producto.title} />
      ))}
    </>
  );
};

export default ItemListContainer;
//ruta con homepage al entrar te muestre una lsita de items
//si clickeo en uno, poder ir al item detail, utilizando un link (componente link de react router)que me lleve a la direccion item/idproducto
//Tener un componente donde pueda seleccionar categorias de productosy cunado los selecciono, me tiene que mandar a  category/:id"
//lista de items filtrados por esa categoria
