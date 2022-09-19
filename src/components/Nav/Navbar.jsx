import Button from '../Button/Button';
import CartWidget from '../CartWidget/CartWidget';
import './index.css'
import {Link} from 'react-router-dom';

const Navbar =(props)=>{
    return (
        <nav className="Navbar">
            <div className="logoMarca">
                <h3>LOGO MARCA</h3>
            </div>
            <div className="botones">
                <ul className='lista'>
                    <li><Link className='a' to={'/'}>INICIO</Link></li>
                    <Link to={'/'}><li>PRODUCTOS</li></Link>
                    <li><Link to="/contacto">CONTACTO</Link></li>
                    <li><Link to="/category/remeras">REMERAS</Link></li>
                    <li><Link to="/category/camisas">CAMISAS</Link></li>
                    <li><Link to="/category/gorras">GORRAS</Link></li>
                </ul>
                <Button value='Sign In' variante='primary'/>
                <link to='/cart'>
                    <CartWidget/>
                </link>
            </div>
        </nav>
    )
}

export default Navbar;