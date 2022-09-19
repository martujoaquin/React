import React from 'react';
import { createContext, useState } from 'react';

export const CartContext = createContext();

//componente -> estado, efect, tener funciones que modifiquen mi estado

//crear componente

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    //console.log(props);
    //estados
    //funciones
    const addToCart = (item, cantidad) => {
        //{id: 1, name: 'Producto 1'}
        // 3
        //...item --> id: 1, name: 'Producto 1'
        //console.log({ ...item, cantidad });
        if (isInCart(item.id)) {
            //lo encuentro y le sumo la cantidad
            totalQuatitySingleProduct(item,cantidad);
        } else {
            setCart([...cart, { ...item, cantidad }]);
        }
    };

    // corroborar si el producto ya está en el carrito (isInCart)
    const isInCart = (id) =>{
        return cart.some((producto) => producto.id === id);
    }

    //sumar cantidades del mismo producto
    const totalQuatitySingleProduct = (item,cantidad) => {
        const updateProducts = cart.map ((prod)=>{
            if(prod.id === item.id){
                const productUpdate = {
                    ...prod,
                    cantidad: cantidad,
                };
                return productUpdate;
            } else {
                return prod;
            }
        });
        setCart(updateProducts);
    };

    //calcular total de unidades para el cart widget
    const totalQuality = () => {};

    //calcular total precio
    const totalPrice = () => {
        let acumulador = 0;
        cart.forEach((prod)=>{
            acumulador += prod.cantidad * prod.price;
        });
        return acumulador;
    };

    
    //eliminar un solo producto pasandole el id
    const deleteOne = (id) => {
        const filteredProducts = cart.filter((prod)=> prod.id !== id);
        setCart (filteredProducts);
    };

    //vaciar todo el carrito
    const clearCart = () => {
        setCart([]);
    };

    const getProductQuantity = (id) => {
        const product = cart.find((prod)=> prod.id === id);
        return product?.cantidad;
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, clearCart, deleteOne, totalPrice, totalQuality, getProductQuantity }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;