import Button from '../Button/Button';
import CartWidget from '../CartWidget/CartWidget';
import './index.css'

const Navbar =(props)=>{
    console.log(props);
    return (
        <nav className="navbar">
            <div className="logoMarca">
                <h3>LOGO MARCA</h3>
            </div>
            <div className="botones">
                <ul className='lista'>
                    <li><a className='a' href="google.com">INICIO</a></li>
                    <li><a href="google.com">PRODUCTOS</a></li>
                    <li><a href="google.com">CONTACTO</a></li>
                </ul>
                <Button value='Sign In' variante='primary'/>
                <CartWidget/>
            </div>
        </nav>
    )
}

export default Navbar;