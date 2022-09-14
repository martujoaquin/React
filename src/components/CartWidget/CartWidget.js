import {TiShoppingCart} from "react-icons/ti";

const CartWidget = ()=>{
    return(
        <div style={{display:'flex', alignItems: 'center'}}>
            <TiShoppingCart/>
            <span>0</span>
        </div>
    )
}

export default CartWidget;