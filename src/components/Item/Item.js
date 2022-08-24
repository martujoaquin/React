import { products } from "../../mock/products";
import React,{ useEffect, useState } from "react";

const Item = ()=>{
    const [items, setItems] = useState([])

    useEffect(()=>{
        const getProducts = new Promise ((res,rej) => {
            setTimeout(()=>{
                res(products);
            }, 3000);
        });
    
        getProducts.then((data) =>{
            setItems(data);
        }).catch((error)=>{
            //console.log(error);
        }).finally(()=>{ //sale siempre
            //console.log('Finally');
        });
    },[]);

    return (
        <>
        {
            items.map((item)=>{
                return (
                    <div key={item.id}>
                        <h3>{item.title}</h3>
                        <h5>${item.price}</h5>
                    </div>
                    

                )
            })
        }
        </>
    )
}

export default Item;