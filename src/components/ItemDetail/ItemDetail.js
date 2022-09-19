import React from 'react';
import { useState } from 'react';
import Counter from '../ItemCount/Counter';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const ItemDetail = ({ item }) => {
    const [cantidad, setCantidad] = useState(0);
    const {addToCart, getProductQuantity} = useContext(CartContext);

    const onAdd = (cantidadItem) => {
        setCantidad(cantidadItem);
        addToCart(item,cantidadItem);
    }

    const quantity = getProductQuantity(item.id);

    return (
        <div className="detail" style={{ display: 'flex' }}>
            <img src={item.img} alt={item.title} />
            <div className='info'>
                <h3>{item.title}</h3>
                <h3>$ {item.price}.-</h3>
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
                   <Counter stock = {item.stock} initial={quantity} onAdd={onAdd}/>
                ) : (
                    <Link to="/cart"> Ir al carrito </Link>
                )}
            </div>
        </div>
    );
};

export default ItemDetail;