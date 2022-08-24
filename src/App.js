//Fragments 
//invisible para el DOM, no le puedo dar estilos

import Header from "./components/Header/Header";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import './index.css';
import Footer from "./components/Footer/Footer"

const App = () => {

    const saludo = 'Bienvenidos!'
    const saludar = ()=>{
        console.log('holis');
    }
    return (
        <>
            <Header/>
            <ItemListContainer saludo={saludo} saludar={saludar}/>
            <Footer/>
        </>
    ) 
};
//export const Otra = () => 'Hola Mundo';

export default App;
