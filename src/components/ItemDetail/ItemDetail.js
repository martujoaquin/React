import React from 'react';
import { useState } from 'react';
import Counter from '../ItemCount/Counter';

const ItemDetail = ({ item }) => {
    const [cantidad, setCantidad] = useState(0);

    const onAdd = (arg) => {
        setCantidad(arg);
    };
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
                    <h2>Cantidad es 0</h2>
                ) : (
                    <h2>Cantidad es {cantidad}</h2>
                )}
                <Counter stock={10} initial={1} onAdd={onAdd}/>
            </div>
        </div>
    );
};

export default ItemDetail;