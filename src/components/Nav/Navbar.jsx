import './index.css'

const Navbar =()=>{
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
                    <li><a href="google.com">CARRITO</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;