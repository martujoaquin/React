import Main from "../Main/Main"
import Counter from "../ItemCount/Counter";
import Item from "../Item/Item";



const ItemListContainer = (props)=>{
    return (
        <>
            <h3 onClick={props.saludar}>{props.saludo}</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae sit fuga aperiam odio cumque corrupti excepturi, modi omnis cupiditate vel consequatur sed. Rerum deleniti natus porro, et modi placeat nemo.</p>
            <Main/>
            <Counter stock={(10)}/>
            {/* <Item/> */}
            {/* <Main test="Comision 37080" 
            fecha={undefined}
            alumno={{nombre:'Tomas', curso:'React'}}/> */}
        </>
    )
}

export default ItemListContainer;