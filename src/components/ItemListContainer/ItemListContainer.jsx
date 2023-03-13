import React from "react";
import Title from "../Title/Title";
const ItemListContainer = (props) => {
  return (
    <div>
      <Title greeting={props.texto} />
    </div>
  );
};
//ruta con homepage al entrar te muestre una lsita de items
//si clickeo en uno, poder ir al item detail, utilizando un link (componente link de react router)que me lleve a la direccion item/idproducto
//Tener un componente donde pueda seleccionar categorias de productosy cunado los selecciono, me tiene que mandar a  category/:id"
//lista de items filtrados por esa categoria
export default ItemListContainer;
