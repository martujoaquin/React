import Main from "../Main/Main"

const ItemListContainer = (props)=>{
    return (
        <>
            <h3>{props.saludo}</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae sit fuga aperiam odio cumque corrupti excepturi, modi omnis cupiditate vel consequatur sed. Rerum deleniti natus porro, et modi placeat nemo.</p>
            {/* <Main test="Comision 37080" 
            fecha={undefined}
            alumno={{nombre:'Tomas', curso:'React'}}/> */}
        </>
    )
}

export default ItemListContainer;