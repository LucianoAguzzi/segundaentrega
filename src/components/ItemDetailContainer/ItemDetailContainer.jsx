import { useParams, Link } from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";
import { getDoc, getFirestore, doc } from 'firebase/firestore'
import OrderForm from "../Firestore/OrderForm";
import Spinner from "../Spinner/Spinner";
import { CartContext } from "../Context/CartContext";

const ItemDetailContainer = () => {
    const { addToCart } = useContext(CartContext)
    const { id } = useParams()
    const [loading, setLoading] = useState()
    const [items, setItems] = useState()
    useEffect(() => {
        const db = getFirestore()
        const marketRef = doc(db, 'item', id)
        getDoc(marketRef)
            .then(res => {
                if (res.data()) {
                    return setItems({ id: res.id, ...res.data() });
                } else {
                    setItems();
                }
            })
    }, [id]);
    const onAdd = () => { addToCart(items, 1) }

    return (
        items ?
            <div>

                <img src={items.imageid} />
                <h4>{items.title}</h4>
                <p>{items.description}</p>
                <p>Stock: {items.stock}. Precio: {items.price}</p>

                <button onClick={onAdd} > Add to cart</button>

            </div>
            :
            <div>
                <Spinner />
            </div>
    );
};
export default ItemDetailContainer;

