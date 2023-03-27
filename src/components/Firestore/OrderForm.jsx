import React, { useState, useContext } from 'react'
import { getFirestore, collection, addDoc, Firestore } from 'firebase/firestore'
import { CartContext } from '../Context/CartContext'

const OrderForm = () => {
    const [buyerName, setbuyerName] = useState('')
    const [buyerPhone, setBuyerPhone] = useState('')
    const [buyerEmail, setbuyerEmail] = useState('')
    const [confirmed, setConfirmed] = useState(false)
    const [orderid, setOrderId] = useState('')
    const db = getFirestore()
    const { cart, getTotal, clearCart } = useContext(CartContext)

    const orderCollection = collection(db, 'orders')
    const sendBuy = (e) => {
        e.preventDefault()
        const order = {
            buyer: {
                name: buyerName,
                phone: buyerPhone,
                email: buyerEmail,
            },
            items: cart,
            total: getTotal()
        }
        addDoc(orderCollection, order)
            .then((docref) => {
                setConfirmed(true)
                setOrderId(docref.id)
                clearCart()
            })
    }


    return (
        confirmed ?
            <div>
                <p>Muchas gracias por su compra</p>
                <p>Codigo de seguimiento:{orderid}</p>
            </div> :
            <div>
                <form onSubmit={sendBuy}>
                    <label>
                        Name:
                        <input type="text" value={buyerName}
                            onChange={(e) => setbuyerName(e.target.value)} />
                    </label>
                    <label>
                        Phone:
                        <input type="text" value={buyerPhone}
                            onChange={(e) => setBuyerPhone(e.target.value)} />
                    </label>
                    <label>
                        Email:
                        <input type="text" value={buyerEmail}
                            onChange={(e) => setbuyerEmail(e.target.value)} />
                    </label>
                    <button type='submit'>Finalizar</button>
                </form>
            </div>
    )
}

export default OrderForm