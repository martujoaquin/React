import React from 'react';
import { useState } from 'react';
import Counter from '../ItemCount/Counter';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const ItemDetail = ({ item }) => {
    const [cantidad, setCantidad] = useState(0);

    const {addToCart} = useContext(CartContext);

    const onAdd = (cantidadItem) => {
        setCantidad(cantidadItem);
        addToCart(item,cantidadItem);
    }

    return (
        <div style={{ display: 'flex' }}>
            <img src={item.img} alt={item.title} />
            <div>
                <h3>{item.title}</h3>
                <h3>$ {item.price}</h3>
                <p>talles:</p>
                <ul>
                    {item.talles?.map((talle) => {
                        return (
                            <li key={talle.id}>
                                {talle.nombre} ${talle.precio}
                            </li>
                        );
                    })}
                </ul>
                {cantidad === 0 ? (
                   <Counter stock = {item.stock} initial={1} onAdd={onAdd}/>
                ) : (
                    <Link to="/cart"> Ir al carrito </Link>
                )}
            </div>
        </div>
    );
};

export default ItemDetail;