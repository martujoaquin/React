import { products } from "../../mock/products";
import React,{ useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {useParams} from 'react-router-dom';

const Item = ()=>{
    const [items, setItems] = useState([]);

    const {categoryName} = useParams();

    useEffect(()=>{
        if (categoryName){
            const getProducts = new Promise ((res,rej) => {
                const prodsfitrados = products.filter((prod)=> prod.category === categoryName);
                setTimeout(()=>{
                    res(prodsfitrados);
                }, 3000);
            });

            getProducts.then((data) =>{
                setItems(data);
            }).catch((error)=>{
                //console.log(error);
            }).finally(()=>{ //sale siempre
                //console.log('Finally');
            });

        } else {
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
        }
    }, []);
        

    return (
        <>
        {
            items.map((item)=>{
                return (
                    <div key={item.id}>
                        <h3>{item.title}</h3>
                        <h5>${item.price}</h5>
                        <Link to='/detail'><button>Ver más</button></Link>
                    </div>
                    

                )
            })
        }
        </>
    )
};

export default Item;


