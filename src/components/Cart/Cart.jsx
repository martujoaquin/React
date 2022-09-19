import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
//import Form from '../Form/Form';

const Cart = () => {
    const { cart, clearCart, deleteOne, totalPrice } = useContext(CartContext);

    const total = totalPrice();

    return (
        <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
            {cart.map((prod)=>(
                <div
                    key={prod.id}
                    style={{
                        border: '1px solid black',
                        borderRadius: '8px',
                        display: 'flex',
                        justifyContent: 'space-around',
                        padding: '8px',
                        margin: '8px',
                    }} >
                    <h3>{prod.title}</h3>
                    <h3>Cantidad: {prod.cantidad}</h3>
                    <h3>Precio${prod.price}.-</h3>
                    <button onClick={()=> deleteOne(prod.id)}>Delete</button>
                </div>
            ))}
            <button onClick={clearCart}>Clear Cart</button>
            <h4>Total: ${total}</h4>
        </div>
    );
};