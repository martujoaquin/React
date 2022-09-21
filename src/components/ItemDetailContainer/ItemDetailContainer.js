import { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { products } from '../../mock/products';
import { useParams } from 'react-router-dom';
import ClipLoader from 'react-spinners/ClipLoader';
import { db } from '../../firebaseConfig';
import { getDoc, doc, collection } from 'firebase/firestore';

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    /*const [isLoading, setIsLoading] = useState(true);*/

    const {idProd} = useParams();

    useEffect(() => {
        /*const getProduct = () =>
            new Promise((res, rej) => {
                //realizo el find para encontrar un solo producto
                const prodFiltrados = products.filter((prod) => prod.category === categoryName);
                setTimeout(() => {
                    res(categoryName ? prodFiltrados : products);
                }, 300);
            });
        getProduct()
            .then((data) => {
                setItem(data);
                setIsLoading(false);
            })
            .catch((error) => {
                console.log(error);
            });*/
            const itemCollection = collection(db, 'productos');
            const ref = doc(itemCollection, idProd);
            
            getDoc(ref).then((res)=>{
                setItem({id: res.id, ...res.data()});
            });
    }, [idProd]);

    return (
    <div 
        style={{ minHeight: '70vh' }}>
            <ItemDetail item={item}/>
    </div>
    );
};

export default ItemDetailContainer;