import { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { products } from '../../mock/products';
import { useParams } from 'react-router-dom';
import ClipLoader from 'react-spinners/ClipLoader';

const ItemDetailContainer = ({saludo}) => {
    const [item, setItem] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const {categoryName} = useParams();

    useEffect(() => {
        const getProduct = () =>
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
            });
            return () => {
                setIsLoading(true);
            } 

    }, [categoryName]);

    return (
    <div 
        style={{
            display:'flex',
            justifyContent: 'center',
            flexDirection: 'column',
        }}>
            {isLoading ? (
                <>
                    <ClipLoader color='black' size={150}/>
                </>
            ) : (
                <>
                    <h2 style={{textAlign: 'center'}}>{saludo}</h2>
                    <ItemDetail item={item} />
                </>
            )
        }
    
    </div>
    );
};

export default ItemDetailContainer;