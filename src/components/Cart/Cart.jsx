import React, { useContext } from 'react'
import { CartContext } from '../Context/CartContext'
import OrderForm from "../Firestore/OrderForm";

const Cart = () => {
    const { clearCart, removeFromCart, getTotal, cart } = useContext(CartContext)
    return (
        <>
            {cart.length === 0 ?
                <div> Carrito vacio</div>

                :
                cart.map(item => <div key={item.id}>
                    <h3>{item.title}</h3>
                    <p>{item.price}</p>
                    <img src={item.imageid} alt={item.title} />
                    <button onClick={() => removeFromCart(item.id)}> Remove From Cart</button>
                </div>)}
            <div>
                <p>Total:${getTotal()}</p>
            </div>
            <button onClick={() => clearCart()}>Clear Cart</button>
            <OrderForm />
        </>

    )
}
export default Cart