import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";


const CartWidget = () => {
  const { getTotalQuantity } = useContext(CartContext)
  return (
    <div>
      <i className="bi bi-cart">{getTotalQuantity()}</i>
    </div>
  );
};

export default CartWidget;
