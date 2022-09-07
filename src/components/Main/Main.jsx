import React from 'react';
import Button from '../Button/Button';
/* import estilos from './main.modules.css'; */
/* import logoReact from "../../img/logo192.png" */

const Main = ({test, fecha=1, alumno})=>{
    /* console.log(props); */
    //console.log(props.alumno.nombre);
    //const comision = props.test;
    //const {test, fecha} = props;
    //const {nombre} =alumno;

    return (
        <main>
            <section>
                <Button value='Logout' variante='secondary'/>
            </section>
        </main>
    )
}

export default Main;

/* {props.test} asi puedo leer lo enviado desde el app */