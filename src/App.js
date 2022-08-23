//Fragments 
//invisible para el DOM, no le puedo dar estilos

import Header from "./components/Header/Header";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import './index.css';
import Footer from "./components/Footer/Footer"

const App = () => {
    return (
        <>
            <Header/>
            <ItemListContainer/>
            <Footer/>
        </>
    ) 
};
//export const Otra = () => 'Hola Mundo';

export default App;
