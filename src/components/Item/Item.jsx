import React from "react";
import { Link } from "react-router-dom";

const Item = ({ id, name }) => {
  return (
    <div>
      <p>{name}</p>
      Item
      <Link to={`/item/${id}`}>See more</Link>
    </div>
  );
};

export default Item;
