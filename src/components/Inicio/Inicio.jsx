import React, { useContext } from 'react';

import { Link } from 'react-router-dom';
import { CartContext } from '../Context/CartContext';

const inicio = () => {
    const { addToCart, removeFromCart } = useContext(CartContext);
    return (
        <div>

            <div>
                {products.map((item) => (
                    <div key={item.id}>

                        <h3>{item.name}</h3>
                        <p>{item.description}</p>
                        <p>Precio: ${item.price}</p>
                        <Link to={`/item/${item.id}`}>Ver detalle</Link>

                        <div>
                            <button onClick={() => addToCart(item, 1)}>
                                Agregar al carrito
                            </button>
                            <button onClick={() => removeFromCart(item.id)}>X</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default inicio;