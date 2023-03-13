import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import React, { useState, useEffect } from "react";
import { products } from "../../constants/api";

export const ItemDetailContainer = () => {
  const [data, setData] = useState(undefined);
  // Consigo el parametro que me manda la url , que contiene la id del producto a mostrar
  const { id } = useParams();
  useEffect(() => {
    const getData = new Promise((resolve) => {
      // Consigo la lista de productos a traves de una promesa que resuelva la lista de poructos

      setTimeout(() => {
        resolve(products);
      }, 1000);
    });
    getData.then((res) =>
      // Seteo el estado del componente que se llama data, devuelve el producto que tiene el id pasado por parametro

      setData(res.find((product) => product.id.toString() === id))
    );
  }, []);
  // Si el data no es undefined retorna el ItemDetail con el producto encontrado

  return data && <ItemDetail data={data} />;
};

export default ItemDetailContainer;
