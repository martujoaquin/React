//Fragments 
//invisible para el DOM, no le puedo dar estilos

import Header from "./components/Header/Header";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import './index.css';
import Footer from "./components/Footer/Footer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter } from "react-router-dom";
import {Route, Routes} from 'react-router-dom';
import Item from "./components/Item/Item";

const App = () => {

    const saludo = 'Bienvenidos!'
    const saludar = ()=>{
        console.log('holis');
    }
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path='/' element={<ItemListContainer saludo={saludo} saludar={saludar}/>}/>

                <Route path="/category/:categoryName" element={<Item/>}/>


                <Route path="/detail" element={<ItemDetailContainer/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    ) 
};
//export const Otra = () => 'Hola Mundo';

export default App;
