import React, {useState} from "react";

//use
const Counter = ({stock}) =>{
    const [count, setCount] = useState(0);

    const sumar = () =>{
        count < stock && setCount(count + 1);
    };

    const restar = () =>{
        count > 0 && setCount(count-1);
    };
    
    const onAdd = () =>{
        console.log("Agrego producto");
    };

    const agregarAlCarrito = () => {
        onAdd(count);
    };

    return (
        <div>
            <button onClick={sumar}>+</button>
            <button onClick={restar}>-</button>
            <p>Count: {count}</p>
            <button onClick={agregarAlCarrito}>Agregar al carrito</button>
        </div>
    )
}

export default Counter;